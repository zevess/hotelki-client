import React from 'react'
import { useNavigationItems } from './model/hooks/useNaviagationItems'
import { LinkItem } from './ui/LinkItem'

interface Props {
    className?: string
}


export const FooterSidebar: React.FC<Props> = ({ className }) => {

    const items = useNavigationItems();

    return (
        <footer className='bg-[#FAFAFA] w-full p-3 gap-10 flex justify-between '>
            {items.map((item, index) => (
                <LinkItem item={item} />
            ))}
        </footer>
    )
}
