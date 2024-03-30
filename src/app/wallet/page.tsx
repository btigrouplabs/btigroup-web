"use client";
import BTILogoFooter from "@/components/b-t-i-logo-footer";
import Image from "next/image";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Simplicity from "@/components/simplicity";
import Link from "next/link";

const Wallet: NextPage = () => {
  const router = useRouter();

  const onPrivacyPolicyButtonClick = useCallback(() => {
    router.push("/privacy-policy");
  }, [router]);

  return (
    <div className="w-full relative bg-white-background box-border overflow-hidden flex flex-col items-start justify-start tracking-[normal] border-[1px] border-solid border-black">
      <section
        className="self-stretch overflow-hidden flex flex-col items-start justify-start py-10 px-[116px] box-border max-w-full text-left text-49xl text-lime font-roboto-slab mq450:pl-5 mq450:pr-5 mq450:box-border mq900:py-[26px] mq900:px-[25px] mq900:box-border mq1300:pl-20 mq1300:box-border"
        data-scroll-to="section1"
      >
        <div className="self-stretch flex flex-row items-center justify-center max-w-full [row-gap:20px] mq1650:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start py-5 pr-1 pl-0 box-border gap-[17px] min-w-[487px] max-w-full mq900:min-w-full mq1650:flex-1">
            <div className="self-stretch flex flex-row items-center justify-start">
              <h1 className="m-0 relative text-inherit leading-[71px] font-bold font-inherit mq450:text-22xl mq450:leading-[43px] mq900:text-35xl mq900:leading-[57px]">
                Welcome to BTI Wallet
              </h1>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start max-w-full text-11xl text-black">
              <div className="flex-1 relative leading-[49px] font-light inline-block max-w-full mq450:text-lg mq450:leading-[29px] mq900:text-5xl mq900:leading-[39px]">
                Your trusted partner in the world of cryptocurrency management.
                Designed with simplicity and security in mind, our wallet
                empowers you to take control of your digital assets
                effortlessly.
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[286px] pl-0 gap-[43px] mq450:pr-5 mq450:box-border mq900:gap-[21px] mq900:pr-[143px] mq900:box-border">
              <Link
                target="_blank"
                href="https://apps.apple.com/us/app/bti-wallet/id6479792027"
              >
                <Image
                  className="relative overflow-hidden shrink-0 min-h-[65px]"
                  loading="lazy"
                  height={65}
                  width={196}
                  alt=""
                  src="/applestore.svg"
                />
              </Link>
              <Link
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.btigrouplabs.wallet"
              >
                <Image
                  className="h-[65px] w-[221px] relative overflow-hidden shrink-0 min-h-[65px]"
                  loading="lazy"
                  height={65}
                  width={221}
                  alt=""
                  src="/googleplay.svg"
                />
              </Link>
            </div>
          </div>
          <div className="flex-[0.9515] rounded-9xl bg-lightyellow flex flex-row items-center justify-center py-[74px] px-5 box-border min-w-[485px] max-w-full mq900:pt-12 mq900:pb-12 mq900:box-border mq900:min-w-full mq1650:flex-1">
            <Image
              className="relative object-contain"
              loading="lazy"
              alt=""
              height={457.7}
              width={229.8}
              src="/group-6@2x.png"
            />
          </div>
        </div>
      </section>

      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full">
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-center py-10 px-[116px] box-border max-w-full text-center text-49xl text-white-background font-roboto-slab mq450:pl-5 mq450:pr-5 mq450:box-border mq900:py-5 mq900:px-[25px] mq900:box-border mq1300:pt-[26px] mq1300:pb-[26px] mq1300:box-border">
          <div className="self-stretch rounded-31xl bg-gray-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(42px)] box-border overflow-hidden flex flex-col items-center justify-center py-10 px-0 gap-[61px] max-w-full border-b-[2px] border-solid border-boder-g mq450:gap-[15px_61px] mq900:gap-[30px_61px] mq900:pt-5 mq900:pb-5 mq900:box-border mq1300:pt-[26px] mq1300:pb-[26px] mq1300:box-border">
            <div className="self-stretch flex flex-row items-center justify-start max-w-full">
              <div className="flex-1 rounded-t-mini rounded-b-none [background:linear-gradient(49.04deg,_#116a00,_#1cff00)] flex flex-row items-center justify-start max-w-full">
                <h1 className="m-0 h-[154px] flex-1 relative text-inherit leading-[71px] font-bold font-inherit flex items-center justify-center max-w-full mq450:text-22xl mq450:leading-[43px] mq900:text-35xl mq900:leading-[57px]">
                  Effortless Crypto Management
                </h1>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start py-0 px-[54px] box-border gap-[20px] max-w-full text-19xl text-black mq450:gap-[25px_20px] mq900:gap-[50px_20px] mq1300:pl-[27px] mq1300:pr-[27px] mq1300:box-border">
              <div className="self-stretch flex flex-row items-center justify-center gap-[20px] max-w-full mq1650:flex-wrap mq1650:justify-center">
                <Simplicity
                  simplicity="Simplicity"
                  ourUserFriendlyInterfaceM="Our user-friendly interface makes managing your cryptocurrencies a breeze"
                  httpslottiefilescomanimat="/bti-logo-11@2x.png"
                />
                <Simplicity
                  simplicity="Security"
                  ourUserFriendlyInterfaceM="Your assets are protected by advanced encryption technology, ensuring peace of mind"
                  propWidth="644px"
                  propBackground="linear-gradient(-49.92deg, #f4f4f7, rgba(244, 244, 247, 0))"
                  propFlex="unset"
                  propMinWidth="unset"
                  httpslottiefilescomanimat="/bti-logo-11@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-center justify-center gap-[20px] max-w-full mq1650:flex-wrap">
                <Simplicity
                  simplicity="Seamlessness"
                  ourUserFriendlyInterfaceM="Enjoy a seamless experience across all your devices, from desktop to mobile"
                  propWidth="644px"
                  propBackground="linear-gradient(-49.92deg, #f4f4f7, rgba(244, 244, 247, 0))"
                  propFlex="unset"
                  propMinWidth="unset"
                  httpslottiefilescomanimat="/bti-logo-11@2x.png"
                />
                <Simplicity
                  simplicity="Privacy"
                  ourUserFriendlyInterfaceM="We value your privacy and prioritize the security of your personal information"
                  propWidth="644px"
                  propBackground="linear-gradient(-49.92deg, #f4f4f7, rgba(244, 244, 247, 0))"
                  propFlex="unset"
                  propMinWidth="unset"
                  httpslottiefilescomanimat="/bti-logo-11@2x.png"
                />
              </div>
            </div>
            <button
              className="cursor-pointer py-6 px-5 bg-[transparent] rounded-3xs [background:linear-gradient(22.52deg,_#116a00,_#1cff00)] [backdrop-filter:blur(4px)] box-border overflow-hidden flex flex-row items-center justify-center max-w-full border-[2px] border-solid border-white-background hover:bg-gainsboro-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-gainsboro-100"
              onClick={onPrivacyPolicyButtonClick}
            >
              <div className="relative text-8xl leading-[19px] font-roboto-slab text-white-background text-left mq450:text-3xl mq450:leading-[15px]">
                Learn about Privacy Policy
              </div>
            </button>
          </div>
        </div>
      </section>
      <BTILogoFooter />
    </div>
  );
};

export default Wallet;
