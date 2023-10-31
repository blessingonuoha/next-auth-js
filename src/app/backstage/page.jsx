"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Overview } from "@/components/Overview";
import { MainNav } from "@/components/MainNav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorPage from "@/components/ErrorPage";

const queryClient = new QueryClient();

function page() {
  const router = useRouter();

  const redirectHandler = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });
    router.push(data.url);
  };

  const { data: session, status } = useSession();

  if (status === "authenticated" || status !== "loading" && session ) {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="dark:bg-[#000000f5] bg-[#e3e6eb]">
      <MainNav />
      <section className="p-7 mx-auto mb-2">
          <Overview />
        </section>
        </div>
      </QueryClientProvider>

    )
  // } if(status === "unauthenticated" && status !== "loading"){
  //   // console.log("unauthenticated")
  //   return (<ErrorPage  />)
  }else null
}

export default page;
