"use client"

import { SessionProvider } from 'next-auth/react'
import React from 'react'
import CartContextProvider from './Context/CartContext'

const Providers = ({children}: {children : React.ReactNode}) => {
  return (
    <div>
        <SessionProvider>
          <CartContextProvider>
            {children}
          </CartContextProvider>
        </SessionProvider>
    </div>
  )
}

export default Providers