import React from 'react'
import { CustomButton } from '~/components/shared/CustomButton/Button'

interface Props {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className='flex h-14 items-center justify-between sticky top-0 z-50 bg-gray-100'>
        <a href='/' className='font-roboto font-black text-base'>
            ХОТЕЛКИ
        </a>
        <CustomButton variant='purpleOutline'>
          Профиль
        </CustomButton>
    </header>
  )
}
