"use client"
import { ApolloClient, ApolloProvider } from '@apollo/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { FC } from 'react'
import createApolloClient from './apollo-client'

interface Props {
    children?: React.ReactNode
}
const Provider: FC<Props> = (props) => {
    const { children } = props
    const queryClient = new QueryClient()
    const apolloClient = createApolloClient()


    return (
        <ApolloProvider client={apolloClient}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ApolloProvider>

    )
}

export default Provider