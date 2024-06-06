import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import {
  FaBars,
  FaLinkedin,
  FaMedium,
  FaTelegram,
  FaUser,
  FaXTwitter,
} from "react-icons/fa6";

export default function Navbar() {
  return (
    <header className="self-stretch bg-black flex flex-row items-center justify-center py-[11px] px-5 box-border z-[99] fixed w-full text-center text-sm text-light-green font-roboto mq450:pl-2.5 mq450:pr-2.5 mq450:box-border">
      <div className="flex-1 flex flex-row items-center justify-center gap-[20px] max-w-[1240px] mq1050:w-[720px] mq1250:max-w-full">
        <Image
          src="/img/bti-group@2x.png"
          alt="BTI Group OÜ"
          className="relative object-cover hover:animate-[1s_ease_0s_1_normal_none_pulsate] hover:opacity-[1]"
          width={160}
          height={42}
        />

        <nav className="m-0 flex-1 flex flex-row items-center justify-between max-w-full gap-[20px] text-center text-sm text-dominant font-roboto mq1050:hidden">
          <div className="flex flex-row items-center justify-center">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[53px] hover:text-light-green">
              Services
            </a>
            <FaChevronDown
              height={11}
              width={11}
              className="relative overflow-hidden shrink-0 hidden"
            />
          </div>
          <div className="flex flex-row items-center justify-center">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[32px] hover:text-light-green">
              Documents
            </a>
            <FaChevronDown
              height={11}
              width={11}
              className="relative overflow-hidden shrink-0 hidden"
            />
          </div>
          <div className="flex flex-row items-center justify-center">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[66px] hover:text-light-green">
              Resources
            </a>
            <FaChevronDown
              height={11}
              width={11}
              className="relative overflow-hidden shrink-0 hidden"
            />
          </div>
          <div className="flex flex-row items-center justify-center cursor-pointer">
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[58px] whitespace-nowrap hover:text-light-green">
              About Us
            </a>
            <FaChevronDown
              height={11}
              width={11}
              className="relative overflow-hidden shrink-0 hidden"
            />
          </div>
        </nav>
        <div className="flex-[0.9018] flex flex-row items-center justify-end gap-[20px]">
          <div className="rounded-3xs overflow-hidden flex flex-row items-center justify-center py-[3px] px-[5px] hover:pl-[5px] hover:pr-[5px] hover:box-border hover:border-[1px] hover:border-solid hover:border-light-green mq450:hidden">
            <a className="[text-decoration:none] relative leading-[20px] text-[inherit] inline-block min-w-[39px] whitespace-nowrap">
              Log In
            </a>
          </div>
          <button className="cursor-pointer [border:none] py-[3px] px-[23px] bg-light-green rounded-3xs overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-limegreen-200 mq450:hidden">
            <a className="[text-decoration:none] relative text-sm leading-[20px] font-roboto text-black text-center inline-block min-w-[48px]">
              Sign Up
            </a>
          </button>
          <div className="flex-1 rounded-6xl box-border flex flex-row items-center justify-center py-1.5 px-[13px] gap-[11px] max-w-[138px] border-[1px] border-solid border-light-green hover:[scale:1.1] mq1050:hidden">
            <FaXTwitter
              height={13}
              width={13}
              className="relative overflow-hidden shrink-0"
            />
            <FaLinkedin
              height={13}
              width={13}
              className="relative overflow-hidden shrink-0"
            />
            <FaTelegram
              height={13}
              width={13}
              className="relative overflow-hidden shrink-0"
            />
            <FaMedium
              height={13}
              width={13}
              className="relative overflow-hidden shrink-0"
            />
          </div>
          <Image
            className="h-7 w-7 relative hover:[scale:1.1]"
            loading="lazy"
            height={28}
            width={28}
            alt="Profile Icon"
            src="/img/profile-icon.svg"
          />
          <Image
            className="h-[12.9px] w-[18.1px] relative hidden mq1050:flex mq1050:hover:[scale:1.1]"
            height={13}
            width={18}
            alt="Menu Icon"
            src="/img/menu.svg"
          />
          {/* <div className="flex flex-row items-start justify-start gap-[14px] hover:[scale:1.1]">
            <Image
              className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
              height={24}
              width={24}
              alt="Light Mode"
              src="/img/light.svg"
            />
            <Image
              className="h-6 w-6 relative overflow-hidden shrink-0"
              height={24}
              width={24}
              loading="lazy"
              alt="Dark Mode"
              src="/img/dark.svg"
            />
          </div> */}
        </div>
      </div>
    </header>
  );
}
