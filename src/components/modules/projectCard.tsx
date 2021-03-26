import { Button } from "components/elements";
import Image from "next/image";

interface IProjectCard {
  image?: string;
  title: string;
  alt: string;
  categories: string[];
  description: string;
  backgroundColor?: string;
  meta?: {
    github: string;
    website: string;
  };
}

export const ProjectCard: React.FC<IProjectCard> = ({
  image,
  alt,
  title,
  backgroundColor,
  categories,
  description,
  meta,
}) => {
  return (
    <article className="flex flex-col">
      <div className="p-6" style={{ backgroundColor }}>
        <Image
          alt={alt}
          src={image}
          layout="responsive"
          width={1440}
          height={798}
          quality={100}
        />
      </div>

      <div className="mt-4 flex-1 flex flex-col">
        <h2 className="text-black text-2xl lg:text-3xl font-extrabold">
          {title}
        </h2>
        <span className="text-xs mt-2 font-bold uppercase tracking-wide">
          {categories.join(" | ")}
        </span>
        <p className="mt-4 md:mt-6 flex-1 ">{description}</p>

        <div className="mt-8 flex items-center space-x-4">
          <Button
            variant="secondary"
            size="md"
            text="Github"
            startIcon="github"
            href={meta.github}
          />
          <Button
            variant="primary"
            size="md"
            text="Website"
            startIcon="link"
            href={meta.website}
          />
        </div>
      </div>
    </article>
  );
};
