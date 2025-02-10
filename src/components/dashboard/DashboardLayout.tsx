"use client";
import { HiOutlineLogout } from "react-icons/hi";
import { ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Link, NavLink, Outlet } from "react-router-dom";
// import { useAppSelector } from "@/redux/hooks";
// import { useCurrentUser } from "@/redux/features/auth/authSlice";
// import ProfileAvatar from "@/components/shared/Navbar/ProfileAvatar";
import { BiHome } from "react-icons/bi";
import { FaBox, FaShoppingCart, FaUsers } from "react-icons/fa";
import Link from "next/link";
import SidebarItem from "@/components/dashboard/shared/SidebarItem";
import { ThemeToggler } from "../shared/ThemeToggler/ThemeTogler";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const user = useAppSelector(useCurrentUser);
  const menuItems = [
    {
      label: "Manage Blogs",
      path: "/dashboard/blogs",
      show: true,
      Icon: FaBox,
    },
    {
      label: "Manage Projects",
      path: "/dashboard/projects",
      show: true,
      Icon: FaShoppingCart,
    },
    {
      label: "View Messages",
      path: "/dashboard/messages",
      show: true,
      Icon: FaUsers,
    },
  ];
  const handleLogout = () => {
    signOut();
    router.push("/");
  };
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col w-64 bg-[#F4F8FB] dark:bg-dark-bg-primary transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        } lg:translate-x-0 lg:fixed`}
      >
        <div className="flex items-center justify-between p-4 ">
          <div className="mx-auto">
            {/* <Logo />
             */}
            Logo
          </div>

          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </Button>
        </div>
        <nav className="flex flex-col p-4 space-y-1.5">
          {menuItems.map((menuItem, idx) => {
            return menuItem.show ? <SidebarItem key={idx} menuItem={menuItem} /> : null;
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-w-0 lg:ml-64">
        {/* Navbar */}
        <header className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 bg-[#F4F8FB] dark:bg-dark-bg-primary shadow-md">
          <div>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
              <Menu className="w-6 h-6" />
            </Button>
          </div>
          <div className="flex items-center pl-5 gap-5">
            <Link className="" href={"/"}>
              <BiHome className="text-xl text-light-primary-txt dark:text-dark-primary-txt hover:scale-105 hover:cursor-pointer shadow-md w-9 h-9 p-2 rounded-md dark:shadow-slate-800" />
            </Link>
            <ThemeToggler />
            <span onClick={handleLogout} className="cursor-pointer shadow-md w-9 h-9 p-2 rounded-md dark:shadow-slate-800">
              <HiOutlineLogout className=" text-red-600 text-2xl" />
            </span>
            {/* <ProfileAvatar /> */}
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 bg-gray-50 dark:bg-dark-bg-secondary rounded-lg">
          <div className="p-4 bg-[#F4F8FB] dark:bg-dark-bg-primary rounded-lg shadow-md dark:shadow-slate-900">{children}</div>
        </main>
      </div>
    </div>
  );
}
