"use client";
// import { Button } from "@components/ui/button";
// import { cn } from "../lib/utils";
import { signIn, useSession } from "next-auth/react";
// import GoogleButton from "react-google-button";
// import landingPage from "@/components/landingPage/page";
// import logo from "@/assets/images/logo.png";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <div>Welcome back {session?.user.name}</div>
      </>
    );
  }

  const callBackURL = "http://localhost:3000/marketing/dashboard";

  return (
    <div className="flex h-screen flex-1 flex-col justify-center sm:px-6 py-12 lg:px-8  bg-gradient-to-r from-green-900 to-slate-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="/assets/images/logo.png"
          alt="Your Company"
        />

        <h2 className="mt-10 text-center text-2xl font-thin leading-5 tracking-tight text-white">
          Jamit dashboard
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center mt-10 mx-auto sm:w-full sm:max-w-sm ">
        <button
          onClick={() => signIn("google", { callbackUrl: callBackURL })}
          type="submit"
          className="min-w-[50%] max-w-full h-[40px] rounded-md bg-gradient-to-t from-green-700 to-gray-500 px-4 py-2 text-sm font-bold leading-6 text-gray-900 shadow-lg  hover:border-gray-400 hover:border-2 hover:bg-none"
        >
          Login with Google
        </button>

        <p className="mt-10 text-center text-sm text-white">
          Not a member?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Contact your admin
          </a>
        </p>
      </div>
    </div>

    // <>
    //   <p>{session?.user?.email}</p>
    //   <p>{session?.user?.name}</p>
    //   <p>{session?.user?.email_verified ?? false}</p> */}
    //   <Image
    //     className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
    //     src={session?.user?.image ?? "https://i.pravatar.cc/300"}
    //     width={200}
    //     height={200}
    //     alt={session?.user?.name ?? "Profile Pic"}
    //     priority={true}
    //   />
    //   {notSignedIn ? (
    //     <>
    //       <p>H</p>
    //       <UserAuthForm />
    //     </>
    //   ) : (
    //     <p>Welcome</p>
    //   )}
    // </>
    // <main className={cn("grid gap-6")}>
    //   <p className="login-text text-4xl">Home page</p>
    //   <Link href={"/marketing/dashboard"}>
    //     <Button>Dashboard</Button>
    //   </Link>
    // </main>
  );
}
