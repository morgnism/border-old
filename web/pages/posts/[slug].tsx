import Article from '@components/Article';
import Layout from '@components/Layout';
import MDXComponents from '@components/MDX';
import { allPostSlugsQuery, postQuery, siteMetadataQuery } from '@lib/queries';
import { urlForImage, usePreviewSubscription } from '@lib/sanity';
import { getClient, sanityClient } from '@lib/sanity.server';
import { NextPage } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import ErrorPage from 'next/error';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Post, SiteSettings } from '../../../studio/schema';

type PostProps = {
  siteTitle: string;
  post: {
    content: MDXRemoteSerializeResult<
      Record<string, unknown>,
      Record<string, string>
    >;
    authorName: string;
    authorImage: string;
    description: string;
    tags: string[];
  } & Post;
  preview: boolean;
  error: unknown;
};

const Post: NextPage<PostProps> = ({
  siteTitle,
  post: initialData,
  preview,
  error,
}) => {
  const router = useRouter();
  const { data: post } = usePreviewSubscription(postQuery, {
    params: { slug: initialData.slug },
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData,
    // The passed-down preview context determines whether this function does anything
    // enabled: preview,
    enabled: false,
  });
  const pageTitle = `${siteTitle} | ${post.title}`;

  if (error || (!router.isFallback && !initialData?.slug)) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout title={pageTitle} description={post.description} preview={preview}>
      <Article>
        <MDXRemote {...post.content} components={MDXComponents} />
        <span>By {post.authorName}</span>
        {post.tags && (
          <ul>
            Posted in
            {post.tags.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        )}
        {post.authorImage && (
          <div>
            <Image
              src={urlForImage(post.authorImage).width(50).url()}
              alt={post.authorName}
              width={50}
              height={50}
            />
          </div>
        )}
      </Article>
    </Layout>
  );
};

type PostContext = {
  preview: boolean;
  params: { slug: string };
};

export const getStaticProps = async ({
  params,
  preview = false,
}: PostContext) => {
  // It's important to default the slug so that it doesn't return "undefined"
  const [siteMeta, post] = await Promise.all([
    getClient(preview).fetch<SiteSettings>(siteMetadataQuery),
    getClient(preview).fetch<Post>(postQuery, {
      slug: params.slug,
    }),
  ]);

  try {
    // Then serialize to mdx formated string for hydration in components.
    const content = await serialize(post.body);

    return {
      props: {
        preview,
        siteTitle: siteMeta.title,
        post: { ...post, content },
        error: null,
      },
      revalidate: 60, // 60 second revalidation
    };
  } catch (error) {
    console.error(error);
    return { props: error };
  }
};

export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(allPostSlugsQuery);

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: 'blocking',
  };
};

export default Post;
