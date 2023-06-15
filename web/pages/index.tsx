import { Post } from '@app-types/Post';
import { Project } from '@app-types/Project';
import Card from '@components/Card';
import Layout from '@components/Layout/Layout';
import { allPostsProjectsMetaQuery, allPostsQuery } from '@lib/queries';
import { usePreviewSubscription } from '@lib/sanity';
import { getClient } from '@lib/sanity.server';
import { overlayDrafts } from '@lib/utils/overlayDrafts';
import type { NextPage } from 'next';
import { SiteSettings } from '../../studio/schema';

type HomeProps = {
  metaData: SiteSettings;
  allPosts: Post[];
  allProjects: Project[];
  preview: boolean;
};

const Home: NextPage<HomeProps> = ({
  metaData,
  allPosts: initialAllPosts,
  allProjects,
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
      <section>
        <h2 className="mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl">
          Latest Posts
        </h2>
        <div
          className="relative grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-y-12 mb-24"
          aria-label="latest blog articles"
        >
          {allPosts.map((post) => (
            <Card key={post._id} {...{ item: post }} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl">
          Latest Projects
        </h2>
        <div
          className="relative grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-y-12 mb-24"
          aria-label="latest blog articles"
        >
          {allProjects.map((project) => (
            <Card key={project._id} {...{ item: project }} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async ({ preview = false }) => {
  const { metaData, posts, projects } = await getClient(false).fetch<{
    metaData: SiteSettings;
    posts: Post[];
    projects: Project[];
  }>(allPostsProjectsMetaQuery);
  const allPosts = overlayDrafts(posts);

  return {
    props: {
      metaData,
      allPosts,
      allProjects: projects,
      preview,
    },
  };
};

export default Home;
