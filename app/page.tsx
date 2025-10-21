import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {

  const user = await currentUser();

  if (!user) return <LandingPage />
  
  return redirect("/events");
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Calendra</h1>
    </div>
  );
}
