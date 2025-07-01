import React from 'react'
import { Container } from '~/components/shared/Container'
import { CustomButton } from '~/components/shared/CustomButton'
import { cn } from '~/lib/utils'
import { Header } from '~/widgets/Header'

interface Props {
    className?: string
}

export const Welcome: React.FC<Props> = ({ className }) => {
    return (
        <Container>
            <Header/>
            <div className={cn('flex flex-col')}>
                <div className='flex flex-wrap items-center justify-between gap-6'>
                    <div className='w-[588px] flex flex-col gap-6'>
                        <span className='font-bold text-6xl'>Создайте вишлист легко</span>
                        <p className='font-normal text-xl'>Хотите поделиться своими желаниями с друзьями и близкими? Наш сервис поможет вам быстро создать и управлять вашим персональным вишлистом.</p>
                        <CustomButton variant='purple'>Создать вишлист</CustomButton>
                    </div>
                    {/* <div className='bg-[#C084FC] aspect-video h-[306px] rounded-[20px]'></div> */}
                </div>
            </div>
        </Container>

    )
}
