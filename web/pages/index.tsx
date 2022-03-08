import type { NextPage } from 'next';
import { groq } from 'next-sanity';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { sanityClient } from '../src/lib';
import styles from '../styles/Home.module.css';

const Home: NextPage = ({ posts }) => {
  return (
    <div>
      <h1>Welcome to a blog!</h1>
      {posts.length > 0 &&
        posts.map(
          ({ _id, title = '', slug = '', publishedAt = '' }) =>
            slug && (
              <li key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
                ({new Date(publishedAt).toDateString()})
              </li>
            ),
        )}
    </div>
  );
};

export async function getStaticProps() {
  const posts = await sanityClient.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `);
  return {
    props: {
      posts,
    },
  };
}

export default Home;
