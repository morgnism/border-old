import MainNav from '@components/Header/Header';
import { groq } from 'next-sanity';
import Head from 'next/head';

type LayoutProps = {
  /** Provide a meaningful and SEO-friendly title for the page */
  title: string;
  /** Provide a meaningful and SEO-friendly description for the page */
  description: string;
  className?: string;
  children: React.ReactNode;
};

// const navigationQuery = groq`*[_type == "navigation"][0]{
//   sections[0]{
//     "links": links[0].internalLink->{
//       title,
//       "slug": slug.current
//     }
//   }
// }`;

const Layout: React.FC<LayoutProps> = ({
  title,
  description,
  className = '',
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        {/* TODO: research other meta content types to add */}
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content={description} name="twitter:description" />
        {/* TODO: add meta for tweets */}
      </Head>
      <div className="min-h-screen">
        <MainNav />
        <main className={`mt-20 mb-52 ${className}`}>{children}</main>
        {/* TODO: add global footer */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
