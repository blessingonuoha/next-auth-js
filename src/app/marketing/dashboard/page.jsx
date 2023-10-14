"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Overview } from "@/components/Overview";
import { MainNav } from "@/components/MainNav";

function page() {
  const router = useRouter();
  // const [path, setPath] = useState("");
  // useEffect(() => {
  //   setPath(router.pathname);
  // }, [router]);

  const redirectHandler = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });
    router.push(data.url);
  };

  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <main>
        <MainNav />
        <section className="p-7 mx-auto">
          <Overview />
        </section>
      </main>
    );
  } else {
    return null;
  }
}

export default page;
