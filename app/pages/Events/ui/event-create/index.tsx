import React from 'react'
import { Form } from '~/components/form'
import { cn } from '~/lib/utils'

interface Props {
    className?: string
}

export const EventCreatePage: React.FC<Props> = ({ className }) => {
    return (
        <Form isEditing={false} formType='eventCreate' formTitle={'Создание события'} />
    )
}
