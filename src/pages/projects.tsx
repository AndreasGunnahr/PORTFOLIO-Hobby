import { Break, SectionSubTitle, SectionTitle } from "components/elements";
import { Contact, Layout, ProjectCard } from "components/modules";
import { getAllMatterFiles, getSingleMatterFile } from "lib/markdown";

export default function Projects({ allProjects, seo }) {
  return (
    <Layout seo={seo.projects}>
      <div className="px-6 max-w-screen-desktop mx-auto md:px-12">
        <section className="pt-10 md:pt-14">
          <SectionSubTitle text="All of my projects" />
          <SectionTitle text="My work" />
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:gap-12 xl:grid-cols-2">
            {allProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
        <Break my={12} />
      </div>
      <Contact />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const allProjects = await getAllMatterFiles("projects");
  const seo = await getSingleMatterFile("seo");

  return {
    props: {
      allProjects,
      seo,
    },
  };
}
