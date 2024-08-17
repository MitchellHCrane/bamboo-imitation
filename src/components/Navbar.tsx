import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import companyHereLogo from "../app/images/companyLogoBamboo.jpg";
import bambooProfile from "../app/images/bambooProfile.jpg";

import Image from "next/image";
import {
  Cog6ToothIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/16/solid";

const menuItems = [
  {
    title: "Home",
    href: "/",
    active: false,
  },
  {
    title: "My Info",
    href: "/#",
    active: false,
  },
  {
    title: "People",
    href: "/#",
    active: true,
  },
  {
    title: "Hiring",
    href: "/#",
    active: false,
  },
  {
    title: "Reports",
    href: "/#",
    active: false,
  },
  {
    title: "Files",
    href: "/#",
    active: false,
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 border-primary border-b-[3px] bg-secondary h-20">
      <div className="flex items-center">
        <Image alt="Your Company Here Logo" src={companyHereLogo} />
        <div className="ml-9">
          {menuItems.map((item) => {
            return (
              <a
                className={`py-7 ${
                  item.active
                    ? "bg-white font-semibold text-darkPrimary"
                    : "text-darkSecondary "
                } px-4 hover:bg-white`}
                key={item.title}
                href={item.href}
              >
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex items-center">
        <div className="bg-white rounded-3xl flex items-center px-3 py-2">
          <MagnifyingGlassIcon className="size-5 text-darkSecondary" />
        </div>
        <div className="ml-4 relative">
          <InboxIcon className="size-8 text-darkSecondary" />
          <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 bg-darkPrimary text-white text-xs font-bold text-[11px] px-1.5 py-0.5 rounded-full">
            3
          </span>
        </div>
        <div className="ml-4">
          <QuestionMarkCircleIcon className="size-[26px] text-darkSecondary" />
        </div>
        <div className="ml-4">
          <Cog6ToothIcon className="size-[26px] text-darkSecondary" />
        </div>
        <div className="ml-4">
          <Image
            src={bambooProfile}
            alt="profile"
            className="size-[26px] text-darkSecondary"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
