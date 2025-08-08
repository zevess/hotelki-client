import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
import { CustomButton } from '~/components/custom-button'
import { EmojiChoose } from '~/components/emoji/emoji-select'
import { RadioFormGroup } from '~/components/radio-form-group'
import { SelectInput } from '~/components/select'
import { Checkbox } from '~/components/ui/checkbox'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { wishSchema, type WishSchema } from '~/entities/wish/wish.schema'
import { useGetUserEvents } from '~/hooks/queries/event/useGetUserEvents'
import { useCreateWish } from '~/hooks/queries/wish/useCreateWish'
import { useGetWishBySlug } from '~/hooks/queries/wish/useGetWishBySlug'
import { useUpdateWish } from '~/hooks/queries/wish/useUpdateWish'
import { useAuthStore } from '~/lib/store/authStore'
import { priorities } from '~/lib/types/priorities.types'


interface Props {
    className?: string,
    isEditing: boolean
}

export const WishesForm: React.FC<Props> = ({ className, isEditing }) => {

    const params = useParams()
    const navigate = useNavigate()

    const { user } = useAuthStore()
    const { events } = useGetUserEvents(user?.id)
    const { wishBySlug } = useGetWishBySlug(params?.userId, params?.slug)

    const { createWish } = useCreateWish()
    const { updateWish } = useUpdateWish(wishBySlug?.id ? wishBySlug.id : "")

    const [event, setEvent] = React.useState('');
    console.log(event)

    const [priority, setPriority] = React.useState<"LOW" | "MEDIUM" | "HIGH" | "DREAM">("LOW");
    const [emoji, setEmoji] = React.useState('🎁');
    const [isEventDisabled, setIsEventDisabled] = React.useState(false)


    const { register, handleSubmit, setValue } = useForm<WishSchema>({
        resolver: zodResolver(wishSchema)
    })

    React.useEffect(() => {
        if (!user) navigate(-1)

        if (isEditing) {
            wishBySlug?.priority && setPriority(wishBySlug.priority)
            wishBySlug?.emoji && setEmoji(wishBySlug.emoji)
            wishBySlug?.eventId && setEvent(wishBySlug.eventId)
            wishBySlug?.title && setValue("title", wishBySlug.title)
            wishBySlug?.link && setValue("link", wishBySlug.link)
            wishBySlug?.price && setValue("price", wishBySlug.price)
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
            eventId: isEventDisabled ? null : event
        }
        isEditing ? updateWish(fullData) : createWish(fullData)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-5'>
                <div className='flex items-center w-full gap-5'>
                    <EmojiChoose emoji={emoji} setEmoji={setEmoji} />
                    <Input {...register('title')} placeholder='Название' className='flex-1'></Input>
                </div>

                <SelectInput defaultValue={event} disabled={isEventDisabled} className='w-full' selectItems={events} setValue={setEvent} />
                <Label className=" hover:bg-accent/50 gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-[#C084FC] has-[[aria-checked=true]]:bg-[#FAF5FF]">
                    <Checkbox
                        id="eventDisableToggle"
                        className="data-[state=checked]:border-[#C084FC] data-[state=checked]:bg-white data-[state=checked]:text-white"
                        onClick={() => setIsEventDisabled(!isEventDisabled)}
                    />
                    <div className="grid gap-1.5 font-normal">
                        <p className="text-sm leading-none">
                            Без события
                        </p>
                    </div>
                </Label>
                <div className='flex gap-2 w-full '>
                    <Input {...register('link')} placeholder='Ссылка'></Input>
                    <Input {...register('price', { valueAsNumber: true })} placeholder='Цена' type='number'></Input>
                </div>

                <div className=''>
                    <span className='font-inter font-normal text-[#71717A] text-sm'>
                        Приоритет:
                    </span>
                    <RadioFormGroup radioGroupValues={priorities} setSelected={setPriority} selected={priority} className='mt-2.5' />
                </div>
                <CustomButton type='submit' className='w-fit' variant='purple'>Сохранить</CustomButton>
            </form>
        </>
    )
}
