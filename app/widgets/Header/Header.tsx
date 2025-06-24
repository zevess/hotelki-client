import React from 'react'
import { CustomButton } from '~/components/shared/CustomButton'
import { Spinner } from '~/components/ui/spinner'

import { useAuthStore } from '~/lib/store/authStore'


interface Props {
  className?: string,
  
}

export const Header: React.FC<Props> = ({ className }: Props) => {

  const { user, isAuthorized } = useAuthStore()

  return (
    <header className='flex h-14 mb-5 items-center justify-between sticky top-0 z-50 bg-gray-100'>
      <a href='/' className='font-roboto font-black text-base'>
        ХОТЕЛКИ
      </a>

      <CustomButton asChild variant='purpleOutline'>
        <a href={isAuthorized ? `/profile/${user?.id}` : "/auth"}>{isAuthorized ? "Профиль" : "Войти"}</a>
      </CustomButton>
    </header>
  )
}
