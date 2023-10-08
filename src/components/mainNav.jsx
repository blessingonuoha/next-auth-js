import Link from "next/link";

import { cn } from "@/lib/utils";
import { GripVertical } from "lucide-react";
import { useState } from "react";
import SideBar from "./sidebar";

export function MainNav({ className, ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={cn(
        "flex items-center justify-between space-x-2 lg:space-x-6 w-100 h-20 px-7 border-b-2 border-gray-700 text-white text-sm font-medium",
        className
      )}
      {...props}
    >
      <Link href="/examples/dashboard" className="">
        Overview
      </Link>
      <Link href="/examples/dashboard" className="">
        Customers
      </Link>
      <Link href="/examples/dashboard" className="">
        Products
      </Link>
      <Link href="/examples/dashboard" className="">
        Settings
      </Link>
      <GripVertical
        color="white"
        size={30}
        onClick={() => setIsOpen(!isOpen)}
      />
      <SideBar isOpen={isOpen} />
    </nav>
  );
}
