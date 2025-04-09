import { SignUpResponse } from "@/types/auths";
import { Api } from "./api";

export const signUpApi = (body: FormData) => {
  return Api.post<FormData, SignUpResponse>(
    "/students/register",
    body,
    false,
    "multipart/form-data",
  );
};
