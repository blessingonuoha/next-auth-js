import Link from "next/link";

import { cn } from "@/lib/utils";
import { useState } from "react";
import SideBar from "./Sidebar";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.png";
import { Separator } from "@/components/ui/separator";
import useIsMobile from "@/hooks/useIsMobile";

export function MainNav({ className, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  const mobile = useIsMobile();
  return (
    <>
      <nav
        className={cn(
          "flex items-center justify-between lg:px-7 w-100 h-20 px-3  text-gray-300 xs:text-[12px] sm:text-[14px] md:text-base font-semibold ",
          className
        )}
        {...props}
      >
        {/* <Input
          type="search"
          placeholder="Search..."
          className="md:w-[300px] lg:w-[700px]"
        /> */}
        <Link href="/marketing/dashboard" className="flex items-center ">
          <Image
            src={Logo}
            width={`${mobile ? 30 : 35}`}
            height={25}
            alt="jamit-logo"
          />
          <p className={`pl-1 ${mobile ? "text-[20px]" : "text-[27px]"}`}>
            Jamit Dashboard
          </p>
        </Link>
        <ul className="flex md:space-x-10 lg:space-x-32 ">
          <Link
            href="https://jamit.app"
            className="xs:hidden md:block"
            target="_blank"
          >
            Jamit App
          </Link>
          <Link href="/" className=" xs:hidden md:block">
            Customer
          </Link>
          <Link href="/" className="xs:hidden md:block">
            Product
          </Link>
          <Link href="/" className="xs:hidden md:block">
            Settings
          </Link>
        </ul>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
      <Separator />
    </>
  );
}
