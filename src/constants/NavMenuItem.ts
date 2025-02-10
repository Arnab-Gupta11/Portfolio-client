export type TNavMenuItem = {
  label: string;
  path: string;
  show: boolean;
}[];
export const NavMenuOption = () => {
  // const user = useAppSelector(useCurrentUser);
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "projects",
      path: "/projects",
      show: true,
    },
    // {
    //   label: "Blog",
    //   path: "/dashboard",
    //   show: true,
    //   // path: `${user?.role === "admin" ? "/dashboard/manage-products" : "/dashboard/view-orders"}`,
    //   // show: user?.role === "user" || user?.role === "admin",
    // },
    {
      label: "Blogs",
      path: "/blogs",
      show: true,
    },
    {
      label: "Contact",
      path: "/contact",
      show: true,
    },
  ];
  return menuItems;
};
