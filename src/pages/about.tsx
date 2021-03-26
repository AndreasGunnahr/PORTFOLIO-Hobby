import {
  Break,
  SectionSubTitle,
  SectionTitle,
  Icon,
} from "components/elements";
import { Contact, Layout, Timeline } from "components/modules";
import { getSingleMatterFile } from "lib/markdown";
// import Image from "next/image";

export default function About({ seo, content }) {
  return (
    <Layout seo={seo.about}>
      <section className="grid grid-cols-1 pt-10 px-6 max-w-screen-desktop mx-auto md:px-12 md:pt-14">
        {/* <div className="mb-8">
          <Image
            alt="Mountains"
            className="mb-8"
            src="/images/guy.jpg"
            layout="intrinsic"
            width={1920}
            height={1080}
          />
        </div> */}
        <SectionSubTitle text={content.subTitles[0]} />
        <SectionTitle text={content.mainTitle[0]} />
        <div className="mt-6 space-y-4">
          {content.textDescription.map((text, index) => (
            <p key={index} className="max-w-4xl">
              {text}
            </p>
          ))}
        </div>
      </section>

      <section className="my-12 h-28 max-w-screen-noPadding mx-auto flex">
        {content.boxOptions.map((option, index) => (
          <div
            key={index}
            className="bg-black text-white w-full flex flex-col items-center justify-center border-r-2 border-gray-300 last:border-r-0"
          >
            <h2 className="font-extrabold text-2xl md:text-3xl">
              {option.title}
            </h2>
            <p className="w-full mt-2 font-bold text-xs lg:text-sm px-4 uppercase tracking-wider flex flex-wrap justify-center text-center">
              {option.description}
            </p>
          </div>
        ))}
      </section>
      <Timeline />
      <Break my={12} />

      <section className="mb-10 px-6 max-w-screen-desktop mx-auto md:px-12">
        <SectionSubTitle text={content.subTitles[1]} />
        <SectionTitle text={content.mainTitle[1]} />
        <div className="grid grid-cols-3 mt-6 gap-2">
          {content.techOptions.map((option, index) => (
            <div
              key={index}
              className="flex flex-col items-center border-2 border-gray-200 rounded p-4 h-30 text-gray-300"
            >
              <Icon
                variant={option.type}
                className="h-10 w-10 lg:h-12 lg:w-12"
              />
              <p className="uppercase mt-2 font-bold text-xs">{option.name}</p>
            </div>
          ))}
        </div>
      </section>
      <Break my={12} />
      <Contact />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const content = await getSingleMatterFile("about");
  const seo = await getSingleMatterFile("seo");

  return {
    props: {
      content,
      seo,
    },
  };
}
