import { Post } from '@app-types/post';
import Card from '@components/Card';
import Layout from '@components/Layout/Layout';
import { allPostsAndMetaQuery, allPostsQuery } from '@lib/queries';
import { usePreviewSubscription } from '@lib/sanity';
import { getClient } from '@lib/sanity.server';
import { overlayDrafts } from '@lib/utils/overlayDrafts';
import type { NextPage } from 'next';
import { SiteSettings } from '../../studio/schema';

type HomeProps = {
  metaData: SiteSettings;
  allPosts: Post[];
  preview: boolean;
};

const Home: NextPage<HomeProps> = ({
  metaData,
  allPosts: initialAllPosts,
  preview,
}) => {
  const { data: allPosts } = usePreviewSubscription(allPostsQuery, {
    initialData: initialAllPosts,
    enabled: preview,
  });
  const homeTitle = `${metaData.title!} | Home`;

  return (
    <Layout
      title={homeTitle}
      description={metaData.description ?? ''}
      className="mx-auto max-w-7xl"
      preview={preview}
    >
      <section
        className="relative grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-y-12 mb-64"
        aria-label="latest blog articles"
      >
        {allPosts.map((post) => (
          <Card key={post._id} {...{ post }} />
        ))}
      </section>
    </Layout>
  );
};

export const getStaticProps = async ({ preview = false }) => {
  const { metaData, posts } = await getClient(false).fetch<{
    metaData: SiteSettings;
    posts: Post[];
  }>(allPostsAndMetaQuery);
  const allPosts = overlayDrafts(posts);

  return {
    props: {
      metaData,
      allPosts,
      preview,
    },
  };
};

export default Home;
