import React from 'react'
import { Form } from '~/components/form'

interface Props {
    className?: string
}

export const WishCreatePage: React.FC<Props> = ({ className }) => {
    return (
        <Form formTitle={'Создание хотелки'} formType={'wishCreate'}/>
    )
}
