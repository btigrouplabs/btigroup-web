import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PencilSquareIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function ProfilePage() {
  return (
    <div>
      <Card className="bg-gray-200 dark:bg-gray-500 rounded-none py-5">
        <CardContent className="container p-6 mx-auto px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="flex flex-row items-center justify-start">
            <div className="h-[93px] flex flex-col items-end justify-center">
              <UserCircleIcon className="w-[93px] h-[93px] object-cover" />
              <PencilSquareIcon className="w-6 h-6 overflow-hidden shrink-0 mt-[-42px]" />
            </div>

            <div className="flex-1 flex flex-col items-start justify-start gap-[13px] mq450:flex-1 mq450:h-auto mq450:gap-[5px]">
              <div className="flex flex-row items-center justify-center gap-[13px] text-xl">
                <h3 className="m-0 text-inherit leading-[20px] font-medium font-inherit whitespace-nowrap mq450:text-base mq450:leading-[16px]">
                  Hi,abc@gmail.com
                </h3>
                <div className="flex-1 rounded-8xl box-border overflow-hidden flex flex-row items-center justify-center py-1.5 px-[7px] max-w-[75px] text-center text-3xs border-[1px] border-solid border-whitesmoke-200">
                  <div className="leading-[7px] inline-block min-w-[19px]">
                    UID:
                  </div>
                  <div className="leading-24px] inline-block min-w-[360px]">
                    1008207
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-light-gray mq450:self-stretch mq450:w-auto mq450:gap-[2px]">
                <div className="flex-1 leading-[20px] inline-block max-w-[105px] mq450:text-xs">
                  Last log-in time :
                </div>
                <div className="leading-[20px] inline-block min-w-[129px] whitespace-nowrap mq450:text-xs">
                  2024-05-31 15:50:08
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[13px] text-center text-gray-text">
                <div className="rounded-lg bg-light-gray overflow-hidden flex flex-row items-center justify-center p-[5px] hover:pl-[5px] hover:pr-[5px] hover:box-border mq450:flex">
                  <div className="leading-[20px] inline-block min-w-[63px] cursor-pointer">
                    Unverified
                  </div>
                </div>
                <div className="rounded-lg bg-light-green overflow-hidden hidden flex-row items-center justify-center p-[5px] hover:pl-[5px] hover:pr-[5px] hover:box-border hover:border-[1px] hover:border-solid hover:border-light-green mq450:hidden">
                  <div className="leading-[20px]">Verified</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="container p-6 mx-auto px-4 py-5 md:px-24 lg:px-8 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Document Verification</CardTitle>
            <CardDescription>
              Completing Document verification improves account security, lowers
              withdrawal limits, and unlocks more trading options.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg bg-lime-200 overflow-hidden flex flex-row items-center justify-center p-[5px] cursor-pointer text-center text-black hover:bg-limegreen-100">
              <div className="inline-block min-w-[71px]">Verification</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Management</CardTitle>
            <CardDescription>
              Protect your account with a login password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-2.5 px-5 mq750:items-center mq750:justify-between mq750:gap-[0px] mq750:pl-2.5 mq750:pr-2.5 mq750:box-border mq1050:items-center mq1050:justify-center mq450:pl-[5px] mq450:pr-[5px] mq450:box-border">
              <div className="flex-1 flex flex-col items-center justify-start gap-[10px] mq1250:items-center mq1250:justify-center">
                <div className="self-stretch h-2.5 relative leading-[20px] flex items-center">
                  Login Password
                </div>
                <p className="m-0 self-stretch h-[7px] relative text-3xs leading-[20px] text-light-gray flex items-center">
                  Protect your account with a login password
                </p>
              </div>
              <div className="hidden flex-col items-start justify-start gap-[9px] text-black">
                <div className="w-[33px] flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="h-2.5 w-2.5 relative min-h-[10px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="h-2.5 flex-1 relative leading-[20px] flex items-center">
                    On
                  </div>
                </div>
                <div className="w-[35px] flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="h-2.5 w-2.5 relative min-h-[10px]"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <div className="h-2.5 flex-1 relative leading-[20px] flex items-center">
                    Off
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-center py-0 px-[5px] text-lime-200 hover:pl-[5px] hover:pr-[5px] hover:box-border hover:border-[1px] hover:border-solid hover:border-light-green mq450:flex">
                <div className="relative leading-[10px] inline-block min-w-[51px]">
                  Manage
                </div>
              </div>
            </div>

            <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 gap-[10px] mq750:items-center mq750:justify-between mq750:gap-[0px] mq750:pl-2.5 mq750:pr-2.5 mq750:box-border mq1050:items-center mq1050:justify-between mq1050:gap-[0px] mq450:pl-[5px] mq450:pr-[5px] mq450:box-border">
              <div className="flex-1 flex flex-col items-center justify-start gap-[10px] max-w-full mq1050:items-center mq1050:justify-center">
                <p className="m-0 self-stretch h-2.5 relative leading-[20px] flex items-center">
                  Authentication App
                </p>
                <p className="m-0 self-stretch h-[7px] relative text-3xs leading-[20px] text-light-gray flex items-center mq450:leading-[1px]">
                  Use Google Authenticator to protect your account
                </p>
              </div>
              <div className="flex flex-col items-start justify-start gap-[9px]">
                <div className="flex flex-row items-center justify-center gap-[5px] cursor-pointer">
                  <img
                    className="h-2.5 w-2.5 relative min-h-[10px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="relative leading-[10px] inline-block min-w-[18px]">
                    On
                  </div>
                </div>
                <div className="w-[35px] hidden flex-row items-center justify-center gap-[5px] text-black">
                  <img
                    className="h-2.5 w-2.5 relative"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <div className="h-2.5 flex-1 relative leading-[20px] flex items-center">
                    Off
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-center py-0 px-[5px] text-lime-100 hover:pl-[5px] hover:pr-[5px] hover:box-border hover:border-[1px] hover:border-solid hover:border-light-green mq450:flex">
                <div className="relative leading-[10px] inline-block min-w-[51px]">
                  Manage
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 box-border gap-[10px] max-w-full mq750:items-center mq750:justify-between mq750:gap-[0px] mq750:pl-2.5 mq750:pr-2.5 mq750:box-border mq1050:items-center mq1050:justify-between mq1050:gap-[0px] mq450:pl-[5px] mq450:pr-[5px] mq450:box-border">
              <div className="flex-1 flex flex-col items-center justify-center gap-[10px] mq750:items-center mq750:justify-center">
                <div className="self-stretch h-2.5 relative leading-[20px] flex items-center">
                  Email
                </div>
                <div className="self-stretch h-[7px] relative text-3xs leading-[20px] text-light-gray flex items-center">
                  Secure your account with your email
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[9px] text-black">
                <div className="w-[33px] hidden flex-row items-center justify-center gap-[5px]">
                  <img
                    className="h-2.5 w-2.5 relative"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="h-2.5 flex-1 relative leading-[20px] flex items-center">
                    On
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-[5px] cursor-pointer text-dominant">
                  <img
                    className="h-2.5 w-2.5 relative min-h-[10px]"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <div className="relative leading-[10px] inline-block min-w-[20px]">
                    Off
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-center py-0 px-[5px] text-lime-100 hover:pl-[5px] hover:pr-[5px] hover:box-border hover:border-[1px] hover:border-solid hover:border-light-green mq450:flex">
                <div className="relative leading-[10px] inline-block min-w-[51px]">
                  Manage
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-2.5 px-5 gap-[10px] mq750:items-center mq750:justify-between mq750:gap-[0px] mq750:pl-2.5 mq750:pr-2.5 mq750:box-border mq1050:items-center mq1050:justify-center mq450:pl-[5px] mq450:pr-[5px] mq450:box-border">
              <div className="flex-1 flex flex-col items-center justify-start gap-[10px]">
                <p className="m-0 self-stretch h-2.5 relative leading-[20px] flex items-center">
                  Phone Number
                </p>
                <div className="self-stretch h-[7px] relative text-3xs leading-[20px] text-light-gray flex items-center mq450:leading-[10px]">
                  Secure your account with your phone number
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[9px]">
                <div className="flex flex-row items-center justify-center gap-[5px] cursor-pointer">
                  <img
                    className="h-2.5 w-2.5 relative min-h-[10px]"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="relative leading-[10px] inline-block min-w-[18px]">
                    On
                  </div>
                </div>
                <div className="w-[35px] hidden flex-row items-center justify-center gap-[5px] text-black">
                  <img
                    className="h-2.5 w-2.5 relative"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <div className="h-2.5 flex-1 relative leading-[20px] flex items-center">
                    Off
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-center py-0 px-[5px] text-lime-100 hover:pl-[5px] hover:pr-[5px] hover:box-border hover:border-[1px] hover:border-solid hover:border-light-green mq450:flex">
                <div className="relative leading-[10px] inline-block min-w-[51px]">
                  Manage
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
