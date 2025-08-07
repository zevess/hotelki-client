import { Menu } from 'lucide-react'
import React from 'react'
import { CustomButton } from '~/components/custom-button'
import { Button } from '~/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from '~/components/ui/drawer'
import { useAuthStore } from '~/lib/store/authStore'
import { useNavigationItems } from '../model/hooks/useNavigationItems'
import { MobileLinkItem } from './ui/mobile-link-item'
import { Avatar, AvatarImage } from '~/components/ui/avatar'

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
