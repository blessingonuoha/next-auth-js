import React from "react";
import { MainNav } from "@/components/mainNav";
import { Footer } from "@/components/footer";

const Page = ({ children }) => {
  return (
    <main className="bg-gray-900 h-screen">
      <MainNav />
      <section>{children}</section>
      <Footer />
    </main>
  );
};

export default Page;
