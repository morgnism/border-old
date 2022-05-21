import Hero from '@components/Hero/Hero';
import Layout from '@components/Layout/Layout';
import { sanityClient } from '@lib/sanity-client';
import { overlayDrafts } from '@utils/overlayDrafts';
import format from 'date-fns/format';
import type { NextPage } from 'next';
import { groq } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
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
    } & Post
  >;
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
      <section
        className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl mb-64"
        aria-label="latest blog articles"
      >
        {allPosts.map(
          ({
            _id,
            title = '',
            slug,
            publishedAt = '',
            summary,
            tags,
            coverImage,
          }) =>
            slug && (
              <article
                key={_id}
                className="col-span-4 mb-10 flex flex-col border border-gray-300 rounded bg-white p-4"
              >
                <Link href={`/post/${slug.current}`} passHref>
                  {/* <Image
                      className="mb-2"
                      src={coverImage.url}
                      alt={coverImage.alt}
                    /> */}
                  <div className="flex-grow mb-5">
                    <h2 className="text-2xl">{title}</h2>
                    <p>{summary}</p>
                  </div>
                </Link>
                <div className="mb-2">
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

const homeMetadataQuery = groq`
*[_type == "siteSettings"][0]{
  title,
  description,
  url
}
`;

const allPostsQuery = groq`
*[_type == "post" && publishedAt < now()] | order(_updatedAt desc){
  _id,
  title,
  "author": author->name,
  "tags": categories[]->title,
  "coverImage": mainImage{
    alt,
    "src": asset->url
  },
  "summary": summary[0].children[0].text,
  "slug": slug.current,
  publishedAt
}
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
