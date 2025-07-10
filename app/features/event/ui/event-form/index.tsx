import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'sonner'
import { CustomButton } from '~/components/custom-button'
import { EmojiChoose } from '~/components/emoji/emoji-select'
import { RadioFormGroup } from '~/components/radio-form-group'
import { Input } from '~/components/ui/input'
import { eventSchema, type EventSchema } from '~/entities/event/event.schema'
import { useCreateEvent } from '~/hooks/queries/event/useCreateEvent'
import { useGetEvent } from '~/hooks/queries/event/useGetEvent'
import { useGetEventBySlug } from '~/hooks/queries/event/useGetEventBySlug'
import { useUpdateEvent } from '~/hooks/queries/event/useUpdateEvent'
import { useProfile } from '~/hooks/useProfile'
import { useAuthStore } from '~/lib/store/authStore'
import { priorities } from '~/lib/types/priorities'



interface Props {
    className?: string,
    isEditing: boolean
}

export const EventForm: React.FC<Props> = ({ className, isEditing }) => {

    const params = useParams()

    const { wishesByEventSlug } = useGetEventBySlug(params.userId, params.slug)

    // console.log(wishesByEventSlug)

    const { createEvent } = useCreateEvent()
    const { updateEvent } = useUpdateEvent(wishesByEventSlug?.id ? wishesByEventSlug?.id : "")
    const [emoji, setEmoji] = React.useState('🎁');

    const { register, handleSubmit, setValue } = useForm<EventSchema>({
        resolver: zodResolver(eventSchema)
    })

    const { user } = useAuthStore()
    const navigate = useNavigate()

    React.useEffect(() => {
        if (isEditing) {
            wishesByEventSlug?.title && setValue("title", wishesByEventSlug?.title)
            wishesByEventSlug?.emoji && setEmoji(wishesByEventSlug.emoji)
            if (wishesByEventSlug?.date) {
                const formattedDate = new Date(wishesByEventSlug.date).toISOString().split('T')[0]
                setValue("date", formattedDate)
            }
        }
        if (!user) navigate(-1)
        setValue('emoji', emoji)
    }, [user, wishesByEventSlug])

    const onSubmit: SubmitHandler<EventSchema> = (data) => {
        const fullData = {
            title: data.title,
            date: data.date,
            emoji: emoji
        }

        console.log(fullData)

        isEditing ? updateEvent(fullData) : createEvent(fullData)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                <div className='flex items-center w-full gap-5'>
                    <EmojiChoose emoji={emoji} setEmoji={setEmoji} />
                    <Input {...register('title')} placeholder='Название' className='flex-1'></Input>
                </div>
                <Input className='mt-5' {...register('date')} placeholder='Дата' type='date'></Input>
                <CustomButton type='submit' className='mt-5' variant='purple'>Сохранить</CustomButton>
            </form>
        </>

    )
}
