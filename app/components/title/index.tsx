import React from 'react'

interface Props {
    className?: string,
    text: string | undefined
}

export const Title: React.FC<Props> = ({ className, text }) => {
    return (
        <span className='font-open-sans font-bold text-xl mr-4'>{text}</span>

    )
}
