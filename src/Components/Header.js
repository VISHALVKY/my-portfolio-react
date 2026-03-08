// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { socialMediaUrl } from "../Details"; //logos

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { linkdein, github } = socialMediaUrl; //twitter
//   const toggleClass = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="container mx-auto md:flex justify-between py-2 max-width">
//       <div className="flex justify-between items-center py-2 md:py-10">
//         <div onClick={toggleClass} className="cursor-pointer">
//           <svg
//             className="stroke-dark-heading dark:stroke-white md:hidden"
//             width="25"
//             height="20"
//             viewBox="0 0 16 13"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
//               strokeWidth="1.875"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>
//       </div>
//       <nav className={` ${!isOpen ? "hidden" : null} text-center md:flex justify-between`}>
//         <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
//           <li className="pb-1 md:pb-0">
//             <NavLink to="/" onClick={toggleClass}>
//               Home
//             </NavLink>
//           </li>
//           <li className="pb-1 md:pb-0">
//             <NavLink to="/about" onClick={toggleClass}>
//               About
//             </NavLink>
//           </li>
//           <li className="pb-1 md:pb-0">
//             <NavLink to="/technologies" onClick={toggleClass}>
//               Technologies
//             </NavLink>
//           </li>
//           <li className="pb-1 md:pb-0">
//             <NavLink to="/projects" onClick={toggleClass}>
//               Projects
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/contact" onClick={toggleClass}>
//               Contact
//             </NavLink>
//           </li>
//         </ul>
//         <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
//           <li>
//             <a href={linkdein} target="_blank" rel="noreferrer noopener">
//               <svg
//                 className="dark:fill-light-heading fill-dark-heading"
//                 width="30"
//                 height="30"
//                 viewBox="0 0 30 30"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" />
//               </svg>
//             </a>
//           </li>
//           <li>
//             <a href={github} target="_blank" rel="noreferrer noopener">
//               <svg
//                 className="dark:fill-light-heading fill-dark-heading"
//                 width="30"
//                 height="30"
//                 viewBox="0 0 30 30"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
//                 />
//               </svg>
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { socialMediaUrl } from "../Details"; 

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { linkdein, github } = socialMediaUrl;

//   const toggleDrawer = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="container mx-auto py-2 px-4 max-width relative">
//       <div className="flex justify-between items-center py-4 md:py-6">
//         {/* <h1 className="text-xl font-bold">VISHAL</h1> */}
//         <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">VISHAL V</h1>

//         <div className="md:hidden" onClick={toggleDrawer}>
//           <svg
//             className="stroke-dark-heading dark:stroke-white"
//             width="25"
//             height="20"
//             viewBox="0 0 16 13"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625M1.4375 6.3125H14.5625"
//               strokeWidth="1.875"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center space-x-6 font-medium dark:text-light-content">
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="/about">About</NavLink>
//           <NavLink to="/technologies">Technologies</NavLink>
//           <NavLink to="/projects">Projects</NavLink>
//           <NavLink to="/contact">Contact</NavLink>
//         </nav>

//         {/* Desktop Social Icons */}
//         <ul className="hidden md:flex space-x-4">
//           <li>
//             <a href={linkdein} target="_blank" rel="noreferrer noopener">
//               <svg
//                 className="dark:fill-light-heading fill-dark-heading"
//                 width="28"
//                 height="28"
//                 viewBox="0 0 30 30"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" />
//               </svg>
//             </a>
//           </li>
//           <li>
//             <a href={github} target="_blank" rel="noreferrer noopener">
//               <svg
//                 className="dark:fill-light-heading fill-dark-heading"
//                 width="28"
//                 height="28"
//                 viewBox="0 0 30 30"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
//                 />
//               </svg>
//             </a>
//           </li>
//         </ul>
//       </div>

//       {/* Mobile Drawer & Backdrop */}
//       {isOpen && (
//         <>
//           <div
//             className="fixed inset-0 bg-black bg-opacity-40 z-30"
//             onClick={toggleDrawer}
//           ></div>
//           <div className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-dark-bg z-40 p-6 transition-transform transform translate-x-0 duration-300 ease-in-out">
//             <button onClick={toggleDrawer} className="mb-6 text-xl font-bold">
//               ✕
//             </button>
//             <ul className="space-y-4 font-medium dark:text-light-content">
//               <li><NavLink to="/" onClick={toggleDrawer}>Home</NavLink></li>
//               <li><NavLink to="/about" onClick={toggleDrawer}>About</NavLink></li>
//               <li><NavLink to="/technologies" onClick={toggleDrawer}>Technologies</NavLink></li>
//               <li><NavLink to="/projects" onClick={toggleDrawer}>Projects</NavLink></li>
//               <li><NavLink to="/contact" onClick={toggleDrawer}>Contact</NavLink></li>
//             </ul>
//             <ul className="flex justify-start items-center space-x-4 mt-6">
//               <li>
//                 <a href={linkdein} target="_blank" rel="noreferrer noopener">
//                   <svg width="24" height="24" fill="currentColor" viewBox="0 0 30 30">
//                     <path d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" />
//                   </svg>
//                 </a>
//               </li>
//               <li>
//                 <a href={github} target="_blank" rel="noreferrer noopener">
//                   <svg width="24" height="24" fill="currentColor" viewBox="0 0 30 30">
//                     <path d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z" />
//                   </svg>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </>
//       )}
//     </header> 
//   );
// }

