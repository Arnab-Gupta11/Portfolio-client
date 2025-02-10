import DashboardLayout from "@/components/dashboard/DashboardLayout";
import React, { ReactNode } from "react";

const DashboardLayoutPage = ({ children }: { children: ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default DashboardLayoutPage;
