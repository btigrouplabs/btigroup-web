import type { NextPage } from "next";
import { useCallback } from "react";
import Simplicity from "./simplicity";
import { useRouter } from "next/navigation";

const Section: NextPage = () => {
  const router = useRouter();

  const onPrivacyPolicyButtonClick = useCallback(() => {
    router.push("/privacy-policy");
  }, [router]);

  return (
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
  );
};

export default Section;
