import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { XCircle, LogOut } from "lucide-react";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import useIsMobile from "@/hooks/useIsMobile";

function SideBar({ isOpen, setIsOpen }) {
  const { data: session } = useSession();
  const router = useRouter();

  // change the close btn color on hover
  const [color, setColor] = useState("#d4d4d4");

  const isMobile = useIsMobile();

  const hideAvartar = () => {
    // console.log(isOpen);
    setIsOpen(true);
  };

  const redirectHandler = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });
    router.push(data.url);
  };

  return (
    <div className="position-absolute z-[1000]">
      <div className="flex flex-col position-relative bg-gray-900 bottom-0 ">
        <Sheet>
          <SheetTrigger onClick={hideAvartar}>
            {isMobile && (
              <Image
                src={session?.user?.image}
                width={30}
                height={25}
                alt="avartar"
                className={`${isOpen ? "hidden" : "block rounded-lg"}`}
              />
            )}
          </SheetTrigger>

          <SheetContent
            setIsOpen={setIsOpen}
            className="w-[400px] xs:w-[300px] "
          >
            <SheetClose className="hover">
              {/* <X
                color="#d4d4d4"
                className="hover:bg-red-700"
                size={25}
                onClick={() => setIsOpen(false)}
              /> */}
              <XCircle
                onMouseOver={() => {
                  setColor("red");
                  // console.log(session?.user?.email);
                  // console.log(session?.user?.name);
                }}
                onMouseLeave={() => {
                  setColor("#d4d4d4");
                }}
                color={color}
                size={28}
                onClick={() => setIsOpen(false)}
              />
            </SheetClose>
            <SheetHeader>
              <SheetTitle className="text-left my-3 text-2xl">
                Dashboard
              </SheetTitle>
              <ul className="space-y-10">
                <li className="text-[20px]">
                  Welcome,{" "}
                  <span className="font-bold">{session?.user?.name}</span>
                </li>

                <li className="hover:translate-x-4 transition-transform ease-in w-[50%]">
                  <a href="https://jamit.app">Jamit App</a>
                </li>
                {/* <li>
                  <a href="/">Product</a>
                </li> */}
                <li className="hover:translate-x-2 transition-transform ease-in w-[50%] ">
                  <a href="/">Product</a>
                </li>
                <li className="hover:translate-x-4 transition-transform ease-in w-[50%] ">
                  <a href="/">Customer</a>
                </li>
                <li className="hover:translate-x-4 transition-transform ease-in w-[50%]">
                  <a href="/">Settings</a>
                </li>
                <Button
                  onClick={redirectHandler}
                  variant={"destructive"}
                  className="w-[120px]"
                >
                  <LogOut absoluteStrokeWidth />
                  <span className="ml-2">Logout</span>
                </Button>
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default SideBar;
