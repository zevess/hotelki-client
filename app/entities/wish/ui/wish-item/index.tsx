import React from 'react'
import { EmojiIcon } from '~/shared/ui/emoji-icon'
import { CopyToClipboard } from '~/shared/ui/copy-to-clipboard'
import { useAuthStore } from '~/shared/store/authStore'
import { OptionsDropdown } from '~/shared/ui/options-dropdown'
import { Link } from 'react-router'
import { PUBLIC_URL } from '~/shared/config/url.config'
import type { IWishResponse } from '../../model/wish.types'

interface Props {
    className?: string,
    wishData: IWishResponse,
    eventTitle?: string,
    eventSlug?: string,
}

export const WishItem: React.FC<Props> = ({ className, wishData, eventSlug, eventTitle }) => {

    const { user } = useAuthStore()

    return (
        <div className='w-full sm:w-[275px] sm:h-[176px] bg-[#FAF5FF] rounded-2xl p-3 gap-4 flex flex-col' >
            <div className='w-full flex justify-between '>
                <EmojiIcon variant='wish' emoji={wishData.emoji} />
                <div className='flex flex-1 justify-between h-10 ml-6 '>
                    <div className='flex flex-col'>
                        <span className='font-inter text-[14px] font-bold'>{wishData.title} </span>
                        <span className='font-inter font-normal text-xs'>{wishData.price} Р</span>
                    </div>
                    {user && <OptionsDropdown className='hover:bg-white' type='WISH' itemId={wishData.id} editPageLink={`/wishes/${wishData.userId}/${wishData.slug}`} />}
                </div>
            </div>
            <div className='h-9'>
                {wishData.link && <div className='bg-white flex items-center justify-between py-1.5 px-3 rounded-xl'>
                    <Link to={wishData.link} className='font-space-mono text-sm text-center whitespace-nowrap overflow-hidden text-ellipsis hover:text-[#C084FC]'>
                        {wishData.link}
                    </Link>
                    <CopyToClipboard textToCopy={wishData.link} />
                </div>}

            </div>
            {eventSlug && <a href={PUBLIC_URL.eventSlug(wishData.userId, eventSlug)} className='bg-white h-6 rounded-full text-xs font-normal font-inter py-1 px-2 flex items-center w-fit transition duration-200 hover:bg-gray-100'>{eventTitle}</a>}
        </div>
    )
}
