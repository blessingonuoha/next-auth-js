"use client";
import { signIn } from "next-auth/react";
import GoogleButton from "react-google-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold text-gray-600">Hello world!</h1>
      <GoogleButton onClick={() => signIn("google")} />
    </main>
  );
}
