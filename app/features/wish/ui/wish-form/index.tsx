import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
import { CustomButton } from '~/components/custom-button'
import { EmojiChoose } from '~/components/emoji/emoji-select'
import { RadioFormGroup } from '~/components/radio-form-group'
import { SelectInput } from '~/components/select'
import { Input } from '~/components/ui/input'
import { wishSchema, type WishSchema } from '~/entities/wish/wish.schema'
import { useGetEvent } from '~/hooks/queries/event/useGetEvent'
import { useGetUserEvents } from '~/hooks/queries/event/useGetUserEvents'

import { useCreateWish } from '~/hooks/queries/wish/useCreateWish'
import { useGetWishBySlug } from '~/hooks/queries/wish/useGetWishBySlug'
import { useUpdateWish } from '~/hooks/queries/wish/useUpdateWish'
import { useProfile } from '~/hooks/useProfile'
import { useAuthStore } from '~/lib/store/authStore'
import { priorities } from '~/lib/types/priorities'


interface Props {
    className?: string,
    isEditing: boolean
}

export const WishesForm: React.FC<Props> = ({ className, isEditing }) => {

    const params = useParams()
    const { user } = useAuthStore()
    const { events } = useGetUserEvents(user?.id)

    const { wishBySlug } = useGetWishBySlug(params?.userId, params?.slug)
    console.log(wishBySlug)


    const { createWish } = useCreateWish()
    const { updateWish } = useUpdateWish(wishBySlug?.id ? wishBySlug.id : "")
    const navigate = useNavigate()

    const [event, setEvent] = React.useState('');
    const [priority, setPriority] = React.useState<"LOW" | "MEDIUM" | "HIGH" | "DREAM">("LOW");
    const [emoji, setEmoji] = React.useState('🎁');

    const { register, handleSubmit, setValue } = useForm<WishSchema>({
        resolver: zodResolver(wishSchema)
    })

    React.useEffect(() => {

        if (!user) navigate(-1)

        if (isEditing) {
            wishBySlug?.title && setValue("title", wishBySlug.title)
            wishBySlug?.eventId && setValue("eventId", wishBySlug.eventId)
            wishBySlug?.link && setValue("link", wishBySlug.link)
            wishBySlug?.price && setValue("price", wishBySlug.price)
            wishBySlug?.priority && setPriority(wishBySlug.priority)
            wishBySlug?.emoji && setEmoji(wishBySlug.emoji)

        }

        setValue('priority', priority);
        setValue('eventId', event)
        setValue('emoji', emoji);

    }, [user, wishBySlug])


    const onSubmit: SubmitHandler<WishSchema> = (data) => {
        const fullData = {
            ...data,
            priority: priority,
            emoji: emoji,
            eventId: event ? event : null
        }
        isEditing ? updateWish(fullData) : createWish(fullData)
        console.log(fullData)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                <div className='flex items-center w-full gap-5'>
                    <EmojiChoose emoji={emoji} setEmoji={setEmoji} />
                    <Input {...register('title')} placeholder='Название' className='flex-1'></Input>
                </div>

                <SelectInput className='w-full mt-5' selectItems={events} setValue={setEvent} />
                <div className='flex gap-2 w-full mt-5'>
                    <Input {...register('link')} placeholder='Ссылка'></Input>
                    <Input {...register('price', { valueAsNumber: true })} placeholder='Цена' type='number'></Input>
                </div>

                <div className='mt-5'>
                    <span className='font-inter font-normal text-[#71717A] text-sm'>
                        Приоритет:
                    </span>
                    <RadioFormGroup radioGroupValues={priorities} setSelected={setPriority} selected={priority} className='mt-2.5' />
                </div>
                <CustomButton type='submit' className='mt-5' variant='purple'>Сохранить</CustomButton>
            </form>

        </>
    )
}
