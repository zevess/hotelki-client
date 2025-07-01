import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { CustomButton } from '~/components/shared/CustomButton'
import { EmojiChoose } from '~/components/shared/Emoji/EmojiChoose'
import { RadioFormGroup } from '~/components/shared/RadioFormGroup'
import { SelectInput } from '~/components/shared/Select'
import { Input } from '~/components/ui/input'
import { useGetEvents } from '~/hooks/queries/event/useGetEvents'
import { useCreateWish } from '~/hooks/queries/wish/useCreateWish'
import { useProfile } from '~/hooks/useProfile'
import { useAuthStore } from '~/lib/store/authStore'
import { priorities } from '~/lib/types/priorities'
import { wishSchema, type WishSchema } from '~/lib/validationSchemas/wish/wishSchema'

interface Props {
    className?: string
}

export const WishesForm: React.FC<Props> = ({ className }) => {

    const { user } = useAuthStore()
    const { events } = useGetEvents(user?.id)

    const { createWish } = useCreateWish()

    const [event, setEvent] = React.useState('');
    const [priority, setPriority] = React.useState<"LOW" | "MEDIUM" | "HIGH" | "DREAM">("LOW");
    const [emoji, setEmoji] = React.useState('🎁');

    const { register, handleSubmit, setValue } = useForm<WishSchema>({
        resolver: zodResolver(wishSchema)
    })

    React.useEffect(() => {
        setValue('emoji', emoji);
        setValue('priority', priority);
        setValue('eventId', event)
    }, [emoji, priority, event, setValue])


    const onSubmit: SubmitHandler<WishSchema> = (data) => {
        const fullData = {
            ...data,
            priority: priority,
            emoji: emoji,
            eventId: event
        }
        createWish(fullData)
        console.log(fullData)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
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
