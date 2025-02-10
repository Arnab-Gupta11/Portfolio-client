import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar";
import { authOptions } from "@/utils/authOption";
import { getServerSession } from "next-auth";
import { ReactNode } from "react";

const MainLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <Navbar session={session} />
      <div className="min-h-screen bg-[#F4F8FB] dark:bg-dark-bg-primary">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
