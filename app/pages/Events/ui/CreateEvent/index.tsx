import React from 'react'
import { Form } from '~/components/shared/Form'
import { cn } from '~/lib/utils'

interface Props {
    className?: string
}

export const CreateEventPage: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('h-full')}>
            <Form formTitle={'Создание события'}/>
        </div>
    )
}
