import Article from '@components/Article';
import { BackToTopButton } from '@components/Buttons';
import Layout from '@components/Layout';
import MDXComponents from '@components/MDX';
import { useScrollOffsetHook } from '@hooks/use-scroll-offset';
import {
  allProjectSlugsQuery,
  projectQuery,
  siteMetadataQuery,
} from '@lib/queries';
import { urlForImage, usePreviewSubscription } from '@lib/sanity';
import { getClient, sanityClient } from '@lib/sanity.server';
import { NextPage } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import ErrorPage from 'next/error';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Project, SiteSettings } from '../../../studio/schema';

type ProjectProps = {
  siteTitle: string;
  project: {
    content: MDXRemoteSerializeResult<
      Record<string, unknown>,
      Record<string, string>
    >;
    description: string;
    tags: string[];
    body: string;
  } & Project;
  preview: boolean;
  error: unknown;
};

const Project: NextPage<ProjectProps> = ({
  siteTitle,
  project: initialData,
  preview,
  error,
}) => {
  const showButton = useScrollOffsetHook();
  const router = useRouter();
  const { data: project } = usePreviewSubscription(projectQuery, {
    params: { slug: initialData.slug },
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData,
    // The passed-down preview context determines whether this function does anything
    // enabled: preview,
    enabled: false,
  });
  const pageTitle = `${siteTitle} | ${project.title}`;

  if (error || (!router.isFallback && !initialData?.slug)) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout
      title={pageTitle}
      description={project.description}
      preview={preview}
    >
      <Article>
        {<MDXRemote {...project.content} components={MDXComponents} />}
        {project.tags && (
          <ul>
            {project.tags.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        )}
        {showButton && <BackToTopButton />}
      </Article>
    </Layout>
  );
};

type ProjectContext = {
  preview: boolean;
  params: { slug: string };
};

export const getStaticProps = async ({
  params,
  preview = false,
}: ProjectContext) => {
  // It's important to default the slug so that it doesn't return "undefined"
  const [siteMeta, project] = await Promise.all([
    getClient(preview).fetch<SiteSettings>(siteMetadataQuery),
    getClient(preview).fetch<Project>(projectQuery, {
      slug: params.slug,
    }),
  ]);

  try {
    // Then serialize to mdx formatted string for hydration in components.
    const content = await serialize(project.body);

    return {
      props: {
        preview,
        siteTitle: siteMeta.title,
        project: { ...project, content },
        error: null,
      },
      revalidate: 60, // 60 second revalidation
    };
  } catch (error) {
    console.error(error);
    return { props: error };
  }
};

export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(allProjectSlugsQuery);

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: 'blocking',
  };
};

export default Project;
