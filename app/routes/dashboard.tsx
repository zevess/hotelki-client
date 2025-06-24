import { Outlet } from "react-router";

import { Header } from "~/widgets/Header";
import { DashboardLayout } from "~/widgets/Layout";
import { AppSidebar } from "~/widgets/Sidebar/AppSidebar";

export default function Dashboard() {
    return <DashboardLayout />
}