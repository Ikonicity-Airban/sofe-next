"use client";

import {
  AtSymbolIcon,
  Bars3BottomLeftIcon,
  BriefcaseIcon,
  HomeIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import NavLinks from "./nav-links";
import React from "react";
import SofeLogo from "../sofe-logo";
import Tabs from "./tabs";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/", icon: <HomeIcon /> },
  { name: "About Us", href: "/about", icon: <InformationCircleIcon /> },
  { name: "Services", href: "/services", icon: <BriefcaseIcon /> },
  {
    name: "Contact Us",
    href: "/contact",
    icon: <AtSymbolIcon />,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    closeModal();
  }, []);
  const toggleMenu = () => {
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
    setIsOpen(!isOpen);
  };

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }

  return (
    <header className="border-b-[1px] border-b-[#f5f5f565] rounded-b-2xl z-[999]">
      <div className=" max-w-screen-desktop mx-auto ">
        <div
          className="w-full h-[90vh] p-4 fixed top-[4rem] backdrop-filter md:hidden z-50 select-none transition-transform origin-custom duration-200 "
          onClick={closeModal}
          style={{ transform: isOpen ? "scale(1)" : "scale(0)" }}
        >
          <Tabs isOpen={isOpen} links={links} />
        </div>

        <div
          className={clsx(
            "flex justify-between p-4 items-center transition-all duration-200 flex-wrap shadow-sm shadow-[whitesmoke])]"
          )}
        >
          <div
            className={clsx(
              "flex items-center justify-center w-8 h-8 font-light md:hidden mr-4"
            )}
            onClick={toggleMenu}
          >
            {isOpen ? <XMarkIcon /> : <Bars3BottomLeftIcon />}
          </div>
          <Link href="/" className="flex-start md:flex-[0.5] laptop:flex-[0.5] order-1 flex-[0.8]">
            <SofeLogo />
          </Link>
          <nav className="hidden tablet:flex order-2 tablet:flex-[0.5]">
            <NavLinks links={links} />
          </nav>
          <Link
            href="/login"
            className="flex justify-center flex-[0.2] md:flex-[0.2] order-2 desktop:justify-end"
          >
            <div className="btn-outline btn min-w-max">Join us</div>
          </Link>
        </div>
        {/* <div className="min-w-full order-2 md:hidden py-6">
        <Tabs links={links} />
      </div> */}
      </div>
    </header>
  );
}
