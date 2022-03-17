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
    <div className="relative flex flex-col min-h-screen">
      {/* TODO: add global header */}
      {/* <Header /> */}
      <main className={`flex-grow ${className}`}>{children}</main>
      {/* TODO: add global footer */}
      {/* <Footer /> */}
    </div>
  </>
);

export default Layout;
