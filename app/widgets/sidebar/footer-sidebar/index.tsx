import React from 'react'
import { LinkItem } from './ui/footer-link-item'
import { useNavigationItemsMobile } from '../model/hooks/useNavigationItemsMobile';
import { useAuthStore } from '~/shared/store/authStore';
import { useLocation } from 'react-router';

interface Props {
    className?: string
}


export const FooterSidebar: React.FC<Props> = ({ className }) => {

    const { user } = useAuthStore();

    const location = useLocation()
    let currentLocation = location.pathname
    console.log(currentLocation)

    const items = useNavigationItemsMobile(user?.username, Boolean(user?.username), currentLocation);



    return (
        <footer className='bg-[#FAFAFA] w-full p-3 gap-10 flex justify-between sticky bottom-0 z-50 md:hidden'>
            {items.map((item, index) => (
                <LinkItem item={item} key={index} />
            ))}
        </footer>
    )
}
