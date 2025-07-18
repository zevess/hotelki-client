import React from 'react'
import { cn } from '~/lib/utils'
import { Input } from '~/components/ui/input'
import { CustomButton } from '~/components/custom-button'
import { useProfile } from '~/hooks/useProfile'
import { useEditUser } from '~/hooks/queries/user/useEditUser'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { userSchema, type UserSchema } from '~/entities/user/user.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'
import { useAuthStore } from '~/lib/store/authStore'
import { AvatarUploader } from '~/features/user/ui/avatar-upload'

import { useImageUpload } from '~/hooks/useImageUpload'


interface Props {
    className?: string
}

export const ProfileEditPage: React.FC<Props> = ({ className }) => {

    const { user } = useAuthStore()
    const { imageUpload, uploadedImage, isImageUploading } = useImageUpload()
    const { edit, isUserEditing } = useEditUser()
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
                    edit({
                        name: data.name,
                        avatar: uploadedImageUrl
                    })
                }
            })
        } else {
            edit({
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
                <span className='font-inter text-base'>Фотография</span>
                <AvatarUploader setImage={setNewImage} avatar={user?.avatar} setDefaultImage={setIsDefaultImage} isDefaultImage={isDefaultImage} />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col '>
                        <Input {...register('name')} className='h-12 my-5' placeholder='Имя' />
                        {/* <Input {...register('email')} className='h-12' placeholder='Email' /> */}
                        <CustomButton disabled={isImageUploading} type='submit' className='ml-auto my-5' variant='purple'>Сохранить</CustomButton>
                    </div>
                </form>

            </div>
        </div>
    )
}
