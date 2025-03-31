"use client";
import Button from "@/components/ui/Button";
import { allImages } from "@/public/images/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { useOCAuth } from "@opencampus/ocid-connect-js";

const LoginWithOcid = () => {
  const { push } = useRouter();
  // const { ocAuth } = useOCAuth();

  // const handleLogin = async () => {
  //   try {
  //     const rsp = await ocAuth.signInWithRedirect({ state: "opencampus" });
  //     console.log(rsp);
  //   } catch (error) {
  //     console.error("Login error:", error);
  //   }
  // };

  return (
    <div>
      <Button
        className="pry-btn mt-10 mb-3 w-full gap-4"
        // disabled={disableLogin}
        // onClick={handleLogin}
      >
        {" "}
        <Image src={allImages.edu} alt="Privy Logo" className="w-4" /> Continue
        with OCID
      </Button>
    </div>
  );
};

export default LoginWithOcid;
