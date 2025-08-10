import React from 'react'
import { Form } from '~/shared/ui/form'

interface Props {
  className?: string
}

export const EventEditPage: React.FC<Props> = ({ className }) => {
  return (
    <Form formType='eventEdit' formTitle={'Редактирование события'} isEditing />
  )
}
