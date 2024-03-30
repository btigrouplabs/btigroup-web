import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type SimplicityType = {
  simplicity?: string;
  ourUserFriendlyInterfaceM?: string;
  httpslottiefilescomanimat?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propBackground?: CSSProperties["background"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Simplicity: NextPage<SimplicityType> = ({
  simplicity,
  ourUserFriendlyInterfaceM,
  propWidth,
  propBackground,
  propFlex,
  propMinWidth,
  httpslottiefilescomanimat,
}) => {
  const simplicityStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      background: propBackground,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propBackground, propFlex, propMinWidth]);

  return (
    <div
      className="w-[644px] rounded-14xl [background:linear-gradient(-49.92deg,_#f4f4f7,_rgba(244,_244,_247,_0))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border flex flex-col items-center justify-start py-[13px] px-[19px] max-w-full text-center text-19xl text-black font-roboto-slab border-[1px] border-solid border-bbb"
      style={simplicityStyle}
    >
      <div className="h-56 flex flex-row items-center justify-start">
        <img
          className="h-56 w-56 relative object-cover"
          loading="lazy"
          alt=""
          src={httpslottiefilescomanimat}
        />
      </div>
      <div className="self-stretch flex flex-col items-center justify-start">
        <h3 className="m-0 self-stretch relative text-inherit leading-[43px] font-normal font-inherit mq450:text-4xl mq450:leading-[26px] mq900:text-11xl mq900:leading-[34px]">
          {simplicity}
        </h3>
        <div className="self-stretch relative text-lg leading-[19px] text-gray-300">
          {ourUserFriendlyInterfaceM}
        </div>
      </div>
    </div>
  );
};

export default Simplicity;
