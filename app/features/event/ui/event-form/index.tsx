import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
import { CustomButton } from '~/components/custom-button'
import { EmojiChoose } from '~/components/emoji/emoji-select'
import { Input } from '~/components/ui/input'
import { eventSchema, type EventSchema } from '~/entities/event/event.schema'
import { useCreateEvent } from '~/hooks/queries/event/useCreateEvent'
import { useGetEventBySlug } from '~/hooks/queries/event/useGetEventBySlug'
import { useUpdateEvent } from '~/hooks/queries/event/useUpdateEvent'
import { useAuthStore } from '~/lib/store/authStore'

interface Props {
    className?: string,
    isEditing: boolean
}

export const EventForm: React.FC<Props> = ({ className, isEditing }) => {

    const params = useParams()
    const navigate = useNavigate()

    const { user } = useAuthStore()
    const { wishesByEventSlug } = useGetEventBySlug(params.userId, params.slug)

    const { createEvent } = useCreateEvent()
    const { updateEvent } = useUpdateEvent(wishesByEventSlug?.id ? wishesByEventSlug?.id : "")

    const [emoji, setEmoji] = React.useState('🎁');

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<EventSchema>({
        resolver: zodResolver(eventSchema)
    })

    React.useEffect(() => {
        if (!user) navigate(-1)
        if (isEditing) {
            wishesByEventSlug?.title && setValue("title", wishesByEventSlug?.title)
            wishesByEventSlug?.emoji && setEmoji(wishesByEventSlug.emoji)
            if (wishesByEventSlug?.date) {
                const formattedDate = new Date(wishesByEventSlug.date).toISOString().split('T')[0]
                setValue("date", formattedDate)
            }
        }
        setValue('emoji', emoji)
    }, [user, wishesByEventSlug])

    const onSubmit: SubmitHandler<EventSchema> = (data) => {
        const fullData = {
            title: data.title,
            date: data.date,
            emoji: emoji
        }
        isEditing ? updateEvent(fullData) : createEvent(fullData)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                <div className='flex items-center w-full gap-5'>
                    <EmojiChoose emoji={emoji} setEmoji={setEmoji} />
                    <div className='w-full'>
                        <Input {...register('title')} placeholder='Название' className='flex-1'></Input>
                        {errors.title && <span className='text-red-500 absolute'>{errors.title.message}</span>}
                    </div>

                </div>
                <Input className='mt-5' {...register('date')} placeholder='Дата' type='date'></Input>
                {errors.date && <span className='text-red-500 absolute'>{errors.date.message}</span>}
                <CustomButton type='submit' className='mt-5' variant='purple'>Сохранить</CustomButton>
            </form>
        </>

    )
}
