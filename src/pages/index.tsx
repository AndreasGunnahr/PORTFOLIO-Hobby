import { useRef } from "react";
import {
  Break,
  Button,
  Icon,
  Link,
  SectionSubTitle,
  SectionTitle,
} from "components/elements";
import { Contact, Layout, ProjectCard, Timeline } from "components/modules";
import { getAllRecentProjects, getSingleMatterFile } from "lib/markdown";

export default function Home({ recentProjects, content, seo }) {
  const scrollRef = useRef(null);

  return (
    <Layout seo={seo.home}>
      {/* need to fix resize - down */}
      <section className="grid grid-cols-1 px-6 pt-10 mx-auto h-without-navbar max-w-screen-desktop md:pt-32 md:px-12">
        <div className="flex flex-col">
          <h1 className="text-5xl font-extrabold md:text-5xl lg:text-7xl">
            A driven developer who builds complex web applications.
          </h1>

          <p className="max-w-xl mt-6 text-xl lg:text-2xl lg:mt-8">
            Fullstack Developer student at Nackademin. Currently working as a
            consultant at
            <span className="ml-2 custom-underline">
              <Link to="https://devbrains.se/">DevBrains.</Link>
            </span>
          </p>

          <div className="flex items-center max-w-lg mt-8 space-x-4 md:mt-12">
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                scrollRef.current.scrollIntoView({
                  behavior: "smooth",
                })
              }
              text="Recent work"
            />
            <Button
              variant="primary"
              size="lg"
              href="/cv-devbrains.pdf"
              text="Read CV"
            />
          </div>
          <div
            className="items-center hidden max-w-sm mt-20 cursor-pointer md:flex"
            onClick={() =>
              scrollRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <Break my={12} />
            <p className="flex-shrink-0 ml-6 text-sm font-bold tracking-wide text-gray-300 uppercase">
              Scroll to see recent work
            </p>
          </div>
        </div>
      </section>

      <Break />
      <section
        ref={scrollRef}
        className="px-6 pt-12 mx-auto max-w-screen-desktop md:px-12"
      >
        <SectionSubTitle text="My favorite projects" />
        <div className="flex items-center justify-between">
          <SectionTitle text="Recent work" />
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="md"
              href="/projects"
              text="View all projects"
              endIcon="arrow-right"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 xl:gap-12">
          {recentProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
          <div className="md:hidden">
            <Button
              variant="primary"
              size="lg"
              href="/projects"
              text="View all projects"
              endIcon="arrow-right"
            />
          </div>
        </div>
      </section>
      <Break my={12} />
      <section className="px-6 mx-auto max-w-screen-desktop md:px-12">
        <SectionSubTitle text="Who am I" />
        <SectionTitle text="A Fullstack Developer" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <p className="mt-4 md:mt-6">{content.textDescription[0]}</p>

          <p className="md:mt-6">{content.textDescription[1]}</p>
        </div>
        <div className="flex items-center">
          <Break my={12} />
          <Link className="flex items-center flex-shrink-0 ml-6" to="/about">
            <p className="text-sm font-bold uppercase">Read more</p>
            <Icon className="w-6 h-6 ml-2" variant="arrow-right" />
          </Link>
        </div>
      </section>

      <Timeline />
      <Break my={12} />
      <Contact />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const recentProjects = await getAllRecentProjects("projects");
  const content = await getSingleMatterFile("about");
  const { seo } = await getSingleMatterFile("seo");

  return {
    props: {
      recentProjects,
      content,
      seo,
    },
  };
}
