"use client";
import Anchor from "@/components/ui/Anchor/Anchor";
import Button from "@/components/ui/button/Button";
import Container from "@/components/ui/conatiner/Container";
import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
const Header = ({ className }: { className?: string }) => {
  const path = usePathname();
  const { toggleModal } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    setMenuOpen(false);
  }, [path]);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navigation = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Services",
      link: "/services",
    },
    {
      label: "Work",
      link: "/work",
    },
    {
      label: "Our Clients",
      link: "/clients",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];
  return (
    <header
      className={`${
        path == "/" ? "fixed" : "sticky bg-primary-100"
      } py-5 top-0 border-b border-white w-full z-[99] max-tab-lg:py-2 transition-colors duration-200 ${
        scrolled ? "bg-primary-100" : ""
      } ${className || ""}`}
    >
      <Container>
        <div className="flex items-center justify-between w-full gap-4">
          <div className="flex-1 hidden max-tab-md:flex">
            <button
              onClick={() => setMenuOpen(true)}
              className="w-12 h-12 border-accent-100 border rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                className="fill-accent-100"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </button>
          </div>
          <div className="flex-1 max-tab-lg:flex-[2]">
            <Link href={"/"}>
              {" "}
              <Image
                alt="Site Logo"
                src={"/assets/images/logo.png"}
                width={269}
                height={66}
                className="object-contain max-tab-lg:mx-auto"
              />
            </Link>
          </div>
          <nav
            className={`${
              menuOpen ? "max-tab-lg:left-0" : "max-tab-lg:-left-full"
            } max-tab-lg:fixed max-tab-lg:top-0 max-tab-lg:w-full max-tab-lg:p-6 max-tab-lg:bg-primary-100/90 max-tab-lg:backdrop-blur-md max-tab-lg:h-[100dvh] max-tab-lg:overflow-auto max-tab-lg:transition-all max-tab-lg:duration-300`}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-2 right-2 w-8 h-8 border-accent-100 border rounded-full min-tab-lg:hidden flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                className="fill-accent-100"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
            <ul className="flex gap-10 items-center max-des-xl:gap-3 max-tab-lg:block max-tab-lg:space-y-5">
              {navigation.length > 0 &&
                navigation.map((item, index) => (
                  <li
                    className={` nav-item nav-item-${index + 1}`}
                    key={`${item + "__" + index}`}
                  >
                    <Link
                      className={`${
                        path == item.link
                          ? "text-accent-100 border-b border-accent-100"
                          : "text-white "
                      } transition-colors max-tab-lg:text-left duration-200 hover:text-accent-100 hover:border-b hover:border-accent-100 text-center text-xl leading-[1.2] font-normal`}
                      href={item.link}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
          <div className="flex-1 flex justify-end">
            <Button
              onClick={() => toggleModal(true)}        
              className="max-tab-lg:hidden"
              label="Schedule a Call"
            />
            <Anchor
              href="/get-started"
              label="Start"
              className="max-tab-lg:flex hidden"
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
