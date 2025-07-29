import React from 'react'
import { Link } from 'react-router'
import { CustomButton } from '~/components/custom-button'
import { Spinner } from '~/components/ui/spinner'
import { useProfile } from '~/hooks/useProfile'
import { PUBLIC_URL } from '~/lib/config/url.config'
import { useAuthStore } from '~/lib/store/authStore'
import { MobileSidebar } from '~/widgets/sidebar/mobile-sidebar'

interface Props {
  className?: string,

}

export const Header: React.FC<Props> = ({ className }) => {

  const { user } = useAuthStore()

  return (
    <header className='flex h-14 mb-5 items-center justify-between sticky top-0 z-50 bg-gray-100'>
      <Link to={PUBLIC_URL.home()} className='font-roboto font-black text-base'>
        ХОТЕЛКИ
      </Link>

      <CustomButton asChild variant='purpleOutline'>
        <Link to={!user ? PUBLIC_URL.auth() : PUBLIC_URL.profile(user.id)}>{!user ? "Войти" : "Профиль"}</Link>
      </CustomButton>

      <MobileSidebar />

    </header>
  )
}
