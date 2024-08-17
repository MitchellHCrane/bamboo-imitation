import bambooFooter from "../app/images/bambooFooter.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex items-center justify-between min-w-[100vw] text-secondaryLink pt-6 pb-12 px-[50px] bg-white">
      <p className="text-[13px]">
        <a className="hover:text-darkPrimary" href="#">
          Privacy Policy
        </a>
        ·{" "}
        <a className="hover:text-darkPrimary" href="#">
          Terms of Service
        </a>{" "}
        · © 2008–2024 BambooHR All rights reserved.
      </p>
      <Image src={bambooFooter} className="w-36" alt="Company footer logo" />
    </div>
  );
};

export default Footer;
