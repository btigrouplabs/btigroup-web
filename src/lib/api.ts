import { User } from "next-auth";
import axiosInstance from "./axios";

interface IAccessToken {
  access_token: string;
}

export async function signInAction(provider: string, user: User) {
  try {
    const { data } = await axiosInstance.post<IAccessToken>(
      "/api/auth/signin",
      {
        provider,
        email: user.email,
      }
    );

    return data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error);
  }
}

export async function getMeAction() {
  try {
    const { data } = await axiosInstance.get("/api/auth/profile");
    return data;
  } catch (error) {
    return null;
  }
}
