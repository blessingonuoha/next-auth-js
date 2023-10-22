"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Overview } from "@/components/Overview";
import { MainNav } from "@/components/MainNav";
import Error from "../api/Error/page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function page() {
  const router = useRouter();

  const redirectHandler = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });
    router.push(data.url);
  };

  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <QueryClientProvider client={queryClient}>
      <MainNav />
        <section className="p-7 mx-auto mb-7">
          <Overview />
        </section>
      </QueryClientProvider>

    );
  } if(!status === "loading" && status === "unauthenticated") {
    return <Error />
  } else {
    return null;
  }
}

export default page;
