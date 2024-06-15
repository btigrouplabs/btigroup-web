export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen justify-center flex flex-col items-center bg-white dark:bg-black">
      {children}
    </div>
  );
}
