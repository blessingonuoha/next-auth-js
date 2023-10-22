"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader } from "lucide-react";
import { signIn } from "next-auth/react";


export default function Home() {

  const [loading, setIsLoading] = useState(false);
  const callBackURL = "http://localhost:3000/backstage";

  async function signInHandler() {
    setIsLoading(true);
    await signIn("google", { callbackUrl: callBackURL });
  };


  return (
    <div className="flex flex-col justify-center place-items-center h-screen px-6 py-12 lg:px-8 bg-[#000000f5]">
        <div className=" flex flex-col justify-center h-[400px] min-w-[50vw] border border-gray-500 px-5 rounded-xl bg-opacity-20 backdrop-filter backdrop-blur-sm shadow-lg">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-15 w-auto"
              src="/assets/images/logo.png"
              alt="jamit-logo"
            />

            <h2 className="mt-10 text-center text-[1.2rem] font-bold leading-5 tracking-tight text-white">
              Backstage
            </h2>
          </div>

          <div className="flex flex-col justify-center items-center mt-10 mx-auto sm:w-full sm:max-w-sm ">
            <Button
              onClick={() => {
                signInHandler();
              }}
              className="min-w-[50%] h-[50px] rounded-sm py-4 px-6 text-sm font-thin leading-6 shadow-lg text-white transition-colors duration-150 ease-in-out hover:bg-orange-700"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <Loader />
                  </svg>
                  <span>Please wait</span>
                </>
              ) : (
                <p>Login with Google</p>
              )}
            </Button>

            <div className="mt-10 md:flex md:space-x-2 text-center text-sm text-white">
              <p className="xs:pb-3">Not a member?</p>
              <span className="font-semibold ">Contact your admin</span>
            </div>
          </div>
        </div>
      </div>
  );
}
