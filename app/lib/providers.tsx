import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

interface Props {
    className?: string
    children: React.ReactNode
}

export const Providers: React.FC<Props> = ({ className, children }) => {

    const [client] = React.useState(
        new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false
                }
            }
        })
    )
    
    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}
