import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { CustomButton } from '~/components/custom-button'
import { EmojiChoose } from '~/components/emoji/emoji-select'
import { RadioFormGroup } from '~/components/radio-form-group'
import { Input } from '~/components/ui/input'
import { eventSchema, type EventSchema } from '~/entities/event/event.schema'
import { useCreateEvent } from '~/hooks/queries/event/useCreateEvent'
import { priorities } from '~/lib/types/priorities'



interface Props {
    className?: string
}

export const EventForm: React.FC<Props> = ({ className }) => {

    const { createEvent } = useCreateEvent()

    const [emoji, setEmoji] = React.useState('🎁');

    const { register, handleSubmit, setValue } = useForm<EventSchema>({
        resolver: zodResolver(eventSchema)
    })

    React.useEffect(() => {
        setValue('emoji', emoji)
    }, [emoji, setValue])

    
    const onSubmit: SubmitHandler<EventSchema> = (data) => {
        const fullData = {
            title: data.title,
            date: new Date(data.date),
            emoji: emoji
        }
        createEvent(fullData)
        // console.log(fullData)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                <div className='flex items-center w-full gap-5'>
                    <EmojiChoose emoji={emoji} setEmoji={setEmoji} />
                    <Input {...register('title')} placeholder='Название' className='flex-1'></Input>
                </div>
                <Input className='mt-5' {...register('date', { valueAsDate: true })} placeholder='Дата' type='date'></Input>
                <CustomButton type='submit' className='mt-5' variant='purple'>Сохранить</CustomButton>
            </form>
        </>

    )
}
