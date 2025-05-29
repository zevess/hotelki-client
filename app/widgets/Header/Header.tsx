import React from 'react'
import { CustomButton } from '~/components/shared/CustomButton/Button'

interface Props {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className='flex h-14 items-center justify-between'>
        <a href='/' className='font-roboto font-black text-base'>
            ХОТЕЛКИ
        </a>
        <CustomButton variant='purpleOutline'>
          Профиль
        </CustomButton>
    </header>
  )
}
