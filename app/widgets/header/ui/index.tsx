import React from 'react'
import { CustomButton } from '~/components/custom-button'
import { Spinner } from '~/components/ui/spinner'
import { useProfile } from '~/hooks/useProfile'
import { useAuthStore } from '~/lib/store/authStore'

interface Props {
  className?: string,

}

export const Header: React.FC<Props> = ({ className }: Props) => {

  const { user } = useAuthStore()

  // const { user } = useProfile()

  // console.log(user)

  return (
    <header className='flex h-14 mb-5 items-center justify-between sticky top-0 z-50 bg-gray-100'>
      <a href='/' className='font-roboto font-black text-base'>
        ХОТЕЛКИ
      </a>


      <CustomButton asChild variant='purpleOutline'>
        <a href={!user ? "/auth" : `/profile/${user?.id}` }>{!user ? "Войти" : "Профиль"}</a>
      </CustomButton>
    </header>
  )
}
