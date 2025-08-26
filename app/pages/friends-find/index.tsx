import React from 'react'
import { useSearchParams } from 'react-router'
import { FriendCard } from '~/entities/friends/ui/friend-card'
import { useFindUser } from '~/entities/user/api/useFindUser'
import { Input } from '~/shared/ui/shadcn/input'
import { Spinner } from '~/shared/ui/spinner'
import { Title } from '~/shared/ui/title'

interface Props {
    className?: string,

}

export const FriendsFindPage: React.FC<Props> = ({ className }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [inputValue, setInputValue] = React.useState('')
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

    const currentSearch = searchParams.get('search') || ''

    React.useEffect(() => {
        setInputValue(currentSearch)
    }, [currentSearch])


    const { users, isLoading } = useFindUser(currentSearch)

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)


        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            if (value.trim().length > 0) {
                setSearchParams({ search: value })
            } else {
                setSearchParams({})
            }
        }, 1500)
    }

    return (
        <div className={'flex flex-col w-full gap-3 '}>
            <Title text={`Поиск друзей`} />
            <div className='p-3'>
                <Input
                    onChange={handleSearch}
                    value={inputValue}
                    placeholder="Введите имя друга"
                />
            </div>


            {isLoading && <Spinner />}

            {(users?.length == 0 && currentSearch !== '') && <span className='font-inter text-xl font-semibold text-center mx-auto mt-6'>Ничего не найдено, измените запрос🙁</span>}

            <div className='flex flex-wrap justify-between gap-4'>
                {users && users.map((user, index) => (
                    <FriendCard userData={user} key={index} />
                ))}
            </div>
        </div>
    )
}