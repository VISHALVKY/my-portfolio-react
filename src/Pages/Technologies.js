import React from "react";
import { techStackDetails } from "../Details";

const techList = [
  { key: "html", label: "HTML" },
  { key: "css", label: "CSS" },
  { key: "js", label: "JavaScript" },
  { key: "react", label: "React" },
  { key: "tailwind", label: "Tailwind" },
  { key: "bootstrap", label: "Bootstrap" },
];

const toolList = [
  { key: "vscode", label: "VS Code" },
  { key: "springboot", label: "Spring Boot" },
  { key: "mysql", label: "MySQL" },
  { key: "postman", label: "Postman" },
  { key: "git", label: "Git" },
  { key: "github", label: "GitHub" },
  { key: "codepen", label: "CodePen" },
];

function TechCard({ src, label }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-white/10 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-200 group">
      <img src={src} alt={label} title={label} className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-200" />
      <span className="text-xs font-medium text-dark-content dark:text-light-content">{label}</span>
    </div>
  );
}

function Technologies() {
  const stack = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-6 pb-24 md:pb-10">
      <section className="mb-8">
        <span className="text-sm font-medium text-purple-500 dark:text-purple-400 uppercase tracking-widest">What I use</span>
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-dark-heading dark:text-light-heading mt-2 mb-2">
          Tech Stack
        </h1>
        <p className="text-content text-sm md:text-base">Technologies I've been working with recently</p>
      </section>

      <section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 mb-12">
        {techList.map(({ key, label }) => (
          <TechCard key={key} src={stack[key]} label={label} />
        ))}
      </section>

      <section className="mb-8">
        <span className="text-sm font-medium text-purple-500 dark:text-purple-400 uppercase tracking-widest">My toolkit</span>
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-dark-heading dark:text-light-heading mt-2">
          Tools
        </h1>
      </section>

      <section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {toolList.map(({ key, label }) => (
          <TechCard key={key} src={stack[key]} label={label} />
        ))}
      </section>
    </main>
  );
}

export default Technologies;
