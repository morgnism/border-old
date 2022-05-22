import Layout from '@components/Layout/Layout';
import { PortableText } from '@portabletext/react';
import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { Documents, Post, SiteSettings } from '../../../studio/schema';
import { getClient, sanityClient } from '@lib/sanity-client';
import { urlForImage } from '@lib/sanity';
import { groq } from 'next-sanity';

type PostProps = {
  siteTitle: string;
  post: {
    authorName: string;
    authorImage: string;
    description: string;
  } & Post;
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

const Post: NextPage<PostProps> = ({ siteTitle, post }) => {
  const {
    title = 'Missing title',
    authorName = 'Missing name',
    categories,
    authorImage,
    description,
    body = [],
  } = post;
  const pageTitle = `${siteTitle} | ${title}`;

  return (
    <Layout title={pageTitle} description={description}>
      <article>
        <h1>{title}</h1>
        <span>By {authorName}</span>
        {categories && (
          <ul>
            Posted in
            {categories.map((category) => (
              <li key={category as unknown as string}>{category}</li>
            ))}
          </ul>
        )}
        {authorImage && (
          <div>
            <Image
              src={urlForImage(authorImage).width(50).url()}
              alt={authorName}
              width={50}
              height={50}
            />
          </div>
        )}
        <PortableText value={body} components={ptComponents} />
      </article>
    </Layout>
  );
};

const siteMetadataQuery = groq`
*[_type == "siteSettings"][0].title
`;

const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "authorName": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body,
  "description": summary[0].children[0].text
}`;

const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const getStaticProps = async ({
  params,
  preview = false,
}: PostContext) => {
  // It's important to default the slug so that it doesn't return "undefined"
  const siteTitle = await sanityClient.fetch<SiteSettings>(siteMetadataQuery);
  const { slug = '' } = params;
  const post = await getClient(preview).fetch<Documents>(postBySlugQuery, {
    slug,
  });

  return {
    props: {
      siteTitle,
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(postSlugsQuery);

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: false,
  };
};

export default Post;
