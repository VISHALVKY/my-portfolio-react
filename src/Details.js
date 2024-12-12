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
import projectImage5 from "./assets/projects/5.Crud app.png";
import projectImage6 from "./assets/projects/6.ECommerce.png";
import projectImage7 from "./assets/projects/7.Ecommerce-2.png";
import projectImage8 from "./assets/projects/8.Flipkart.png";
import projectImage9 from "./assets/projects/9.Imagify.png";
import projectImage10 from "./assets/projects/10.Notes.png";
import projectImage11 from "./assets/projects/11.Portfolio.png";
import projectImage12 from "./assets/projects/12.Qrcode.png";
import projectImage13 from "./assets/projects/13.Restaurant page.png";
import projectImage14 from "./assets/projects/14.Stack overflow.png";
import projectImage15 from "./assets/projects/15.Todo.png";
import projectImage16 from "./assets/projects/16.Weather.png";
import projectImage17 from "./assets/projects/17.XO.png";
import projectImage18 from "./assets/projects/18.youtube clone.png"
import projectImage19 from "./assets/projects/19.Chatbot.png"
import projectImage20 from "./assets/projects/20.X clone.png"



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
    Position: "Web Developer Intern",
    Company: `InnoByte Services`,
    Location: "Chennai",
    Type: "Internship",
    Duration: "Nov 2024 - Dec 2024",
  },
  {
    Position: "Web Development Intern",
    Company: `NullClass Edtech Private Limited`,
    Location: "Chennai",
    Type: "Internship",
    Duration: " Sep 2024 - Oct 2024",
  },
  {
    Position: "Web Developer Intern",
    Company: `Orinson Technologies`,
    Location: "Chennai",
    Type: "Internship",
    Duration: " Aug 2024 - Sep 2024",
  },
  {
    Position: "Web Development and Designing Intern",
    Company: `Internpedia`,
    Location: "Chennai",
    Type: "Internship",
    Duration: " Aug 1 2024 - Aug 31 2024",
  },
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
  }
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
    title: "Chat Bot",
    image: projectImage19,
    description: `Created a chatbot using the Gemini API designed to engage answer user queries, and deliver personalized responses with advanced AI-driven interactions.`,
    techstack: "React js, Gemini API",
    previewLink: "https://chatbot-omega-dun.vercel.app/",
    githubLink: "https://github.com/VISHALVKY/CHATBOT",
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
    image: projectImage5,
    description: `Developed a Simple CRUD App with React.js, implementing React Toastify for seamless notifications to enhance user interaction and experience.`,
    techstack: "React Js,Toastify",
    previewLink: "https://crud-app-using-toastify.vercel.app/",
    githubLink: "https://github.com/VISHALVKY/crud-app-using-toastify",
  },
  {
    title: "E-Commerce Website",
    image: projectImage6,
    description: `Designed a responsive eCommerce landing page featuring product displays, calls-to-action, and engaging visuals using HTML, CSS, and JavaScript.`,
    techstack: "HTML,CSS,JavaScript",
    previewLink: "https://orinson-task-3.vercel.app/",
    githubLink: "https://github.com/VISHALVKY/ORINSON-TASK-3",
  },
  {
    title: "E-Commerce Website",
    image: projectImage7,
    description: `Designed a responsive eCommerce landing page featuring product displays, calls-to-action, and engaging visuals using HTML, CSS, and JavaScript.`,
    techstack: "HTML,CSS,JavaScript",
    previewLink: "https://ecommerce-landing-page-lime.vercel.app/",
    githubLink: "https://github.com/VISHALVKY/ecommerce-landing-page",
  },
  {
    title: "Flipkart Clone",
    image: projectImage8,
    description: `Developed a Flipkart clone using HTML, CSS, and JavaScript, replicating the e-commerce platform's UI for enhanced user interaction.`,
    techstack: "HTML,CSS,JavaScript",
    previewLink: "https://flipkart-clone-henna-one.vercel.app/",
    githubLink: "https://github.com/VISHALVKY/flipkart-clone",
  },
  {
    title: "Image Generator",
    image: projectImage9,
    description: `An image generator using the Unsplash API is a React app that fetches and displays high-quality images based on user-defined search terms or categories.`,
    techstack: "React Js",
    previewLink: "https://imagify-self.vercel.app/",
    githubLink: "https://github.com/VISHALVKY/Imagify",
  },
  {
    title: "Notes App",
    image: projectImage10,
    description: `Developed a Notes App using React.js, allowing users to seamlessly create, edit, and delete notes. Features a user-friendly interface with responsive design.`,
    techstack: "React Js",
    previewLink: "https://note-app-flame-phi.vercel.app/",
    githubLink: "https://github.com/VISHALVKY/Note-App",
  },
  {
    title: "Portfolio",
    image: projectImage11,
    description: `Developed a Personal Profile Web Page with sections like Home, About, Projects, and Contact, integrating Web3Forms for functionality.`,
    techstack: "HTML,CSS,JavaScript",
    previewLink: "https://my-portfolio-website-rust-six.vercel.app/",
    githubLink: "https://github.com/VISHALVKY/ORINSON-TASK-4",
  },
  {
    title: "QR Code Generator",
    image: projectImage12,
    description: `Created a QR Code Generator using React.js, enabling users to input data, generate QR codes, and download them for various uses with a user-friendly and responsive interface.`,
    techstack: "React Js, API",
    previewLink: "https://qr-code-silk-eight.vercel.app/",
    githubLink: "https://github.com/VISHALVKY/QR-Code",
  },
  {
    title: "Restaurant Page",
    image: projectImage13,
    description: `Designed a responsive restaurant landing page using HTML, CSS, and JavaScript, featuring menus, location details, and interactive elements to enhance user experience and engagement.`,
    techstack: "React Js",
    previewLink: "https://orinson-task-1.vercel.app/",
    githubLink: "https://github.com/VISHALVKY/ORINSON-TASK-1",
  },
  {
    title: "Stack Overflow Clone",
    image: projectImage14,
    description: `Developed a Stack Overflow clone using the MERN stack, featuring user authentication, question posting, answer submissions, and upvoting for a dynamic Q&A experience.`,
    techstack: "MERN Stack",
    previewLink: "https://cloned-stack-overflow.netlify.app/",
    githubLink: "https://github.com/VISHALVKY/Stack-Overflow-Clone",
  },
  {
    title: "Todo App",
    image: projectImage15,
    description: `Created a To-Do App using React.js, providing functionality to add, edit, delete, and mark tasks as complete, with a user-friendly and responsive interface for task management.`,
    techstack: "React Js",
    previewLink: "https://todo-app-bice-one-78.vercel.app/",
    githubLink: "https://github.com/VISHALVKY/Todo-App",
  },
  {
    title: "Weather App",
    image: projectImage16,
    description: `Developed a Weather App with React.js, integrating an external API to provide real-time weather data based on user location, displaying temperature, conditions, and forecasts.`,
    techstack: "React Js,API",
    previewLink: "https://weather-app-flax-eta-89.vercel.app/",
    githubLink: "https://github.com/VISHALVKY/Weather-App",
  },
  {
    title: "Tic Tac Toe",
    image: projectImage17,
    description: `Developed a Tic Tac Toe game using React.js, offering responsive design, efficient state management, and intuitive gameplay to deliver a seamless and engaging user experience.`,
    techstack: "React Js",
    previewLink: "https://tic-tac-toe-gamesreact.netlify.app/",
    githubLink: "https://github.com/VISHALVKY/Tic-Tac-Toe",
  },
  {
    title: "X Clone",
    image: projectImage20,
    description: `Built a MERN stack clone of X (formerly Twitter), featuring user authentication, post creation, real-time updates, and interactive features like likes, comments, and follows.`,
    techstack: "MERN Stack",
    previewLink: "https://mern-x-clone.onrender.com",
    githubLink: "https://github.com/VISHALVKY/MERN-X-Clone",
  },
  {
    title: "Youtube Clone",
    image: projectImage18,
    description: `Created a YouTube clone using HTML, CSS, and JavaScript, featuring video display, search functionality, and a responsive layout for an enhanced user experience.`,
    techstack: "HTML, CSS",
    previewLink: "https://youtube-clone-gilt-theta.vercel.app/",
    githubLink: "https://github.com/VISHALVKY/youtube-clone",
  }
];

// Enter your Contact Details here
// export const contactDetails = {
//   email: "vishal.viswanaathan@gmail.com",
//   phone: "+91 8270249850",
// };
