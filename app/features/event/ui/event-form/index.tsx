import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
import { CustomButton } from '~/shared/ui/custom-button'
import { EmojiChoose } from '~/features/emoji/ui/emoji-select'
import { useCreateEvent } from '~/entities/event/api/useCreateEvent'
import { useGetEventBySlug } from '~/entities/event/api/useGetEventBySlug'
import { useUpdateEvent } from '~/entities/event/api/useUpdateEvent'
import { useAuthStore } from '~/shared/store/authStore'
import { Input } from '~/shared/ui/shadcn/input'
import { eventSchema, type EventSchema } from '~/entities/event/model/event.schema'
import { OptionsAlertDialog } from '~/shared/ui/options-alert-dialog'
import { useDeleteEvent } from '~/entities/event/api/useDeleteEvent'

interface Props {
    className?: string,
    isEditing: boolean
}

export const EventForm: React.FC<Props> = ({ className, isEditing }) => {

    const params = useParams()
    const navigate = useNavigate()

    const { user } = useAuthStore()
    const { wishesByEventSlug } = useGetEventBySlug(user?.id, params.slug)

    const { createEvent } = useCreateEvent()
    const { updateEvent } = useUpdateEvent(wishesByEventSlug?.id ? wishesByEventSlug?.id : "")
    const { deleteEvent } = useDeleteEvent('edit')

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
                <div className='flex justify-between'>
                    <CustomButton type='submit' className='mt-5' variant='purple'>Сохранить</CustomButton>

                    {isEditing && <OptionsAlertDialog title='Вы уверены?' description={'Вместе с удалением события удалятся и связанные хотелки. Это действие не может быть отменено.'} action='Удалить' onConfirm={() => {
                        deleteEvent(String(wishesByEventSlug?.id))
                    }}>
                        <CustomButton className='mt-5' variant='redOutline'>Удалить</CustomButton>
                    </OptionsAlertDialog>}
                </div>
            </form>
        </>

    )
}
