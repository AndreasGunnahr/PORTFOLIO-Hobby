import Head from "next/head";

interface ISeo {
  pageTitle: string;
  description: string;
}

export const SEO: React.FC<ISeo> = ({ pageTitle, description }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta
          property="og:title"
          content={`Andreas Gunnahr | ${pageTitle}`}
          key="ogtitle"
        />
        <meta property="og:description" content={description} key="ogdesc" />
        <title>{`Andreas Gunnahr | ${pageTitle}`}</title>

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>

        {/* Twitter
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" /> */}

        {/* Open Graph
        <meta property="og:url" content={currentURL} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" /> */}
      </Head>
    </>
  );
};
