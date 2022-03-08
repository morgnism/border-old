import Layout from '@/components/Layout/Layout';
import type { NextPage } from 'next';
import { groq } from 'next-sanity';
import Link from 'next/link';
import { Post } from '../../studio/schema';
import { sanityClient } from '../src/lib';

type HomeProps = {
  posts: Post[];
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <Layout
      title="Home"
      description="BorderDev blog featuring Software Engineering tips, concepts, and practical examples."
    >
      <h1>Welcome to a blog!</h1>
      {posts.length > 0 &&
        posts.map(
          ({ _id, title = '', slug, publishedAt = '' }) =>
            slug && (
              <li key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
                ({new Date(publishedAt).toDateString()})
              </li>
            ),
        )}
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await sanityClient.fetch<Post[]>(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `);
  return {
    props: {
      posts,
    },
  };
}

export default Home;
