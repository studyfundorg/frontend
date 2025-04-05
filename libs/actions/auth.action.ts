"use server";

import { signUpApi } from "@/services/apis/auth.api";
import { ActionFormStatus } from "@/types/auths";

export const signUpAction = async (_: ActionFormStatus, body: FormData) => {
  console.log(body);
  try {
    const rsp = await signUpApi(body);

    console.log(rsp);

    if (!rsp.ok) {
      return {
        error: true,
        message: rsp?.body?.message || "Something went wrong",
      };
    }

    return {
      error: false,
      message: rsp?.body?.message || "User logged in successfully",
      data: rsp?.body,
    };
  } catch (error) {
    console.log(error);

    return {
      error: true,
      message: "Something went wrong",
    };
  }
};
