import Layout from '@components/Layout';
import {
  allPostSlugsQuery,
  postBySlugQuery,
  postQuery,
  siteMetadataQuery,
} from '@lib/queries';
import { urlForImage, usePreviewSubscription } from '@lib/sanity';
import { getClient, sanityClient } from '@lib/sanity.server';
import { PortableText } from '@portabletext/react';
import { NextPage } from 'next';
import ErrorPage from 'next/error';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { Documents, Post, SiteSettings } from '../../../studio/schema';

type PostProps = {
  siteTitle: string;
  post: {
    authorName: string;
    authorImage: string;
    description: string;
    tags: string[];
  } & Post;
  preview: boolean;
};

type PostContext = {
  preview: boolean;
  params: { slug: string };
};

const PortableImageComponent: React.FC<any> = ({ value }) => {
  if (!value?.asset?._ref) {
    return null;
  }
  return (
    <Image
      src={urlForImage(value).width(320).height(240).url()}
      alt={value.alt || ' '}
      loading="lazy"
      width={50}
      height={50}
    />
  );
};

const ptComponents = {
  types: {
    image: PortableImageComponent,
  },
};

const Post: NextPage<PostProps> = ({
  siteTitle,
  post: initialData,
  preview,
}) => {
  const router = useRouter();

  const { data: post } = usePreviewSubscription(postBySlugQuery, {
    params: { slug: initialData.slug },
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData,
    // The passed-down preview context determines whether this function does anything
    enabled: preview,
  });
  const pageTitle = `${siteTitle} | ${post.title}`;

  if (!router.isFallback && !initialData?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout title={pageTitle} description={post.description} preview={preview}>
      <article className="relative mx-auto max-w-7xl mb-64">
        <h1>{post.title}</h1>
        <span>By {post.authorName}</span>
        {post.tags && (
          <ul>
            Posted in
            {post.tags.map((category) => (
              <li key={category as unknown as string}>{category}</li>
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
        <PortableText value={post.body} components={ptComponents} />
      </article>
    </Layout>
  );
};

export const getStaticProps = async ({
  params,
  preview = false,
}: PostContext) => {
  // It's important to default the slug so that it doesn't return "undefined"
  const [siteMeta, post] = await Promise.all([
    sanityClient.fetch<SiteSettings>(siteMetadataQuery),
    getClient(preview).fetch<Documents>(postQuery, {
      slug: params.slug,
    }),
  ]);

  return {
    props: {
      preview,
      siteTitle: siteMeta.title,
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(allPostSlugsQuery);

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: 'blocking',
  };
};

export default Post;
