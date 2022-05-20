import MainNav from '@components/Header/Header';
import Head from 'next/head';

type LayoutProps = {
  /** Provide a meaningful and SEO-friendly title for the page */
  title: string;
  /** Provide a meaningful and SEO-friendly description for the page */
  description: string;
  className?: string;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({
  title,
  description,
  className = '',
  children,
}) => (
  <>
    <Head>
      <title>{title}</title>

      {/* TODO: research other meta content types to add */}
      <meta content={description} name="description" />
      <meta content={description} property="og:description" />
      <meta content={description} name="twitter:description" />
      {/* TODO: add meta for tweets */}
    </Head>
    <main className="min-h-screen">
      <MainNav />
      <section className={`mt-20 mb-52 ${className}`}>{children}</section>
      {/* TODO: add global footer */}
      {/* <Footer /> */}
    </main>
  </>
);

export default Layout;
