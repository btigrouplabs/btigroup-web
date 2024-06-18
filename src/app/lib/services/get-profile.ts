import axiosInstance from "@/lib/axios";

export async function getProfile() {
  try {
    const { data } = await axiosInstance.get("/api/auth/profile");
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
