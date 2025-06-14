import React from 'react'
import { Form } from '~/components/shared/Form'
import { cn } from '~/lib/utils'

interface Props {
    className?: string
}

export const EventCreatePage: React.FC<Props> = ({ className }) => {
    return (
        <Form formType='eventCreate' formTitle={'Создание события'} />
    )
}
