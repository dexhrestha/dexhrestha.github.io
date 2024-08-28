import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from "../Portfolio/Portfolio";
import {
  IconArrowLeft,
  IconBook,
  IconChartInfographic,
  IconMessage,
  IconMoon,
  IconSmartHome,
  IconSunFilled,
  IconTerminal2,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import Publications from "../Publications/Publications";
import Home from "../Home/Home";
import About from "../About/About";
import NotionElement from '../NotionElement/NotionElement';

export function SidebarComponent() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log('test');
    // Optionally, you can persist this change in local storage or context
  };

  const links = [
    {
      label: "Home",
      href: "#",
      icon: (
        <IconSmartHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "About Me",
      href: "#/about",
      icon: (
        <IconMessage className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Portfolio",
      href: "#/portfolio",
      icon: (
        <IconTerminal2 className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Publications",
      href: "#/publications",
      icon: (
        <IconBook className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Visualizations",
      href: "#",
      icon: (
        <IconChartInfographic className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    <Router>
      <div
        className={cn(
          darkMode ? "dark" : "",
          "rounded-md flex flex-col md:flex-row overflow-x-hidden bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700",
          "h-full" // for your use case, use `h-screen` instead of `h-[60vh]`
        )}
      >
        <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <div className="fixed bottom-24">
              <SidebarLink
                link={{
                  href: "#",
                  icon: darkMode ? (
                    <IconSunFilled className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                  ) : (
                    <IconMoon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                  ),
                }}
                role="button"
                onClick={toggleDarkMode}
              />
              <SidebarLink
                link={{
                  label: "Dipesh Shrestha",
                  href: "/#/about",
                  icon: (
                    <img
                      src="/images/profile_light.jpg"
                      className="h-7 w-7 flex-shrink-0 rounded-full"
                      width={50}
                      height={50}
                      alt="Avatar"
                    />
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>

        {/* Main content area */}
        <div className="flex-1 flex flex-col justify-between h-screen">
          <Routes>
            <Route path="blog/:blogSlug" element={<NotionElement />} />
            <Route path="portfolio" element={<Projects />} />
            <Route path="publications" element={<Publications />} />
            <Route path="about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>

        </div>
        
      </div>
      
    </Router>
  );
}

export const Logo = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20 "
    >
      <div className="h-10 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre text-3xl"
      >
        Dipesh Shrestha
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-10  w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </a>
  );
};


