import React from 'react'
import { Outlet } from 'react-router'
import { Container } from '~/components/shared/Container'
import { useProfile } from '~/hooks/useProfile'
import { useAuthStore } from '~/lib/store/authStore'
import { Header } from '~/widgets/Header'
import { AppSidebar } from '~/widgets/Sidebar/AppSidebar'
import { FooterSidebar } from '../Sidebar/FooterSidebar'

interface Props {
    className?: string
}

export const DashboardLayout: React.FC<Props> = ({ className }) => {


    const { user } = useAuthStore();

    return (
        <>
            <Container>
                <Header />
                <div className="flex flex-1 overflow-hidden">
                    <AppSidebar/>
                    <div className="w-full flex-1 overflow-auto">
                        <Outlet />
                    </div>
                </div>
            </Container>
            <FooterSidebar />
        </>

    )
}
