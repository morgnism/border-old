import Layout from '@/components/Layout/Layout';
import { PortableText } from '@portabletext/react';
import { NextPage } from 'next';
import { groq } from 'next-sanity';
import Image from 'next/image';
import React from 'react';
import { Documents, Post } from '../../../studio/schema';
import {
  getClient,
  postSlugsQuery,
  sanityClient,
  urlForImage,
} from '../../src/lib';

type PostProps = {
  post: {
    name: string;
    authorImage: string;
    excerpt?: string;
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

const Post: NextPage<PostProps> = ({ post }) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    excerpt = '',
    body = [],
  } = post;

  return (
    <Layout title={title} description={excerpt}>
      <article>
        <h1>{title}</h1>
        <span>By {name}</span>
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
              alt={name}
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

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;

export const getStaticProps = async ({
  params,
  preview = false,
}: PostContext) => {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = params;
  const post = await getClient(preview).fetch<Documents>(query, {
    slug,
  });

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(postSlugsQuery);

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
};

export default Post;
