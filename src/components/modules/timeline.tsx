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
  <h3 className="mt-6 mb-6 text-xl font-extrabold md:text-2xl">{text}</h3>
);

export const Step: React.FC<IStep> = ({ title, description }) => (
  <li className="list-none">
    <div className="flex items-center mb-2 text-green-500 dark:text-green-300">
      <span className="sr-only">Check</span>
      <Icon
        variant="checkmark"
        className="flex-shrink-0 w-5 h-5 mr-2 md:h-6 md:w-6"
      />
      <p className="font-extrabold text-black md:text-lg lg:text-xl">{title}</p>
    </div>
    <p className="ml-7" dangerouslySetInnerHTML={{ __html: description }}></p>
  </li>
);

export const Timeline = ({}) => {
  return (
    <section className="px-6 mx-auto md:px-12 max-w-screen-desktop">
      <SectionTitle text="Timeline" />
      <Year text="2021" />
      <ul className="space-y-6">
        <Step
          title="Fullstack Developer Exam (June)"
          description="Graduated Fullstack developer program with focus on Javascript from Nackademin."
        />
        <Step
          title="Consultant employment"
          description="Got a permanent job as a consultant at DevBrains."
        />
        <Step
          title="Fullstack Intern at Forefront Consulting"
          description="Intern as a web developer where I helped build an e-commerce solution with React (Next.js). 
          <br />Also built a structure for testing and mocking data with Angular, Jest, Cypress and Faker.js."
        />
      </ul>
      <Year text="2020" />
      <ul className="space-y-6">
        <Step
          title="Frontend Intern at Rationell Mikro Teknik"
          description="Worked full time during the summer building a search platform service with React and Azure."
        />
        <Step
          title="Fullstack Intern at Forefront Consulting"
          description="Intern as a web developer consultant at ENWELL AB. Where I helped building out internal systems."
        />
      </ul>
    </section>
  );
};
