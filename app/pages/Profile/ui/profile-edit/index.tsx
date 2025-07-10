import React from 'react'
import { Avatar, AvatarImage } from '~/components/ui/avatar'
import { cn } from '~/lib/utils'

import { Input } from '~/components/ui/input'
import { CustomButton } from '~/components/custom-button'
import { useProfile } from '~/hooks/useProfile'
import { useEditUser } from '~/hooks/queries/user/useUpdateUser'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { userSchema, type UserSchema } from '~/entities/user/user.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'
import { useAuthStore } from '~/lib/store/authStore'

interface Props {
    className?: string
}

export const ProfileEditPage: React.FC<Props> = ({ className }) => {

    const { edit } = useEditUser()
    const { user } = useAuthStore()
    const navigate = useNavigate()

    React.useEffect(() => {
        if (!user) navigate(-1)
    }, [user])

    const { register, handleSubmit, setValue } = useForm<UserSchema>({
        resolver: zodResolver(userSchema)
    })

    const onSubmit: SubmitHandler<UserSchema> = (data) => {
        edit(data);
        // console.log(data)
    }


    return (
        <div className={cn(
            'flex flex-col w-full h-full max-h-[736px] bg-white max-w-[863px] rounded-[20px] p-6',
            className
        )}>
            <div className='flex flex-col'>
                <span className='font-inter text-base'>Фотография</span>
                <div className='flex items-center h-14 gap-5 mt-3'>
                    <Avatar className='w-[56px] h-[56px]'>
                        <AvatarImage src={user?.avatar} />
                    </Avatar>
                    <CustomButton variant='purple'>Сменить фото</CustomButton>
                    <CustomButton variant='redOutline'>Удалить фото</CustomButton>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col '>
                        <Input {...register('name')} className='h-12 my-5' placeholder='Имя' />
                        {/* <Input {...register('email')} className='h-12' placeholder='Email' /> */}
                        <CustomButton type='submit' className='ml-auto my-5' variant='purple'>Сохранить</CustomButton>
                    </div>
                </form>

            </div>
        </div>
    )
}
