import React from 'react'
import { CustomButton } from '~/components/shared/CustomButton'
import { Spinner } from '~/components/ui/spinner'
import { useProfile } from '~/hooks/useProfile'
import { useAuthStore } from '~/lib/store/authStore'

interface Props {
  className?: string,

}

export const Header: React.FC<Props> = ({ className }: Props) => {

  // const { user } = useAuthStore()

  const { user } = useProfile()

  return (
    <header className='flex h-14 mb-5 items-center justify-between sticky top-0 z-50 bg-gray-100'>
      <a href='/' className='font-roboto font-black text-base'>
        ХОТЕЛКИ
      </a>


      <CustomButton asChild variant='purpleOutline'>
        <a href={user ? `/profile/${user?.id}` : "/auth"}>{user ? "Профиль" : "Войти"}</a>
      </CustomButton>
    </header>
  )
}
