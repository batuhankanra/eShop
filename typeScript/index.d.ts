import { ReactNode } from "react"


type FormType="sign-in" | "sign-up"
type  logoProps={
    size:'sm' | 'md' | 'lg'
    className:string
    link:string
}


interface user{
    id?:string  
    name?:string 
    email?:string 
} 