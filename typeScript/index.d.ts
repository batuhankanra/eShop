import { ReactNode } from "react"


type FormType="sign-in" | "sign-up " |  'category'
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

interface DataProps{
    id:string
    name:string
    user:{
        name:string
        email:string
    }
    createdAt:Date
    updatedAt:Date
}