import Link from "next/link";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

import useIsMobile from "@/hooks/useIsMobile";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
// import { Separator } from "./ui/separator";
// import { Sun } from "lucide-react";

export function MainNav({ className, ...props }) {
  // const [theme, setTheme] = useState(false);
  const { data: session } = useSession();

  const router = useRouter();

  const redirectHandler = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });
    router.push(data.url);
  };

  const mobile = useIsMobile();
  return (
    <>
    
      <nav
        className={cn(
          "flex items-center justify-between lg:px-7 w-100 py-5 px-3 dark:text-gray-300 text-[#0D0C22] xs:text-[12px] sm:text-[14px] md:text-base font-semibold shadow-lg",
          className
        )}
        {...props}
      >
        
        <Link href="/backstage" className="flex items-center ">
          <p className={`pl-1 ${mobile ? "text-[22px]" : "text-[27px]"}`}>
           <strong>Backstage</strong> 
          </p>
        </Link>
        <div className="flex items-center space-x-4">
          <Button onClick={redirectHandler} variant="minDestructive" className="hover:bg-transparent border-2 border-red-800 hover:text-black">
          Logout
          </Button>
          

        <Image
        className="border-0 rounded-full"
        src={session?.user?.image}
        width={`${mobile ? 30 : 35}`}
        height={`${mobile ? 30 : 35}`}
        alt={session?.user?.name ?? "profile-pic"}
        priority={true}
      />
        </div>
        {/* <Sun size={20} className="cursor-pointer" onClick={() => setTheme(!theme)}/> */}
        {/* <Moon size={20} className="cursor-pointer" onClick={() => setTheme(!theme)}/> */}
      </nav>
      
      {/* <Separator /> */}
    </>
  );
}
