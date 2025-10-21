import { currentUser } from "@clerk/nextjs/server";

import PublicNavbar from "../../components/PublicNavBar";
import PrivateNavBar from "../../components/PrivateNavBar";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  return (
    <div className="relative min-h-screen">
      
      {/* Render privatebar if user exists else render publicbar */}
      {user ? <PrivateNavBar /> : <PublicNavbar />}

      <section className="pt-36 min-h-screen">{children}</section>
    </div>
  );
}
