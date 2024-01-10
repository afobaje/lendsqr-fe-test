'use client'
import React, { createContext, useContext, useState } from 'react'

interface mySidebarProps {
    docked: boolean,
    setDocked: React.Dispatch<React.SetStateAction<boolean>>
}

export const MySidebarContextProvider = createContext<mySidebarProps | undefined>(undefined)

export default function SidebarContext({ children }: { children: React.ReactNode }) {
    let [docked, setDocked] = useState(false)
    return (
        <MySidebarContextProvider.Provider value={{ docked, setDocked }}>
            {children}
        </MySidebarContextProvider.Provider>
    )
}

export function useMyContext(){
    const context=useContext(MySidebarContextProvider)
    if (!context) {
        throw new Error('couldnt resolve')
        
    }
    return context
}