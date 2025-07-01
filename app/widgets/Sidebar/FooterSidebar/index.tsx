import React from 'react'
import { LinkItem } from './ui/LinkItem'
import { useNavigationItemsMobile } from '../model/hooks/useNavigationItemsMobile';
import { useAuthStore } from '~/lib/store/authStore';

interface Props {
    className?: string
}


export const FooterSidebar: React.FC<Props> = ({ className }) => {

    const { user } = useAuthStore();



    // React.useEffect(() => {
    //     const dada = localStorage.getItem('user-storage')
    //     console.log(dada)
    // }, [])

    const items = useNavigationItemsMobile(user?.id);



    return (
        <footer className='bg-[#FAFAFA] w-full p-3 gap-10 flex justify-between sticky bottom-0 z-50 md:hidden'>
            {items.map((item, index) => (
                <LinkItem item={item} key={index} />
            ))}
        </footer>
    )
}
