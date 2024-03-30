"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";

const btiLogo = "/bti-logo-1@2x.png";
const socialIcons = "/social-icons.svg";
const socialIcons1 = "/social-icons-1.svg";

const Footer: NextPage = () => {
  const router = useRouter();

  const onHomeContainerClick = () => {
    router.push("/");
  };

  const onWalletContainerClick = () => {
    router.push("/");
  };

  const onPrivacyPolicyContainerClick = () => {
    router.push("/privacy-policy");
  };
  const onTermsContainerClick = () => {
    router.push("/terms-conditions");
  };

  return (
    <footer className="self-stretch box-border overflow-hidden flex flex-col items-center justify-center py-[63px] px-5 max-w-full text-center text-9xl text-black-fonts-headings font-roboto-slab border-t-[2px] border-solid border-boder-g mq450:gap-[10px] mq450:pt-2.5 mq450:pb-2.5 mq450:box-border mq900:pt-5 mq900:pb-5 mq900:box-border">
      <div className="w-[1496px] flex flex-row items-center justify-center gap-[20px] max-w-full mq450:gap-[20px_2px] mq900:self-stretch mq900:w-auto mq900:gap-[20px] mq1300:flex-wrap mq1300:justify-center mq1650:self-stretch mq1650:w-auto mq1650:flex-row mq1650:gap-[20px_120px]">
        <Image
          className="relative object-cover"
          width={155}
          height={132}
          alt=""
          src={btiLogo}
        />
        <div className="flex flex-row items-center justify-center p-[21px] box-border gap-[49px] max-w-full mq450:gap-[49px_2px] mq900:flex-wrap mq900:gap-[49px_20px]">
          <div className="flex flex-row items-center justify-center">
            <div
              className="w-[79px] relative inline-block min-w-[79px] mq450:text-3xl cursor-pointer"
              onClick={onHomeContainerClick}
            >
              Home
            </div>
          </div>
          <div className="flex flex-row items-center justify-center cursor-pointer">
            <div
              className="w-[87px] relative inline-block min-w-[87px] mq450:text-3xl cursor-pointer"
              onClick={onWalletContainerClick}
            >
              Wallet
            </div>
          </div>
          <div
            className="flex flex-row items-center justify-center cursor-pointer"
            onClick={onPrivacyPolicyContainerClick}
          >
            <div className="w-[190px] relative inline-block mq450:text-3xl">
              Privacy Policy
            </div>
          </div>
          <div
            className="flex flex-row items-center justify-center cursor-pointer"
            onClick={onTermsContainerClick}
          >
            <div className="w-[260px] relative inline-block mq450:text-3xl">{`Terms & Conditions`}</div>
          </div>
        </div>
        <div className="h-[90px] w-[193px] flex flex-row items-center justify-center py-5 px-[13px] box-border gap-[67px] mq450:gap-[67px_2px]">
          <Image
            className="relative overflow-hidden shrink-0 min-h-[50px]"
            loading="lazy"
            height={50}
            width={50}
            alt=""
            src={socialIcons}
          />
          <Image
            className="relative overflow-hidden shrink-0 min-h-[50px]"
            alt=""
            height={50}
            width={50}
            src={socialIcons1}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
