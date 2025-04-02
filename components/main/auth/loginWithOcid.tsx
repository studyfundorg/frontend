"use client";
import Button from "@/components/ui/Button";
import { allImages } from "@/public/images/images";
// import { useOCAuth } from "@opencampus/ocid-connect-js";
import { usePrivy } from "@privy-io/react-auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginWithOcid = () => {
  // const { push } = useRouter();
  // const { ocAuth } = useOCAuth();

  // const handleLogin = async () => {
  //   try {
  //     const rsp = await ocAuth.signInWithRedirect({ state: "opencampus" });
  //     console.log(rsp);
  //   } catch (error) {
  //     console.error("Login error:", error);
  //   }
  // };

  const { push } = useRouter();
  const { ready, authenticated, login } = usePrivy();
  // Disable login when Privy is not ready or the user is already authenticated
  const disableLogin = !ready || (ready && authenticated);

  useEffect(() => {
    if (authenticated && ready) {
      push("/students/ocid");
    }
  }, [authenticated, ready, push]);

  return (
    <div>
      <Button
        className="pry-btn mt-10 mb-3 w-full gap-4"
        disabled={disableLogin}
        onClick={login}
        // link
        // href="/students/ocid"
      >
        {" "}
        <Image src={allImages.edu} alt="Privy Logo" className="w-4" /> Continue
        with OCID
      </Button>
    </div>
  );
};

export default LoginWithOcid;
