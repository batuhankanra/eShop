"use client"

import { user } from "@/typeScript"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"



const authContext=createContext<user | null |undefined >(undefined)


export const AuthProvider=({user,children}:{user:user | null,children:ReactNode})=>{
    const [currentUser,setCurrentUser]=useState<user | null >(null)
    useEffect(()=>{
        setCurrentUser(user)
    },[])

    return(
        <authContext.Provider value={currentUser}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth=()=>{
    return useContext(authContext)
}

