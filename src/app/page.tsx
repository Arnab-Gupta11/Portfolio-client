import Banner from "@/components/home/Banner/Banner";
import Skills from "@/components/home/Skills/Skills";

import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div>
      <div className="relative min-h-screen bg-[url('../../public/assets/banner/lightBg.png')] dark:bg-[url('../../public/assets/banner/darkBg.png')] bg-cover bg-center">
        {/* <div className="absolute inset-0 bg-black/50 dark:bg-black/40"></div> Overlay */}
        <Navbar />
        <div className="pt-20 z-10">
          <Banner />
        </div>
      </div>
      <Skills />
    </div>
  );
}
