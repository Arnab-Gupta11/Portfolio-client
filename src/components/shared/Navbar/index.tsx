"use client";
import { useEffect, useState } from "react";
import NavItem from "./NavItem";

// import NavSidebar from "./NavSidebar";
import { NavMenuOption } from "@/constants/NavMenuItem";
import Link from "next/link";
import { ThemeToggler } from "../ThemeToggler/ThemeTogler";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const menuItems = NavMenuOption();
  const handleChangeBackgroundOnScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleChangeBackgroundOnScroll);
  }, []);
  return (
    <div
      className={`${
        scrolled ? "backdrop-blur-md shadow-md" : "bg-none border-b border-slate-300 dark:border-slate-900"
      } transition-colors duration-500 ${location.pathname === "/" ? "fixed" : "sticky"} top-0 w-full h-20 z-20`}
    >
      <div className="max-w-screen-xl mx-5 px-3 xs:px-5 md:px-10 xl:px-0 xl:mx-auto flex justify-between items-center  my-auto h-full">
        <div>
          <div className="hidden xs:flex">
            {/* <h1 className="text-black text-2xl font-bold">
              Note<span className="text-primary-bg">fy</span>
            </h1> */}
            {/* <Logo /> */}
            <h1>Logo</h1>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="hidden lg:flex gap-6 items-center font-medium ">
            {menuItems.map((menuItem, idx) =>
              menuItem.show ? (
                <Link key={idx} href={menuItem.path} className="border-b-[3px] border-primary-text hover:text-primary-bg ease-in-outs duration-700">
                  <NavItem label={menuItem.label} active={true} />
                </Link>
              ) : null
            )}
          </div>

          <div className="flex items-center">
            <ThemeToggler />
            {/* <NavSidebar menuItems={menuItems} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
