import Head from "next/head";

interface ISeo {
  title: string;
  description: string;
  url: string;
}

export const SEO: React.FC<ISeo> = ({ title, description, url }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{title}</title>
        <meta name="description" content={description} key="ogdesc" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta name="author" content="Andreas Gunnahr" />
        <meta
          property="og:description"
          name="description"
          content={description}
        />
        <meta property="og:url" content={url} />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>

        {/* Twitter */}
        {/* <meta
          name="twitter:title"
          content="Fullstack Developer - Andreas Gunnahr - Sweden"
        />
        <meta
          name="twitter:description"
          content={
            "Fullstack developer located in Sweden. I like building complex web applications and delve into new technologies. I find the whole Javascript stack extremely exciting and I believe that's where I can offer my knowledge. I also have a deep desire to excel and continuously improve my work."
          }
        /> */}

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
