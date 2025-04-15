import Header from '@/components/Header'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <header className='w-full justify-center items-center'>
            <Header />
            {children}
        </header>
    )
}

export default layout