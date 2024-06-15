import { Metadata } from "next";
import { getProfile } from "../data/services/get-profile";
import Navbar from "../ui/layout/Navbar";
import Footer from "../ui/layout/Footer";

export const metadata: Metadata = {
  title: "Profile - BTI Account",
  description: "Profile - BTI Account",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { ok, data } = await getProfile();

  return (
    <div>
      <Navbar user={data} />
      <main className="bg-white dark:bg-black space-y-6">
        {/* Children Render */}
        {children}
      </main>
      <Footer />
    </div>
  );
}
