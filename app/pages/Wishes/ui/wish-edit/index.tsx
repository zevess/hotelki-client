import React from 'react'
import { Form } from '~/components/form'

interface Props {
    className?: string
}

export const WishEditPage: React.FC<Props> = ({ className }) => {
    return (
        <Form isEditing={true} formTitle={'Редактирование хотелки'} formType={'wishEdit'} />
    )
}
