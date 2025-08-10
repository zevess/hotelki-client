import React from 'react'
import { cn } from '~/shared/lib/utils'
import { CustomButton } from '~/shared/ui/custom-button'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { userSchema, type UserSchema } from '~/entities/user/model/user.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'
import { useAuthStore } from '~/shared/store/authStore'
import { AvatarUploader } from '~/features/user/ui/avatar-upload'
import { useImageUpload } from '~/shared/lib/hooks/useImageUpload'
import { useUpdateUser } from '~/entities/user/api/useUpdateUser'
import { BadgeCheck } from 'lucide-react'
import { useSendVerification } from '~/entities/verification/api/useSendVerification'
import { Separator } from '~/shared/ui/shadcn/separator'
import { Input } from '~/shared/ui/shadcn/input'


interface Props {
    className?: string
}

export const ProfileEditPage: React.FC<Props> = ({ className }) => {

    const { user } = useAuthStore()
    const { imageUpload, uploadedImage, isImageUploading } = useImageUpload()
    const { update, isUserUpdating } = useUpdateUser()
    const { sendVerification } = useSendVerification()
    const navigate = useNavigate()

    const [newImage, setNewImage] = React.useState<File | null>(null)
    const [isDefaultImage, setIsDefaultImage] = React.useState(false)


    React.useEffect(() => {
        if (!user) navigate(-1)

        setValue("name", user?.name)

    }, [user])

    const { register, handleSubmit, setValue } = useForm<UserSchema>({
        resolver: zodResolver(userSchema)
    })

    const onSubmit: SubmitHandler<UserSchema> = async (data) => {

        if (newImage) {
            imageUpload(newImage, {
                onSuccess: (uploadedImageUrl) => {
                    update({
                        name: data.name,
                        avatar: uploadedImageUrl
                    })
                }
            })
        } else {
            update({
                name: data.name,
                avatar: isDefaultImage ? "https://i.ibb.co/chBSqBxn/default-avatar.jpg" : user?.avatar
            })
        }

    }

    return (
        <div className={cn(
            'flex flex-col w-full h-full max-h-[736px] bg-white max-w-[863px] rounded-[20px] p-6',
            className
        )}>
            <div className='flex flex-col'>

                {user?.isVerified == false && <div className='flex flex-col gap-4'>
                    <span className='text-xl font-semibold'>Аккаунт не подтвержден. Некоторые функции могут быть ограничены</span>
                    <CustomButton onClick={() => sendVerification(user.email)} variant='purple' className='w-fit'>Подтвердить аккаунт</CustomButton>

                    <Separator className='mb-3' />
                </div>}


                <div className='flex justify-between'>
                    <span className='font-inter text-base'>Фотография</span>
                    {user?.isVerified && <BadgeCheck className='mx-1.5' />}
                </div>

                <AvatarUploader setImage={setNewImage} avatar={user?.avatar} setDefaultImage={setIsDefaultImage} isDefaultImage={isDefaultImage} />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col '>
                        <Input {...register('name')} className='h-12 my-5' placeholder='Имя' />
                        <CustomButton disabled={isImageUploading} type='submit' className='ml-auto my-5' variant='purple'>Сохранить</CustomButton>
                    </div>
                </form>
            </div>
        </div>
    )
}
