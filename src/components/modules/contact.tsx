import {
  Break,
  Button,
  SectionSubTitle,
  SectionTitle,
} from "components/elements";
import Link from "next/link";

interface IContact {}

export const Contact: React.FC<IContact> = ({}) => {
  return (
    <section className="max-w-screen-desktop mx-auto px-6 md:px-12 pb-10 ">
      <SectionSubTitle text="Do you like my work" />
      <SectionTitle text="Let's work together" />

      <p className="mt-4">
        I am always open to new people and challenges. <br />
      </p>

      <p className="mt-3 mb-10">
        Do not hesitate to get in touch if you like my work and we will have a
        discussion!
      </p>

      <div className="max-w-3xl">
        <Button
          variant="primary"
          size="lg"
          href="mailto:andreas.gunnahr@hotmail.com"
          text="Get in touch"
        />
      </div>
      <Break mt={10} mb={6} />
      <footer className="font-medium text-sm sm:text-base flex justify-between flex-wrap">
        <div className="flex items-center space-x-6 tracking-wide">
          <Link href="https://www.instagram.com/andreasgunnahr/">
            Instagram
          </Link>
          <Link href="https://github.com/AndreasGunnahr">Github</Link>
        </div>
        <span>&copy;2021 Andreas Gunnahr</span>
      </footer>
    </section>
  );
};
