"use client";
import Image from "next/image";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";

const HomePage: NextPage = () => {
  const router = useRouter();

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
                Welcome to BTI Group OÜ
              </h1>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start max-w-full text-11xl">
              <div className="flex-1 relative leading-[49px] font-light inline-block max-w-full mq450:text-lg mq450:leading-[29px] mq900:text-5xl mq900:leading-[39px]">
                BTI Group OU is a company in the blockchain and Web3 space. Our
                flagship project, BBAChain, exemplifies our commitment to
                innovation, offering a high-speed, cost-effective Layer 1
                blockchain solution. With a focus on community-driven growth and
                a unique referral program, we&apos;re not just building
                technology; we&apos;re cultivating a vibrant ecosystem for DeFi
                and applications.
              </div>
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
    </div>
  );
};

export default HomePage;
