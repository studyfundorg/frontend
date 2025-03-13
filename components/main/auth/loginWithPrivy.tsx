"use client";
import Button from "@/components/ui/Button";
import { allImages } from "@/public/images/images";
import { usePrivy } from "@privy-io/react-auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginWithPrivy = () => {
  const { push } = useRouter();
  const { ready, authenticated, login } = usePrivy();
  // Disable login when Privy is not ready or the user is already authenticated
  const disableLogin = !ready || (ready && authenticated);

  useEffect(() => {
    if (authenticated && ready) {
      push("/donate");
    }
  }, [authenticated, ready]);

  return (
    <div>
      <Button
        className="pry-btn mt-10 mb-3 w-full gap-4"
        disabled={disableLogin}
        onClick={login}
      >
        {" "}
        <Image
          src={allImages.privyLogo}
          alt="Privy Logo"
          className="w-4"
        />{" "}
        Continue with Privy
      </Button>
    </div>
  );
};

export default LoginWithPrivy;
