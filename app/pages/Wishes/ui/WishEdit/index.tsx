import React from 'react'
import { Form } from '~/components/shared/Form'

interface Props {
    className?: string
}

export const WishEditPage: React.FC<Props> = ({ className }) => {
    return (
        <Form formTitle={'Редактирование хотелки'} formType={'wishEdit'} />
    )
}
