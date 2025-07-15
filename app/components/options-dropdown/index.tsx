import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Edit, EllipsisVertical, MoreHorizontal, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog'

import { useDeleteEvent } from '~/hooks/queries/event/useDeleteEvent'
import { OptionsAlertDialog } from '../options-alert-dialog'
import { useDeleteWish } from '~/hooks/queries/wish/useDeleteWish'
import { cn } from '~/lib/utils'


interface Props {
    className?: string,
    editPageLink: string,
    itemId: string,
    type: 'WISH' | 'EVENT'
}

export const OptionsDropdown: React.FC<Props> = ({ className, itemId, editPageLink, type }) => {
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false)
    const { deleteEvent } = useDeleteEvent()
    const { deleteWish } = useDeleteWish()
    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <div className={cn('p-2 rounded-full hover:bg-gray-100 group cursor-pointer flex items-center transition duration-200', className)}>
                    <EllipsisVertical className='relative group-hover:text-[#C084FC] transition duration-200' />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Опции</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className='flex flex-col gap-1'>
                    <DropdownMenuItem className='cursor-pointer' onClick={() => navigate(`${editPageLink}/edit`)}><Edit /> Редактировать</DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <OptionsAlertDialog title='Вы уверены?' description={type == 'EVENT' ? 'Вместе с удалением события удалятся и связанные хотелки. Это действие не может быть отменено.': "Это действие не может быть отменено"} action='Удалить' onConfirm={() => {
                            type == 'EVENT' && deleteEvent(itemId)
                            type == 'WISH' && deleteWish(itemId)
                            setOpen(false)
                        }}><DropdownMenuItem onSelect={(e) => e.preventDefault()} className='bg-red-500 text-white hover:!bg-red-600 hover:!text-white cursor-pointer'><Trash2 className='text-white hover:text-white' /> Удалить</DropdownMenuItem></OptionsAlertDialog>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
