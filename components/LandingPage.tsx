import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import { neobrutalism } from "@clerk/themes";
export default function LandingPage() {
  return (
    <main className="flex items-center p-10 gap-24 animate-fade-in max-md:flex-col">
      <section className="flex flex-col items-center">
        <Image src="/assets/logo.svg" alt="logo" width={100} height={100} />

        <h1 className="text-2xl font-black lg:text-3xl">
          Your time, perfectly planned
        </h1>

        {/* subheading */}
        <p className="font-extralight">
          Join millions of professionals who easily book meetings with the #1
          Scheduling tool
        </p>

        {/* illustration Image */}

        <Image src="/assets/planning.svg" alt="logo" width={100} height={100} />
          </section>
          
          {/* Clerk Sign-in Componnet with custom theme  */}
          <div className="mt-3">
              <SignIn
              routing="hash" //keeps sign-in ui on the same page using hasbased routing
                  appearance={{
                  baseTheme: neobrutalism,
              }}
              />
          </div>
    </main>
  );
}