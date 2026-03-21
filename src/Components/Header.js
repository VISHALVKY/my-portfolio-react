import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../App";
import { socialMediaUrl } from "../Details";

function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle theme"
      className="relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none"
      style={{
        background: dark
          ? "linear-gradient(135deg, #1e3a5f, #2563eb)"
          : "linear-gradient(135deg, #fbbf24, #f59e0b)",
        boxShadow: dark
          ? "0 0 12px rgba(37,99,235,0.5)"
          : "0 0 12px rgba(251,191,36,0.5)",
      }}
    >
      <span
        className="absolute top-0.5 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          left: dark ? "calc(100% - 22px)" : "2px",
          background: dark ? "#93c5fd" : "#fff",
          boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
        }}
      >
        {dark ? (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="#1e40af">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="#f59e0b">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="21" x2="12" y2="23" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
            <line x1="1" y1="12" x2="3" y2="12" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
            <line x1="21" y1="12" x2="23" y2="12" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </span>
    </button>
  );
}

function Header() {
  const location = useLocation();
  const { dark, setDark } = useTheme();
  const { linkdein, github } = socialMediaUrl;

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
      <div className="hidden md:flex justify-center pt-5 pb-2 px-8">
        <nav
          className="sticky top-4 z-50 flex items-center gap-1"
          style={{
            padding: "8px",
            borderRadius: "18px",
            border: dark ? "1px solid rgba(255,255,255,0.10)" : "1px solid rgba(0,0,0,0.10)",
            background: dark ? "#1f1f1f" : "#fff",
            boxShadow: "0 18px 40px rgba(0,0,0,0.10)",
          }}
        >
          {/* Logo pill */}
          <span
            style={{
              fontWeight: 800,
              fontSize: "15px",
              padding: "10px 16px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #0ea5e9, #a855f7, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginRight: "4px",
              userSelect: "none",
            }}
          >
            VISHAL V
          </span>

          {/* Divider */}
          <span style={{ width: "1px", height: "24px", background: dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.10)", borderRadius: "1px", margin: "0 4px" }} />

          {/* Nav links */}
          {[{ to: "/", label: "Home" }, { to: "/about", label: "About" }, { to: "/technologies", label: "Technologies" }, { to: "/projects", label: "Projects" }, { to: "/contact", label: "Contact" }].map(({ to, label }) => {
            const isActive = to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);
            return (
              <NavLink
                key={to}
                to={to}
                style={{
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "14px",
                  padding: "10px 14px",
                  borderRadius: "12px",
                  transition: "background 0.18s ease, color 0.18s ease, transform 0.18s ease",
                  color: isActive ? "rgb(186,213,255)" : dark ? "rgba(200,210,230,0.85)" : "rgba(11,16,32,0.75)",
                  background: isActive ? "rgb(20,127,255)" : "transparent",
                  transform: isActive ? "translateY(-1px)" : "none",
                  display: "inline-block",
                }}
              >
                {label}
              </NavLink>
            );
          })}

          {/* Divider */}
          <span style={{ width: "1px", height: "24px", background: dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.10)", borderRadius: "1px", margin: "0 4px" }} />

          {/* Social icons + theme toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px", padding: "0 4px" }}>
            <a href={linkdein} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "10px", transition: "background 0.18s" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(20,127,255,0.09)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <svg style={{ fill: dark ? "rgba(200,210,230,0.75)" : "rgba(11,16,32,0.55)" }} width="20" height="20" viewBox="0 0 30 30">
                <path d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" />
              </svg>
            </a>
            <a href={github} target="_blank" rel="noreferrer noopener" aria-label="GitHub"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "10px", transition: "background 0.18s" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(20,127,255,0.09)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <svg style={{ fill: dark ? "rgba(200,210,230,0.75)" : "rgba(11,16,32,0.55)" }} width="20" height="20" viewBox="0 0 30 30">
                <path fillRule="evenodd" clipRule="evenodd" d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z" />
              </svg>
            </a>
            <div style={{ marginLeft: "4px" }}>
              <ThemeToggle dark={dark} setDark={setDark} />
            </div>
          </div>
        </nav>
      </div>

      {/* ─── Mobile Top Bar ─── */}
      <header className="md:hidden fixed top-0 left-0 right-0 w-full z-50 flex items-center justify-between px-4 py-3 bg-white/90 dark:bg-dark-mode/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
        <h1 className="text-lg font-bold bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          VISHAL V
        </h1>
        <ThemeToggle dark={dark} setDark={setDark} />
      </header>
      {/* spacer so content starts below the fixed top bar */}
      <div className="md:hidden h-[52px]" />

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
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "42px",
                  height: "32px",
                  borderRadius: "12px",
                  background: isActive ? "rgba(59, 130, 246, 0.15)" : "transparent",
                  boxShadow: isActive ? "0 0 16px rgba(59,130,246,0.25), inset 0 1px 0 rgba(255,255,255,0.08)" : "none",
                  border: isActive ? "1px solid rgba(59,130,246,0.2)" : "1px solid transparent",
                  color: isActive ? "#60a5fa" : "#6b7280",
                  transition: "all 0.25s ease",
                  transform: isActive ? "translateY(-1px)" : "translateY(0)",
                }}
              >
                {icon(isActive)}
              </span>
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
    </>
  );
}

export default Header;
