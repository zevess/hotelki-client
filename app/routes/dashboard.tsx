import { Outlet } from "react-router";

import { Header } from "~/widgets/header/ui";
import { DashboardLayout } from "~/widgets/layout";
import { AppSidebar } from "~/widgets/sidebar/app-sidebar";
import type { Route } from "./+types/dashboard";


export default function Dashboard() {
    return <DashboardLayout />
}