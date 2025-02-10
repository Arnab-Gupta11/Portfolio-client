import Banner from "@/components/home/Banner/Banner";
import Blog from "@/components/home/Blog/Blog";
import Project from "@/components/home/Project/Project";
import Skills from "@/components/home/Skills/Skills";
import Footer from "@/components/shared/Footer/Footer";

import Navbar from "@/components/shared/Navbar";
import { authOptions } from "@/utils/authOption";
import { getServerSession } from "next-auth";

const HomePage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <div className="relative min-h-screen bg-[url('../../public/assets/banner/lightBg.png')] dark:bg-[url('../../public/assets/banner/darkBg.png')] bg-cover bg-center">
        {/* <div className="absolute inset-0 bg-black/50 dark:bg-black/40"></div> Overlay */}
        <Navbar session={session} />
        <div className="pt-20 z-10">
          <Banner />
        </div>
      </div>
      <Skills />
      <Project />
      <Blog />
      <Footer />
    </div>
  );
};
export default HomePage;
