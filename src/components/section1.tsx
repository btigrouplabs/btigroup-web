import type { NextPage } from "next";
import Image from "next/image";

const Section1: NextPage = () => {
  return (
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
              Designed with simplicity and security in mind, our wallet empowers
              you to take control of your digital assets effortlessly.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[286px] pl-0 gap-[43px] mq450:pr-5 mq450:box-border mq900:gap-[21px] mq900:pr-[143px] mq900:box-border">
            <Image
              className="relative overflow-hidden shrink-0 min-h-[65px]"
              loading="lazy"
              height={65}
              width={196}
              alt=""
              src="/applestore.svg"
            />
            <Image
              className="h-[65px] w-[221px] relative overflow-hidden shrink-0 min-h-[65px]"
              loading="lazy"
              height={65}
              width={221}
              alt=""
              src="/googleplay.svg"
            />
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
  );
};

export default Section1;
