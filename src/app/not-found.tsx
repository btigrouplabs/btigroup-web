import imgNotFound from "@/components/img/not-found.svg";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen p-20 flex flex-col items-center bg-white dark:bg-black">
      <Image src={imgNotFound} alt="Not Found" height={480} width={480} />

      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <p className="md:text-lg xl:text-xl text-gray-500 mt-4">
          It might have been removed, had its name changed, or is temporarily
          unavailable.
        </p>

        <Link href="/">Go Home</Link>
      </div>
    </div>
  );
}
