"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiChevronLeft } from "react-icons/fi";

const Navbar: NextPage = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const onHomeContainerClick = () => {
    router.push("/");
  };

  const onWalletContainerClick = () => {
    router.push("/wallet");
  };

  const onPrivacyPolicyContainerClick = () => {
    router.push("/privacy-policy");
  };
  const onTermsContainerClick = () => {
    router.push("/terms-conditions");
  };

  return (
    <header className="self-stretch bg-white-background box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-2 px-5 top-[0] z-[99] sticky max-w-full text-center text-9xl text-black-fonts-headings font-roboto-slab border-b-[2px] border-solid border-boder-g">
      <div className="self-stretch w-[1496px] flex flex-row items-center justify-between gap-[20px] max-w-full">
        <Image
          className="h-[96.5px] w-[82px] relative object-cover"
          width={82}
          height={96.5}
          loading="lazy"
          alt=""
          src="/bti-logo@2x.png"
        />
        <div className=" flex flex-row items-center justify-center gap-[40px] max-w-full mq450:gap-[40px_20px]">
          <div className="flex flex-row items-center justify-center p-[21px] box-border gap-[49px] max-w-full mq450:gap-[49px_24px] mq1300:hidden">
            <div className="flex flex-row items-center justify-center">
              <div
                className="w-[79px] relative inline-block min-w-[79px] cursor-pointer"
                onClick={onHomeContainerClick}
              >
                Home
              </div>
            </div>
            <div className="flex flex-row items-center justify-center cursor-pointer">
              <div
                className="w-[87px] relative inline-block min-w-[87px]"
                onClick={onWalletContainerClick}
              >
                Wallet
              </div>
            </div>
            <div
              className="flex flex-row items-center justify-center cursor-pointer"
              onClick={onPrivacyPolicyContainerClick}
            >
              <div className="w-[190px] relative inline-block whitespace-nowrap">
                Privacy Policy
              </div>
            </div>
            <div
              className="flex flex-row items-center justify-center cursor-pointer"
              onClick={onTermsContainerClick}
            >
              <div className="w-[260px] relative inline-block whitespace-nowrap">{`Terms & Conditions`}</div>
            </div>
          </div>
          {menuOpen && (
            <div className="flex items-left p-[21px] box-border gap-[4px] max-w-full mq1300:flex-col text-lg">
              <div className="flex flex-row items-left justify-flex-start">
                <div
                  className="relative inline-block cursor-pointer"
                  onClick={onHomeContainerClick}
                >
                  Home
                </div>
              </div>
              <div className="flex flex-row items-left justify-flex-start cursor-pointer">
                <div
                  className=" relative inline-block "
                  onClick={onWalletContainerClick}
                >
                  Wallet
                </div>
              </div>
              <div
                className="flex flex-row items-left justify-flex-start cursor-pointer"
                onClick={onPrivacyPolicyContainerClick}
              >
                <div className=" relative inline-block whitespace-nowrap">
                  Privacy Policy
                </div>
              </div>
              <div
                className="flex flex-row items-left justify-flex-start cursor-pointer"
                onClick={onTermsContainerClick}
              >
                <div className="relative inline-block whitespace-nowrap">{`Terms & Conditions`}</div>
              </div>
            </div>
          )}

          <div onClick={toggleMenu} className="mr-[15px]">
            {!menuOpen && (
              <FiMenu className="h-6 w-6 relative overflow-hidden shrink-0 hidden mq900:flex mq1300:flex" />
            )}
            {menuOpen && (
              <FiChevronLeft className="h-6 w-6 relative overflow-hidden shrink-0 hidden mq900:flex mq1300:flex" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
