import { UserCheck2 } from 'lucide-react'
import React from 'react'
import { useDeleteFriend } from '~/entities/friends/api/useDeleteFriend'
import { OptionsAlertDialog } from '~/shared/ui/options-alert-dialog'

interface Props {
    className?: string,
    friendId: string
}

export const InFriendsIcon: React.FC<Props> = ({ className, friendId }) => {

    const { deleteFriend } = useDeleteFriend()

    return (
        <OptionsAlertDialog title='Вы уверены что хотите удалить друга?' description={'Вам придется отправить повторно отправить заявку.'} action='Удалить' onConfirm={() => deleteFriend(friendId)}>
            <div className='cursor-pointer border-2 transition duration-200 rounded-[8px] border-transparent hover:border-[#C084FC] p-1 group'>
                <UserCheck2 size={'24px'} className='group-hover:text-[#C084FC] transition duration-200' />
            </div>
        </OptionsAlertDialog>
    )
}
