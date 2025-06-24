import React from 'react'
import { Outlet } from 'react-router'
import { useProfile } from '~/hooks/useProfile'
import { useAuthStore } from '~/lib/store/authStore'
import { Header } from '~/widgets/Header'
import { AppSidebar } from '~/widgets/Sidebar/AppSidebar'

interface Props {
    className?: string
}

export const DashboardLayout: React.FC<Props> = ({ className }) => {


    const { user, name, avatar } = useAuthStore()



    return (
        <>
            <div className="flex flex-1 overflow-hidden">
                <AppSidebar avatar={avatar} name={name} user={user} />
                <div className="w-full flex-1 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </>

    )
}
