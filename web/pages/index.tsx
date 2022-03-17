import Layout from '@/components/Layout/Layout';
import { sanityClient } from '@/lib/sanity-client';
import { overlayDrafts } from '@/utils/overlayDrafts';
import type { NextPage } from 'next';
import { groq } from 'next-sanity';
import Link from 'next/link';
import { Post, SiteSettings } from '../../studio/schema';

type HomeProps = {
  metaData: SiteSettings;
  allPosts: Post[];
};

const Home: NextPage<HomeProps> = ({ metaData, allPosts }) => {
  const homeTitle = `${metaData.title!} | Home`;

  return (
    <Layout title={homeTitle} description={metaData.description!}>
      <h1 className="text-3xl font-bold underline">Welcome to a blog!</h1>
      {allPosts.length > 0 &&
        allPosts.map(
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

const homeMetadataQuery = groq`
*[_type == "siteSettings"][0]{
  title,
  description,
  url
}
`;

const allPostsQuery = groq`
*[_type == "post" && publishedAt < now()] | order(_updatedAt desc)
`;

export async function getStaticProps() {
  const metaData = await sanityClient.fetch<SiteSettings>(homeMetadataQuery);
  const allPosts = overlayDrafts(
    await sanityClient.fetch<Post[]>(allPostsQuery),
  );

  return {
    props: {
      metaData,
      allPosts,
    },
  };
}

export default Home;
