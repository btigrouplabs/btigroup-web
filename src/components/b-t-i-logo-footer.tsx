import type { NextPage } from "next";
import Simplicity from "./simplicity";

const BTILogoFooter: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-[116px] pb-[93px] box-border max-w-full text-center text-49xl text-gray-200 font-roboto-slab mq450:items-center mq450:justify-center mq900:pl-[25px] mq900:pr-[25px] mq900:pb-[60px] mq900:box-border">
      <div className="w-[1496px] flex flex-col items-start justify-start gap-[44px] max-w-full mq900:gap-[22px_44px]">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <h1 className="m-0 h-[154px] flex-1 relative text-inherit leading-[71px] font-bold font-inherit flex items-center justify-center max-w-full mq450:text-11xl mq450:leading-[43px] mq900:text-35xl mq900:leading-[57px]">
            Send and Receive Cryptos with Ease
          </h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[31px] max-w-full mq900:gap-[15px]">
          <Simplicity
            simplicity="Safe Transactions"
            ourUserFriendlyInterfaceM="Send and receive cryptocurrencies securely with our trusted system"
            propWidth="unset"
            propBackground="radial-gradient(50% 50% at 50% 50%, #b9ffb8, #fff 0.01%, #73f470)"
            propFlex="1"
            propMinWidth="358px"
            httpslottiefilescomanimat="/httpslottiefilescomanimationssimpleo3v3elsict@2x.png"
          />
          <Simplicity
            simplicity="Instant Confirmations"
            ourUserFriendlyInterfaceM="Experience lightning-fast transactions with instant confirmations"
            propWidth="unset"
            propBackground="radial-gradient(50% 50% at 50% 50%, #b9ffb8, #fff 0.01%, #73f470)"
            propFlex="1"
            propMinWidth="358px"
            httpslottiefilescomanimat="/httpslottiefilescomanimationssimpleo3v3elsict@2x.png"
          />
          <Simplicity
            simplicity="Address Verification"
            ourUserFriendlyInterfaceM="Our platform verifies recipient addresses to prevent errors and ensure smooth transfers"
            propWidth="unset"
            propBackground="radial-gradient(50% 50% at 50% 50%, #b9ffb8, #fff 0.01%, #73f470)"
            propFlex="1"
            propMinWidth="358px"
            httpslottiefilescomanimat="/httpslottiefilescomanimationssimpleo3v3elsict@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default BTILogoFooter;
