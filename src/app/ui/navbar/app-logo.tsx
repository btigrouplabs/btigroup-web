import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface IAppLogo {
  className?: string;
  height?: number;
  width?: number;
}

export function AppLogo({ className, height = 85, width = 320 }: IAppLogo) {
  return (
    <Link href="/" className="inline-flex items-center mr-8">
      <Image
        src="/img/logo.png"
        alt={"BTI Group Logo"}
        className={cn([
          "h-[42px] w-40 object-cover hover:animate-[1s_ease_0s_1_normal_none_pulsate] hover:opacity-[1]",
          className,
        ])}
        height={height}
        width={width}
      />
    </Link>
  );
}
