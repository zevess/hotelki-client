import { Menu } from 'lucide-react'
import React from 'react'
import { CustomButton } from '~/shared/ui/custom-button'

import { useAuthStore } from '~/shared/store/authStore'
import { useNavigationItems } from '../model/hooks/useNavigationItems'
import { MobileLinkItem } from './ui/mobile-link-item'
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from '~/shared/ui/shadcn/drawer'
import { Avatar, AvatarImage } from '~/shared/ui/shadcn/avatar'
import { SignOutButton } from '~/shared/ui/sign-out-button'



interface Props {
    className?: string
}

export const MobileSidebar: React.FC<Props> = ({ className }) => {
    const [open, setOpen] = React.useState(false)
    const { setCurrentUser, currentUser, user } = useAuthStore()
    const items = useNavigationItems(currentUser?.username, Boolean(user?.username), Boolean(user?.id !== currentUser?.id));

    return (
        <Drawer direction='left' open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <CustomButton className='md:hidden' variant='purpleOutline'>
                    <Menu />
                </CustomButton>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left p-2">

                    <div className='flex justify-between items-center mb-4'>
                        <span className='font-inter font-semibold text-base'>{currentUser?.name}</span>
                        <Avatar>
                            <AvatarImage src={currentUser?.avatar} />
                        </Avatar>
                    </div>

                    {items.map((item, index) => (
                        <div onClick={() => setOpen(!open)} key={index}>
                            <MobileLinkItem isVisible={item.isVisible} item={item} key={index} />
                        </div>

                    ))}
                </DrawerHeader>
                <DrawerFooter className="p-2 pb-4">
                    <SignOutButton />
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
