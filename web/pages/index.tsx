import Layout from '@components/Layout/Layout';
import SummaryPortableText from '@components/PortableText/SummaryPortableText';
import SanityLink from '@components/SanityLink/SanityLink';
import { allPostsAndMetaQuery, allPostsQuery } from '@lib/queries';
import { usePreviewSubscription } from '@lib/sanity';
import { getClient } from '@lib/sanity.server';
import { overlayDrafts } from '@lib/utils/overlayDrafts';
import format from 'date-fns/format';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Post, SiteSettings } from '../../studio/schema';

type HomeProps = {
  metaData: SiteSettings;
  allPosts: Array<
    {
      coverImage: {
        alt: string;
        src: string;
      };
      tags: string[];
      slug: string;
    } & Post
  >;
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
  const { pathname } = useRouter();
  const homeTitle = `${metaData.title!} | Home`;

  return (
    <Layout
      title={homeTitle}
      description={metaData.description ?? ''}
      className="mx-auto max-w-7xl"
      preview={preview}
    >
      <section
        className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl mb-64"
        aria-label="latest blog articles"
      >
        {allPosts.map(
          ({
            _id,
            title = '',
            slug,
            external,
            publishedAt = '',
            summary,
            tags,
          }) => (
            <article
              key={_id}
              className="col-span-4 mb-10 flex flex-col border border-gray-300 rounded bg-white p-4"
            >
              <div className="flex flex-col flex-grow mb-5">
                <SanityLink
                  className="text-2xl hover:text-slate-600 mb-4"
                  href={slug ? `/posts/${slug}` : external!}
                  isActive={pathname === slug}
                >
                  {title}
                </SanityLink>
                {summary && <SummaryPortableText summary={summary} />}
              </div>
              <div className="text-sm mb-2">
                {format(new Date(publishedAt), 'MMM do, yyyy')}
              </div>
              <p className="flex">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="mr-2 px-2 border rounded-full bg-slate-100 text-gray-600 text-sm"
                  >
                    {tag.toLocaleLowerCase()}
                  </span>
                ))}
              </p>
            </article>
          ),
        )}
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