// export default Header;

import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const navItems = [
    {
      to: "/",
      label: "Home",
      icon: (active) => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth={active ? 2.5 : 1.8}
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      to: "/about",
      label: "About",
      icon: (active) => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth={active ? 2.5 : 1.8}
          strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        </svg>
      ),
    },
    {
      to: "/technologies",
      label: "Tech",
      icon: (active) => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth={active ? 2.5 : 1.8}
          strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      to: "/projects",
      label: "Projects",
      icon: (active) => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth={active ? 2.5 : 1.8}
          strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
    },
    {
      to: "/contact",
      label: "Contact",
      icon: (active) => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth={active ? 2.5 : 1.8}
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* ─── Desktop Header ─── */}
      <header className="container mx-auto py-2 px-4 max-width hidden md:block">
        <div className="flex justify-between items-center py-4 md:py-6">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            VISHAL V
          </h1>
          <nav className="flex items-center space-x-6 font-medium text-gray-300">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-400" : "text-gray-400 hover:text-white transition-colors"}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-400" : "text-gray-400 hover:text-white transition-colors"}>About</NavLink>
            <NavLink to="/technologies" className={({ isActive }) => isActive ? "text-blue-400" : "text-gray-400 hover:text-white transition-colors"}>Technologies</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-400" : "text-gray-400 hover:text-white transition-colors"}>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-400" : "text-gray-400 hover:text-white transition-colors"}>Contact</NavLink>
          </nav>
        </div>
      </header>

      {/* ─── Mobile Top Bar ─── */}
      <header
        className="md:hidden flex items-center px-4 py-3"
        style={{
          background: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          boxShadow: "0 2px 20px rgba(0, 0, 0, 0.4)",
        }}
      >
        <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
          VISHAL V
        </h1>
      </header>

      {/* ─── Mobile Bottom Tab Bar ─── */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around px-3"
        style={{
          paddingBottom: "env(safe-area-inset-bottom, 10px)",
          paddingTop: "8px",
          background: "rgba(0, 0, 0, 0.65)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.07)",
          boxShadow: "0 -4px 30px rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(255, 255, 255, 0.04) inset",
        }}
      >
        {navItems.map(({ to, label, icon }) => {
          const isActive =
            to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

          return (
            <NavLink
              key={to}
              to={to}
              className="relative flex flex-col items-center justify-center gap-1 py-1 flex-1"
              style={{ textDecoration: "none" }}
            >
              {/* Active pill dot at top */}
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: isActive ? "28px" : "0px",
                  height: "3px",
                  borderRadius: "0 0 4px 4px",
                  background: "linear-gradient(90deg, #60a5fa, #3b82f6)",
                  boxShadow: isActive ? "0 0 10px rgba(59,130,246,0.9), 0 0 20px rgba(59,130,246,0.4)" : "none",
                  transition: "width 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                }}
              />

              {/* Icon with glowing active background pill */}
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "42px",
                  height: "32px",
                  borderRadius: "12px",
                  background: isActive
                    ? "rgba(59, 130, 246, 0.15)"
                    : "transparent",
                  boxShadow: isActive
                    ? "0 0 16px rgba(59,130,246,0.25), inset 0 1px 0 rgba(255,255,255,0.08)"
                    : "none",
                  border: isActive
                    ? "1px solid rgba(59,130,246,0.2)"
                    : "1px solid transparent",
                  color: isActive ? "#60a5fa" : "#6b7280",
                  transition: "all 0.25s ease",
                  transform: isActive ? "translateY(-1px)" : "translateY(0)",
                }}
              >
                {icon(isActive)}
              </span>

              {/* Label */}
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#60a5fa" : "#6b7280",
                  letterSpacing: "0.02em",
                  transition: "color 0.25s ease",
                }}
              >
                {label}
              </span>
            </NavLink>
          );
        })}
      </nav>

      {/* ─── Bottom spacing so page content clears the tab bar ─── */}
      <div className="md:hidden h-20" />
    </>
  );
}

export default Header;

