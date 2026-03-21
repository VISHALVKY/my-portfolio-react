import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-6 pb-24 md:pb-10">
      <section className="mb-10">
        <span className="text-sm font-medium text-purple-500 dark:text-purple-400 uppercase tracking-widest">Who I am</span>
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-dark-heading dark:text-light-heading mt-2 mb-6">
          About Me
        </h1>
        <p className="text-content lg:max-w-3xl text-base leading-relaxed">{personalDetails.about}</p>
      </section>

      <section className="mb-10">
        <span className="text-sm font-medium text-purple-500 dark:text-purple-400 uppercase tracking-widest">Career</span>
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-dark-heading dark:text-light-heading mt-2 mb-4">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work position={Position} company={Company} location={Location} type={Type} duration={Duration} />
          ))
        )}
      </section>

      <section>
        <span className="text-sm font-medium text-purple-500 dark:text-purple-400 uppercase tracking-widest">Background</span>
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-dark-heading dark:text-light-heading mt-2 mb-4">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work position={Position} company={Company} location={Location} type={Type} duration={Duration} />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
