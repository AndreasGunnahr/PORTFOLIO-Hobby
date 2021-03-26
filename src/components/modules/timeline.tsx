import { SectionTitle, Icon } from "components/elements";
import React from "react";

interface IStep {
  title: string;
  description: string;
}

interface IYear {
  text: string;
}

export const Year: React.FC<IYear> = ({ text }) => (
  <h3 className="text-xl font-extrabold mt-6 mb-6 md:text-2xl">{text}</h3>
);

export const Step: React.FC<IStep> = ({ title, description }) => (
  <li className="list-none">
    <div className="flex items-center mb-2 text-green-500 dark:text-green-300">
      <span className="sr-only">Check</span>
      <Icon
        variant="checkmark"
        className="h-5 w-5 mr-2 flex-shrink-0 md:h-6 md:w-6"
      />
      <p className="font-extrabold text-black md:text-lg lg:text-xl">{title}</p>
    </div>
    <p className="ml-7">{description}</p>
  </li>
);

export const Timeline = ({}) => {
  return (
    <section className="px-6 md:px-12 max-w-screen-desktop mx-auto">
      <SectionTitle text="Timeline" />
      <Year text="2021" />
      <ul className="space-y-6">
        <Step
          title="Fullstack Developer Exam (June)"
          description="Graduated Fullstack developer program with focus on Javascript from Nackademin."
        />
        <Step
          title="Fullstack Intern at Forefront Consulting"
          description="Intern as a web developer consultant where I help building a e-commerce solutions with React (Next.js)."
        />
      </ul>
      <Year text="2020" />
      <ul className="space-y-6">
        <Step
          title="Frontend Intern at Rationell Mikro Teknik"
          description="Worked full time during the summer building a platform search service with React and Azure."
        />
        <Step
          title="Fullstack Intern at Forefront Consulting"
          description="Intern as a web developer consultant at ENWELL AB. Where I helped building out internal systems. "
        />
      </ul>
    </section>
  );
};
