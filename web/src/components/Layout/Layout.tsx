import Alert from '@components/Alert';
import Header from '@components/Header';
import Meta from './Meta';

type LayoutProps = {
  /** Provide a meaningful and SEO-friendly title for the page */
  title: string;
  /** Provide a meaningful and SEO-friendly description for the page */
  description: string;
  preview: boolean;
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
  preview,
  className = '',
  children,
  ...props
}) => {
  return (
    <>
      <Meta {...props} />
      <div className="min-h-screen">
        {preview && <Alert preview={preview} />}
        <Header />
        <main className={`mt-20 mb-52 ${className}`}>{children}</main>
        {/* TODO: add global footer */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Layout;
