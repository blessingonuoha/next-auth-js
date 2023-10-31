import { useState } from "react";
import { Loader } from "lucide-react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

const ErrorPage = () => {

  const [loading, setIsLoading] = useState(false);
  const callBackURL = "http://localhost:3000/backstage";

  async function signInHandler() {
    setIsLoading(true);
    await signIn("google", { callbackUrl: callBackURL });
  };


  return (
    <div className='flex flex-col h-screen w-full text-black text-2xl justify-center items-center'>
      <div className='flex justify-center items-center text-black'>
      <p>Oops! Seems you have not logged in</p>
      </div>
      <Button
              onClick={() => {
                signInHandler();
              }}
              className="mt-5 rounded-sm py-7 px-6 text-sm font-thin leading-6 shadow-lg dark:text-white transition-colors duration-150 ease-in-out hover:bg-transparent border-2 border-primary hover:border-2 hover:text-black"
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
      </div>
    
  )
}

export default ErrorPage 