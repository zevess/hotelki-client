import React from 'react'
import { Container } from '~/components/container'
import { CustomButton } from '~/components/custom-button'
import { useProfile } from '~/hooks/useProfile'
import { PUBLIC_URL } from '~/lib/config/url.config'
import { cn } from '~/lib/utils'
import { Header } from '~/widgets/header/ui'

interface Props {
    className?: string
}

export const Welcome: React.FC<Props> = ({ className }) => {

    const { user } = useProfile()

    return (
        <Container>
            <Header />
            <div className={cn('flex flex-col')}>
                <section className='flex flex-wrap justify-center gap-6 mb-10'>

                    <div className='w-[588px] flex flex-col flex-wrap gap-6'>
                        <span className='font-bold text-6xl'>Создайте <br /> вишлист легко</span>
                        <p className='font-normal text-xl my-6'>Хотите поделиться своими желаниями с друзьями и близкими? Наш сервис поможет вам быстро создать и управлять вашим персональным вишлистом.</p>
                        <CustomButton asChild variant='purple'>
                            <a href={user ? PUBLIC_URL.profile(user.id) : PUBLIC_URL.auth()}>
                                Создать вишлист
                            </a>
                        </CustomButton>
                    </div>

                    <div className='max-w-[588px] aspect-video'>
                        <img src="app/components/assets/welcome-bg.jpg" className='rounded-[20px] h-full' alt="" />
                    </div>
                </section>

                <section className='h-[300px] flex items-center'>
                    <div className='w-[588px] flex flex-col flex-wrap gap-6'>
                        <span className='font-bold text-6xl'>Как это работает?</span>
                        <p className='font-normal text-xl my-6'>Вы создаете профиль, создаете ваше событие к которому хотите подарок, а затем и сам подарок. Всё просто :)</p>
                    </div>

                </section>
            </div>
        </Container>

    )
}
