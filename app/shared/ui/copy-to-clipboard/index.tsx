import { Check, Copy } from 'lucide-react'
import React from 'react'

interface Props {
    className?: string,
    textToCopy: string
}

export const CopyToClipboard: React.FC<Props> = ({ className, textToCopy }) => {

    const [isCopied, setIsCopied] = React.useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(textToCopy);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000)
    }

    if (isCopied) return (<Check size={'25'} className='transition duration-200 hover:text-[#C084FC]' />)

    else return (
        <Copy onClick={handleCopy} size={'25'} className='transition duration-200 hover:text-[#C084FC] cursor-pointer' />
    )
}
