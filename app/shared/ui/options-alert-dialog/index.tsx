
import React from 'react'
import { cn } from "~/shared/lib/utils";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../shadcn/alert-dialog';

interface Props {
  className?: string,
  children?: React.ReactNode,
  onConfirm?: () => void,
  title: string,
  description?: string,
  action: string
}

export const OptionsAlertDialog: React.FC<Props> = ({ className, children, onConfirm, title, description, action }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">Отмена</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm} className={cn("bg-red-500 hover:bg-red-600 cursor-pointer", className)}>
            {action}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

// Вместе с удалением события удалятся и связанные хотелки. Это действие не может быть отменено.



