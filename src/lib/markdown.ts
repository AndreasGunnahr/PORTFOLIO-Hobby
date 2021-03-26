import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd();

export async function getAllRecentProjects(type) {
  const allFiles = fs.readdirSync(path.join(root, "src/content", type));
  const recentFiles = allFiles.filter((file) => file.includes("recent"));

  return recentFiles.reduce((allProjects, projectSlug) => {
    const source = fs.readFileSync(
      path.join(root, "src/content", type, projectSlug),
      "utf8"
    );

    const { data } = matter(source);
    return [{ ...data }, ...allProjects];
  }, []);
}

export async function getAllMatterFiles(type) {
  const allFiles = fs.readdirSync(path.join(root, "src/content", type));

  return allFiles.reduce((allProjects, projectSlug) => {
    const source = fs.readFileSync(
      path.join(root, "src/content", type, projectSlug),
      "utf8"
    );

    const { data } = matter(source);
    return [{ ...data }, ...allProjects];
  }, []);
}

export async function getSingleMatterFile(type) {
  const file = fs.readFileSync(
    path.join(root, "src/content", `${type}.md`),
    "utf8"
  );

  const { data } = matter(file);
  return { ...data };
}
