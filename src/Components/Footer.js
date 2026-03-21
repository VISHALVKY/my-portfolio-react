import React from "react";
function Footer() {
  return (
    <footer className="hidden md:block py-3 text-center border-t border-gray-200 dark:border-white/10 bg-white dark:bg-dark-mode transition-colors duration-300">
      <p className="text-xs text-dark-content dark:text-light-content">
        Designed and Coded by{" "}
        <a
          className="font-medium text-blue-500 hover:underline"
          href="https://github.com/VISHALVKY"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vishal
        </a>
      </p>
    </footer>
  );
}
export default Footer;
