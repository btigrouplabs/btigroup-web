"use client";
import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import Section1 from "../components/section1";
import Section from "../components/section";
import BTILogoFooter from "../components/b-t-i-logo-footer";
import Footer from "../components/footer";

const Wallet: NextPage = () => {
  const router = useRouter();

  const onPrivacyPolicyContainerClick = useCallback(() => {
    router.push("/privacy-policy");
  }, [router]);

  const onTermsContainerClick = useCallback(() => {
    router.push("/terms-conditions");
  }, [router]);

  const onWalletContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='section1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPrivacyPolicyContainer2Click = useCallback(() => {
    router.push("/privacy-policy");
  }, [router]);

  const onTermsContainer2Click = useCallback(() => {
    router.push("/terms-conditions");
  }, [router]);

  return (
    <div className="w-full relative bg-white-background box-border overflow-hidden flex flex-col items-start justify-start tracking-[normal] border-[1px] border-solid border-black">
      <Section1 />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full">
        <Section />
      </section>
      <BTILogoFooter />
    </div>
  );
};

export default Wallet;
