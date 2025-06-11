import { Copy, EllipsisVertical } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '~/components/ui/card'
import { cn } from '~/lib/utils'
import { EmojiIcon } from '../../Emoji/EmojiIcon'
import { CopyToClipboard } from '../../CopyToClipboard'

interface Props {
    className?: string,
    title: string,
    price: number,
    link: string,
    emoji: string
}
//sm:w-[44%]
export const WishItem: React.FC<Props> = ({ className, title, emoji, price, link }) => {
    return (
        <div className='w-full sm:w-[275px] sm:h-[176px] bg-[#FAF5FF] rounded-2xl p-3 gap-4 flex flex-col ' >
            <div className='w-full flex justify-between '>
                <EmojiIcon variant='wish' emoji={emoji}/>
                <div className='flex flex-1 justify-between h-10 ml-6 '>
                    <div className='flex flex-col'>
                        <span className='font-inter text-[14px] font-bold'>{title} </span>
                        <span className='font-inter font-normal text-xs'>{price} Р</span>
                    </div>
                    <EllipsisVertical className='w-8 h-8' />
                </div>
            </div>
            <div className='rounded-xl bg-white h-9 flex items-center justify-between py-1.5 px-3'>
                <a href={link} className='font-space-mono text-sm text-center whitespace-nowrap overflow-hidden text-ellipsis hover:text-[#C084FC]'>
                    {link}
                </a>
                <CopyToClipboard textToCopy='https://issuewear.com/tproduct/708877549-916886891851-cloudy-sweatshirt'/>
                {/* <Copy className='w-10 ml-2 hover:text-[#C084FC]' /> */}
            </div>
            <a href="/events/den_rozhdenya" className='bg-white h-6 rounded-full text-xs font-normal font-inter py-1 px-2 flex items-center w-fit hover:bg-gray-100'>День рождения</a>
        </div>
    )
}
