import { Menu } from 'lucide-react'
import React from 'react'
import { CustomButton } from '~/shared/ui/custom-button'

import { useAuthStore } from '~/shared/store/authStore'
import { useNavigationItems } from '../model/hooks/useNavigationItems'
import { MobileLinkItem } from './ui/mobile-link-item'
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from '~/shared/ui/shadcn/drawer'
import { Avatar, AvatarImage } from '~/shared/ui/shadcn/avatar'
import { Button } from '~/shared/ui/shadcn/button'



interface Props {
    className?: string
}

export const MobileSidebar: React.FC<Props> = ({ className }) => {
    const [open, setOpen] = React.useState(false)
    const { setCurrentUser, currentUser, user } = useAuthStore()
    const items = useNavigationItems(currentUser?.id, Boolean(user?.id));

    return (
        <Drawer direction='left' open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <CustomButton className='md:hidden' variant='purpleOutline'>
                    <Menu />
                </CustomButton>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">

                    <div className='flex justify-between items-center mb-4'>
                        <span className='font-inter font-semibold text-base'>{currentUser?.name}</span>
                        <Avatar>
                            <AvatarImage src={currentUser?.avatar} />
                        </Avatar>
                    </div>

                    {items.map((item, index) => (
                        <MobileLinkItem item={item} key={index} />
                    ))}
                </DrawerHeader>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Закрыть</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
