import { Outlet } from "react-router";
import { AppSidebar } from "~/widgets/Sidebar/AppSidebar";

export default function Sidebar() {
    return (
        <div className="flex flex-1 overflow-hidden">
            <AppSidebar />
            <div className="w-full flex-1 overflow-auto">
                <Outlet />
            </div>

        </div>

    )
}