import { auth } from "@/auth";
import Link from "next/link";
import { AppLogo } from "../navbar/app-logo";
import { ModeToggle } from "../navbar/mode-toggle";
import { ProfileButton } from "../navbar/profile-button";
import { SignInButton } from "../navbar/signin-button";

const menuItems = [
  { href: "/features", label: "Features" },
  { href: "/products", label: "Products" },
  { href: "/about-us", label: "About Us" },
];

export default async function Navbar() {
  const session = await auth();

  return (
    <div className="bg-white dark:bg-black">
      <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <AppLogo />
            <ul className="items-center hidden space-x-8 lg:flex">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="[text-decoration:none] relative text-[inherit] inline-block min-w-[38px] hover:text-light-green"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className="items-center justify-center hidden space-x-5 lg:flex">
            <li>{session?.user ? <ProfileButton /> : <SignInButton />}</li>
            <li>
              <ModeToggle />
            </li>
          </ul>
          {/* <div className="lg:hidden">
            <Button
              size="icon"
              variant="outline"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <Bars3Icon className="w-5" />
            </Button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white dark:bg-black text-black dark:text-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <AppLogo />
                    </div>
                    <div>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XMarkIcon className="w-5" />
                      </Button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {menuItems.map((item, index) => (
                        <li key={index}>
                          <Link
                            href={item.href}
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                      <li className="items-center justify-center w-full">
                        <SignInButton />
                      </li>
                      <li className="items-center justify-center w-full">
                        <ModeToggle />
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
}
