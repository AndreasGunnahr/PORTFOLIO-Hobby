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

export default function Home({ recentProjects, content }) {
  const scrollRef = useRef(null);

  return (
    <Layout pageTitle="Home" description="Home page">
      {/* need to fix resize - down */}
      <section className="h-without-navbar grid grid-cols-1 pt-10 max-w-screen-desktop mx-auto md:pt-32 px-6 md:px-12">
        <div className="flex flex-col">
          <h1 className="text-5xl md:text-5xl lg:text-7xl font-extrabold">
            A driven developer who builds complex web applications.
          </h1>

          <p className="text-xl lg:text-2xl mt-6 lg:mt-8 max-w-xl">
            Fullstack Developer student at Nackademin. Currently intern at
            <span className="ml-2 custom-underline">
              <Link to="https://forefront.se/">Forefront Consulting.</Link>
            </span>
          </p>

          <div className="flex items-center space-x-4 mt-8 md:mt-12 max-w-lg">
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
              href="/CV-2021.pdf"
              text="Read CV"
            />
          </div>
          <div
            className="hidden md:flex items-center max-w-sm mt-20 cursor-pointer"
            onClick={() =>
              scrollRef.current.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <Break my={12} />
            <p className="uppercase text-sm font-bold ml-6 flex-shrink-0 text-gray-300 tracking-wide">
              Scroll to see recent work
            </p>
          </div>
        </div>
      </section>

      <Break />
      <section
        ref={scrollRef}
        className="pt-12 px-6 max-w-screen-desktop mx-auto md:px-12"
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
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:gap-12">
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
      <section className="px-6 max-w-screen-desktop mx-auto md:px-12">
        <SectionSubTitle text="Who am I" />
        <SectionTitle text="A Fullstack Developer" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <p className="mt-4 md:mt-6">{content.textDescription[0]}</p>

          <p className="md:mt-6">{content.textDescription[1]}</p>
        </div>
        <div className="flex items-center">
          <Break my={12} />
          <Link className="ml-6 flex items-center flex-shrink-0" to="/about">
            <p className="uppercase text-sm font-bold">Read more</p>
            <Icon className="h-6 w-6 ml-2" variant="arrow-right" />
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

  return {
    props: {
      recentProjects,
      content,
    },
  };
}
