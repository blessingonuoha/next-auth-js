"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
// import Marketing from "@/components/marketing";
import Page from "@/components/page";

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
    return <Page></Page>;
  } else {
    // <button
    //         onClick={() => {
    //           redirectHandler();
    //         }}
    //       >
    //         LogOut
    //       </button>
    return null;
  }
}

export default page;
