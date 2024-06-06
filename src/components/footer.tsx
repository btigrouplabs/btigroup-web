import Image from "next/image";
import Link from "next/link";
import { FaMailBulk } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedin,
  FaMapLocation,
  FaMedium,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="self-stretch flex flex-row items-start justify-start pt-11 px-[25px] pb-[18px] box-border max-w-full text-left text-sm text-dominant font-roboto">
      <div className="flex-1 flex flex-col items-start justify-start gap-[5.5px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 mq750:h-auto mq1050:h-auto">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-center py-0 px-0.5 box-border gap-[23px] max-w-[1200px] mq750:w-full mq750:h-auto mq1250:max-w-full">
            <div className="self-stretch flex-1 flex flex-col items-center justify-center py-0 px-0 box-border gap-[18px] min-w-[120px] max-w-[180px]">
              <Image
                loading="lazy"
                width={131}
                height={131}
                alt="BTI Group OÜ"
                src="/img/logo.svg"
              />

              <div className="rounded-9xl flex flex-row items-center justify-center py-[13px] px-[30px] box-border gap-[11px] max-w-[195px]">
                <FaXTwitter className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]" />
                <FaLinkedin className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]" />
                <FaTelegram className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]" />
                <FaMedium className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]" />
                <FaGithub className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]" />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[120px] max-w-[180px]">
              <b className="relative text-xl leading-[24px] font-semibold inline-block min-w-[70px] mq450:text-base mq450:leading-[19px]">
                General
              </b>
              <div className="self-stretch relative leading-[14px]">
                About BIT Group
              </div>
              <div className="self-stretch relative leading-[14px]">
                BTI Communities
              </div>
              <div className="self-stretch relative leading-[14px]">Blog</div>
              <div className="self-stretch relative leading-[14px]">
                Announcements
              </div>
              <div
                className="self-stretch relative leading-[14px] cursor-pointer"
                // onClick={onCareersTextClick}
              >
                Careers
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[120px] max-w-[180px]">
              <b className="relative text-xl leading-[24px] font-semibold inline-block min-w-[101px] mq450:text-base mq450:leading-[19px]">
                Developers
              </b>
              <div className="self-stretch relative leading-[14px]">
                Developer Hub
              </div>
              <div className="self-stretch relative leading-[14px]">
                Tech Docs
              </div>
              <div className="self-stretch relative leading-[14px]">GitHub</div>
              <div className="self-stretch relative leading-[14px]">Forum</div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[120px] max-w-[180px]">
              <a className="[text-decoration:none] relative text-xl leading-[24px] font-semibold text-[inherit] inline-block min-w-[78px] mq450:text-base mq450:leading-[19px]">
                Services
              </a>
              <div className="self-stretch relative leading-[14px]">
                BBA Chain
              </div>
              <div className="self-stretch relative leading-[14px]">
                BTI Exchange
              </div>
              <div className="self-stretch relative leading-[14px]">
                BTI Wallet
              </div>
              <div className="self-stretch relative leading-[14px]">
                Quick Token Generator
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[120px] max-w-[180px]">
              <b className="relative text-xl leading-[24px] font-semibold inline-block min-w-[95px] mq450:text-base mq450:leading-[19px]">
                Resources
              </b>
              <div className="self-stretch relative leading-[14px]">
                White Paper
              </div>
              <div className="self-stretch relative leading-[14px]">
                BTI Echosystem
              </div>
              <div className="self-stretch relative leading-[14px]">
                BTI Roadmap
              </div>
              <div className="self-stretch relative leading-[14px]">
                BTI documents
              </div>
              <div className="self-stretch relative leading-[14px]">
                BTI Presentation
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[18px] min-w-[120px] max-w-[180px] text-xl">
              <b className="relative leading-[22px] font-bold inline-block min-w-[99px] mq450:text-base mq450:leading-[18px]">
                Contact Us
              </b>
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 gap-[9px] text-sm">
                <div className="w-48 flex flex-row items-center justify-center gap-[8px]">
                  <FaMailBulk className="h-[12.4px] w-4 relative" />
                  <a
                    className="flex-1 relative leading-[20px] text-[inherit] [text-decoration:none] whitespace-nowrap"
                    href="mailto:contact@btigroup.ee"
                    target="_blank"
                  >
                    contact@btigroup.ee
                  </a>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                  <FaMapLocation className="h-[12.4px] w-4 relative" />
                  <p className="m-0 flex-1 relative leading-[20px]">
                    BTI Group OÜ, Tornimäe tn 3, Tallin, 10145, Estonia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-px flex flex-row items-start justify-start py-0 px-[74px] box-border max-w-full mq1250:pl-[37px] mq1250:pr-[37px] mq1250:box-border">
          <div className="self-stretch flex-1 relative box-border max-w-full border-t-[1px] border-solid border-gray-100" />
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
          <p className="m-0 flex-1 relative leading-[30px] font-light inline-block min-w-[452px] max-w-full mq750:min-w-full">
            © 2024 BTI Group OÜ
          </p>
          <div className="flex-1 flex flex-row items-start justify-end gap-[12px] min-w-[452px] max-w-full text-center text-lime-200 mq750:min-w-full mq450:flex-wrap">
            <div className="relative leading-[30px] font-light text-dominant inline-block min-w-[118px]">
              All Rights Reserved
            </div>
            <u className="relative [text-decoration:underline] leading-[30px] font-light">
              <Link href="/terms-conditions">Terms and Conditions</Link>
            </u>
            <u className="relative [text-decoration:underline] leading-[30px] font-light inline-block min-w-[85px]">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </u>
          </div>
        </div>
      </div>
    </footer>
  );
}
