"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import GoogleButton from "react-google-button";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  // console.log(session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GoogleButton onClick={() => signIn("google")} />
      <button onClick={() => signOut("google")}>Sign out</button>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.name}</p>
      <p>{session?.user?.email_verified ?? false}</p>
      {/* <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src={session?.user?.image ?? "https://i.pravatar.cc/300"}
        width={200}
        height={200}
        alt={session?.user?.name ?? "Profile Pic"}
        priority={true}
      /> */}
    </main>
  );
}
