import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 gap-10 animate-fade-in bg-white">
      <Image src="/assets/logo.svg" alt="logo" width={100} height={100} />
      <SignIn />
    </div>
  );
}
