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
      label: "Shop",
      path: "/shop",
      show: true,
    },
    {
      label: "Dashboard",
      path: "/dashboard",
      show: true,
      // path: `${user?.role === "admin" ? "/dashboard/manage-products" : "/dashboard/view-orders"}`,
      // show: user?.role === "user" || user?.role === "admin",
    },
    {
      label: "About",
      path: "/about",
      show: true,
    },
  ];
  return menuItems;
};
