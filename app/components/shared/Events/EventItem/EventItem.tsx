import { EllipsisVertical } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '~/components/ui/card'

interface Props {
    className?: string
}

export const EventItem: React.FC<Props> = ({ className }) => {
    return (
        <Card className='w-full sm:w-[261px] sm:h-[284px] flex flex-col justify-between p-6'>
            <CardHeader className='flex justify-between items-center h-10 p-0 m-0'>
                <div className='flex flex-col'>
                    <span className='font-inter text-[14px] font-bold'>🎉 День рождения</span>
                    <span className='font-inter font-normal text-xs'>4 хотелки</span>
                </div>
                <EllipsisVertical />
            </CardHeader>
            <CardContent className='flex flex-wrap justify-between p-0 sm:gap-3'>
                {/* <span className='font-inter text-base font-normal text-center mx-auto'>Тут еще нет хотелок🙁</span> */}
                <div className='h-[60px] w-[60px] bg-[#FAF5FF] rounded-2xl flex justify-center items-center'>
                    🎁
                </div>
                <div className='h-[60px] w-[60px] bg-[#FAF5FF] rounded-2xl flex justify-center items-center'>
                    🎁
                </div>
                <div className='h-[60px] w-[60px] bg-[#FAF5FF] rounded-2xl flex justify-center items-center'>
                    🎁
                </div>
                <div className='h-[60px] w-[60px] bg-[#FAF5FF] rounded-2xl flex justify-center items-center'>
                    🎁
                </div>
                
            </CardContent>
            <CardFooter className='flex justify-between items-center p-0 m-0'>
                <span className='font-inter font-normal text-xs'>08.08.2025</span>
                <div className='h-6 w-[88px] bg-[#FAF5FF] rounded-full flex items-center justify-center px-1'>
                    <span className='font-inter font-normal text-xs'>Через 4 дня</span>

                </div>
            </CardFooter>
        </Card>
    )
}
