import Header from '@components/Header/Header';
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
  <div className="md:container px-4">
    <Head>
      <title>{title}</title>

      {/* TODO: research other meta content types to add */}
      <meta content={description} name="description" />
      <meta content={description} property="og:description" />
      <meta content={description} name="twitter:description" />
      {/* TODO: add meta for tweets */}
    </Head>
    <div className="grid gap-4 grid-cols-5 min-h-screen">
      <Header />
      <main className={`${className}`}>{children}</main>
      {/* TODO: add global footer */}
      {/* <Footer /> */}
    </div>
  </div>
);

export default Layout;
