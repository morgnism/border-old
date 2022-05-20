import Hero from '@components/Hero/Hero';
import Layout from '@components/Layout/Layout';
import { sanityClient } from '@lib/sanity-client';
import { overlayDrafts } from '@utils/overlayDrafts';
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
    <Layout
      title={homeTitle}
      description={metaData.description ?? ''}
      className="mx-auto max-w-7xl"
    >
      <Hero description={metaData.description ?? ''} />
      <section className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl mb-64">
        {allPosts.map(
          ({ _id, title = '', slug, publishedAt = '' }) =>
            slug && (
              <article key={_id} className="col-span-4 mb-10">
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
                ({new Date(publishedAt).toDateString()})
              </article>
            ),
        )}
      </section>
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
