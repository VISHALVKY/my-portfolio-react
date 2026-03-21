import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails, socialMediaUrl } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const { linkdein, github } = socialMediaUrl;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const subRef = useRef();
  const btnRef = useRef();
  const myimageref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from([h11.current, h12.current, h13.current], {
      x: "-60px",
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "Power3.easeOut",
      delay: 0.3,
    })
      .from(subRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
      .from(btnRef.current, { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
      .from(myimageref.current, { x: "80px", opacity: 0, duration: 0.9, ease: "Power3.easeOut" }, "<-0.6");
  }, []);

  return (
    <main className="container mx-auto max-width min-h-[calc(100vh-64px)] flex items-center py-8 md:py-0 pb-24 md:pb-0">
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-10">
        {/* Text side */}
        <div className="flex-1 text-center md:text-left">
          <p ref={h11} className="text-base md:text-lg text-gray-500 dark:text-gray-400 font-medium mb-2">
            👋 Hello, I'm
          </p>
          <h1
            ref={h12}
            className="text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight mb-3"
          >
            {name}
          </h1>
          <h2
            ref={h13}
            className="text-2xl md:text-3xl xl:text-4xl font-bold text-dark-heading dark:text-light-heading mb-4"
          >
            {tagline}
          </h2>
          <p ref={subRef} className="text-content max-w-md mx-auto md:mx-0 text-sm md:text-base leading-relaxed mb-8">
            Frontend Developer passionate about building beautiful, responsive web experiences.
          </p>
          <div ref={btnRef} className="flex gap-4 justify-center md:justify-start flex-wrap">
            <a
              href={github}
              target="_blank"
              rel="noreferrer noopener"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/30"
            >
              View Projects
            </a>
            <a
              href={linkdein}
              target="_blank"
              rel="noreferrer noopener"
              className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-600 text-dark-heading dark:text-light-heading font-medium text-sm hover:border-purple-500 dark:hover:border-purple-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Image side */}
        <div ref={myimageref} className="flex-shrink-0">
          <div className="relative w-56 h-56 md:w-72 md:h-72 xl:w-80 xl:h-80 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500 via-purple-500 to-pink-500 blur-2xl opacity-30 scale-110" />
            <img
              src={img}
              alt="Vishal V"
              className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-dark-card shadow-2xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
