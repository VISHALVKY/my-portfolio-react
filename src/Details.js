// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";

// Profile Image
import profile from "./assets/projects/Profile.png";

// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import postman from "./assets/techstack/postman.png";
import springboot from "./assets/techstack/springboot.png"
import mysql from "./assets/techstack/mysql.png"
import codepen from "./assets/techstack/codepen.png"
// import redux from "./assets/techstack/redux.png";
// import npm from "./assets/techstack/npm.png";
// import figma from "./assets/techstack/figma.png";
// import sass from "./assets/techstack/sass.png";

// Porject Images
import projectImage1 from "./assets/projects/1.Amazon.png";
import projectImage2 from "./assets/projects/2.Budget.png";
import projectImage3 from "./assets/projects/3.Calc.png";
import projectImage4 from "./assets/projects/4.Color.png";
import projectImage5 from "./assets/projects/5.Imagify.png";
import projectImage6 from "./assets/projects/6.Markdown.png";
import projectImage7 from "./assets/projects/7.Notes.png";
import projectImage8 from "./assets/projects/8.Qrcode.png";
import projectImage9 from "./assets/projects/9.Quiz.png";
import projectImage10 from "./assets/projects/10.XO.png";
import projectImage11 from "./assets/projects/11.Todo.png";
import projectImage12 from "./assets/projects/12.Weather.png";
import projectImage13 from "./assets/projects/13.crud toastify.png"
import projectImage14 from "./assets/projects/14.flipkart clone.png"

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Vishal V",
  tagline: "I build things for web",
  img: profile,
  about: `Committed to continuous learning and staying updated on emerging technologies. Excellent communication and collaboration abilities. Quick learner and adaptable team player with a strong analytical mindset. Ready to contribute effectively in the software industry.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/vishal-v-27088422a/",
  github: "https://www.github.com/VISHALVKY",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Developer Intern",
    Company: `Volbit`,
    Location: "Chennai",
    Type: "Internship",
    Duration: "Jul 2024 - Aug 2024",
  },
  {
    Position: "Web Developer Intern",
    Company: `CipherByte Technologies`,
    Location: "Chennai",
    Type: "Internship",
    Duration: "Jun 2024 - Jul 2024",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "BE-Computer Science and Engineering",
    Company: "Mohamed Sathak A.J College Of Engineering",
    Location: "Chennai",
    Type: "Full Time",
    Duration: "2019 - 2023",
  },
  {
    Position: "Higher Secondary School",
    Company: `Gk Matriculation Higher Secondary School`,
    Location: "kattumannar Koil",
    Type: "Full Time",
    Duration: "2018 - 2019",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  git: git,
  github: github,
  springboot: springboot,
  mysql: mysql,
  codepen: codepen,
  // redux: redux,
  // figma: figma,
  // npm: npm,
  // sass: sass,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Amazon Clone",
    image: projectImage1,
    description: `An Amazon clone using HTML and CSS replicates the layout and design of Amazon's website, including its homepage, product listings, and navigation.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://amazone-cloneapp.netlify.app/",
    githubLink: "https://github.com/VISHALVKY/amazon-clone",
  },
  {
    title: "Budget Planner",
    image: projectImage2,
    description: `A React-based budget planner helps manage finances with real-time tracking of income, expenses, and savings goals through interactive visualizations.`,
    techstack: "React Js",
    previewLink: "https://budgetplanner-react.netlify.app/",
    githubLink: "https://github.com/VISHALVKY/Budget-App-React",
  },
  {
    title: "Calculator",
    image: projectImage3,
    description: `A calculator using React is a web app that performs arithmetic operations with a responsive, interactive interface built with React components.`,
    techstack: "React Js",
    previewLink: "https://calculator-reactwebsite.netlify.app/",
    githubLink: "https://github.com/VISHALVKY/React-Calculator",
  },
  {
    title: "Color Generator",
    image: projectImage4,
    description: `A color generator using React is a web app that creates random colors or specific color schemes, offering an interactive user interface.`,
    techstack: "React Js",
    previewLink: "https://color-generators-react.vercel.app/",
    githubLink: "https://github.com/VISHALVKY/Color-Generator",
  },
  {
    title: "CRUD App",
    image: projectImage13,
    description: `Developed a Simple CRUD App with React.js, implementing React Toastify for seamless notifications to enhance user interaction and experience.`,
    techstack: "React Js,Toastify",
    previewLink: "https://crud-app-using-toastify.vercel.app/",
    githubLink: "https://github.com/VISHALVKY/crud-app-using-toastify",
  },
  {
    title: "Flipkart Clone",
    image: projectImage14,
    description: `Developed a Flipkart clone using HTML, CSS, and JavaScript, replicating the e-commerce platform's UI for enhanced user interaction.`,
    techstack: "HTML,CSS,JavaScript",
    previewLink: "https://flipkart-clone-henna-one.vercel.app/",
    githubLink: "https://github.com/VISHALVKY/flipkart-clone",
  },
  {
    title: "Imagify",
    image: projectImage5,
    description: `An image generator using the Unsplash API is a React app that fetches and displays high-quality images based on user-defined search terms or categories.`,
    techstack: "React Js,API",
    previewLink: "https://imagify-self.vercel.app/",
    githubLink: "https://github.com/VISHALVKY/Imagify",
  },
  {
    title: "Markdown Previewer",
    image: projectImage6,
    description: `A markdown previewer using React is a web app that allows users to input Markdown text and instantly see the formatted output in real-time.`,
    techstack: "React Js",
    previewLink: "https://react-markdown-previewers.netlify.app/",
    githubLink: "https://github.com/VISHALVKY/Markdown-Previewer",
  },
  {
    title: "Notes App",
    image: projectImage7,
    description: `Developed a Notes App using React.js, allowing users to seamlessly create, edit, and delete notes. Features a user-friendly interface with responsive design.`,
    techstack: "React Js",
    previewLink: "https://note-app-flame-phi.vercel.app/",
    githubLink: "https://github.com/VISHALVKY/Note-App",
  },
  {
    title: "QR Generator",
    image: projectImage8,
    description: `A QR code generator in React is a web application enabling users to generate QR codes for various types of content, enhancing accessibility and usability through its intuitive interface.`,
    techstack: "React Js",
    previewLink: "https://qr-code-silk-eight.vercel.app/",
    githubLink: "https://github.com/VISHALVKY/QR-Code",
  },
  {
    title: "Quizz App",
    image: projectImage9,
    description: `A quiz app with options as images in React, users choose answers from visually presented options, integrating images to enhance interaction and engagement with the quiz content.`,
    techstack: "React Js,Images",
    previewLink: "https://unique-dasik-876492.netlify.app/",
    githubLink: "https://github.com/VISHALVKY/Abans-Quizz-App",
  },
  {
    title: "Tic Tac Toe",
    image: projectImage10,
    description: `Developed a Tic Tac Toe game using React.js, offering responsive design, efficient state management, and intuitive gameplay to deliver a seamless and engaging user experience.`,
    techstack: "React Js",
    previewLink: "https://tic-tac-toe-gamesreact.netlify.app/",
    githubLink: "https://github.com/VISHALVKY/Tic-Tac-Toe",

  },
  {
    title: "Todo App",
    image: projectImage11,
    description: `A todo app is a task manager enabling users to create, edit, prioritize, and organize tasks efficiently, enhancing productivity with features like reminders, categories, and completion tracking.`,
    techstack: "React Js",
    previewLink: "https://todo-app-bice-one-78.vercel.app/",
    githubLink: "https://github.com/VISHALVKY/Todo-App",
  },
  {
    title: "Weather App",
    image: projectImage12,
    description: `A weather app retrieves and displays current and forecasted weather information for selected locations, offering users real-time updates on temperature, precipitation, wind speed, and other meteorological details.`,
    techstack: "React Js,API",
    previewLink: "https://weather-app-flax-eta-89.vercel.app/",
    githubLink: "https://github.com/VISHALVKY/Weather-App",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "vishal.viswanaathan@gmail.com",
  phone: "+91 8270249850",
};
