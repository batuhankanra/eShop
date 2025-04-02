import NextAuth,{AuthOptions} from "next-auth";
import {prisma} from '@/lib/prisma'
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from 'bcrypt'
import Credentials from "next-auth/providers/credentials";


export const authOption:AuthOptions={
    adapter:PrismaAdapter(prisma),
    providers:[
        Credentials({
            credentials:{
                email:{},
                password:{}
            },
            authorize:async (credential)=>{
                let user=null
                if(!credential?.email || !credential.password){
                    throw new Error('Email yada parola boş olamaz')
                }
                user =await prisma.user.findUnique({
                    where:{
                        email:credential.email
                    }
                })
                if(!user){
                    throw new Error('Email hatalı')
                }
                const existsPassword=await bcrypt.compare(credential.password,user.hashPassword)
                if(!existsPassword){
                    throw new Error('Parola hatalı')
                }
                return user
            }
        })
    ],
    session:{
        strategy:'jwt'
    },
    callbacks:{
        async jwt({token,user}){
            if(user){
                token.id=user.id
            }
            return token
        }
    },
    debug:process.env.NODE_ENV==='development',
    secret:"batu"
}

export default NextAuth(authOption)
