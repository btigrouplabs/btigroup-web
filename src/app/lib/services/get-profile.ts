import axiosInstance from "../axios";

export async function getProfile() {
  try {
    const { data } = await axiosInstance.get<IUser>("/api/auth/profile");
    return {
      ok: true,
      data,
      error: null,
    };
  } catch (error) {
    return {
      ok: false,
      data: null,
      error: error,
    };
  }
}
