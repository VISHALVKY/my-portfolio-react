import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <main className="container mx-auto max-width pt-6 pb-24 md:pb-10">
      <section className="mb-8">
        <span className="text-sm font-medium text-purple-500 dark:text-purple-400 uppercase tracking-widest">My work</span>
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-dark-heading dark:text-light-heading mt-2">
          Projects
        </h1>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {React.Children.toArray(
          projectDetails.map(({ title, image, description, techstack, previewLink, githubLink }) => (
            <Project
              title={title}
              image={image}
              description={description}
              techstack={techstack}
              previewLink={previewLink}
              githubLink={githubLink}
            />
          ))
        )}
      </div>
    </main>
  );
}

export default Projects;
