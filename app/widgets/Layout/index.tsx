import React from 'react'
import { Outlet, useParams } from 'react-router'
import { Container } from '~/components/container'
import { useProfile } from '~/hooks/useProfile'
import { useAuthStore } from '~/lib/store/authStore'
import { Header } from '~/widgets/header/ui'
import { AppSidebar } from '~/widgets/sidebar/app-sidebar'
import { FooterSidebar } from '../sidebar/footer-sidebar'
import { useGetUserProfile } from '~/hooks/queries/user/useGetUserProfile'

interface Props {
    className?: string
}

export const DashboardLayout: React.FC<Props> = ({ className }) => {

    return (
        <>
            <Container>
                <Header />
                <div className="flex flex-1 overflow-hidden">
                    <AppSidebar />
                    <div className="w-full flex-1 overflow-auto">
                        <Outlet />
                    </div>
                </div>
            </Container>
            <FooterSidebar />
        </>

    )
}
