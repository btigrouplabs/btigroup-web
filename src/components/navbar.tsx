"use client";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";

const Navbar: NextPage = () => {
  const router = useRouter();
  const onPrivacyPolicyContainerClick = () => {
    router.push("/privacy-policy");
  };
  const onTermsContainerClick = () => {
    router.push("/terms-conditions");
  };

  const onHomeContainerClick = () => {
    router.push("/");
  };

  const onWalletContainerClick = () => {
    router.push("/");
  };

  return (
    <header className="self-stretch h-[112.5px] bg-white-background box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-2 px-5 top-[0] z-[99] sticky max-w-full text-center text-9xl text-black-fonts-headings font-roboto-slab border-b-[2px] border-solid border-boder-g">
      <div className="self-stretch w-[1496px] flex flex-row items-center justify-between gap-[20px] max-w-full">
        <img
          className="h-[96.5px] w-[82px] relative object-cover"
          loading="lazy"
          alt=""
          src="/bti-logo@2x.png"
        />
        <div className="h-[79px] flex flex-row items-center justify-center gap-[40px] max-w-full mq450:gap-[40px_20px]">
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
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden mq900:flex mq1300:flex"
            alt=""
            src="/menu--hamburger-lg.svg"
          />
          {/* <img
            className="h-10 w-10 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/-sun.svg"
          /> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
