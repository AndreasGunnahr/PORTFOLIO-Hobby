import Head from "next/head";

import { GA_TRACKING_ID } from "lib/gtag";

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
        <meta
          name="twitter:title"
          content="Fullstack Developer - Andreas Gunnahr - Sweden"
        />
        <meta
          name="twitter:description"
          content={
            "Fullstack developer located in Sweden. I like building complex web applications and delve into new technologies."
          }
        />

        {/* Open Graph
        <meta property="og:url" content={currentURL} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" /> */}
        {process.env.NODE_ENV === "production" && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
              }}
            />
          </>
        )}
      </Head>
    </>
  );
};
