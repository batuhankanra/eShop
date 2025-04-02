'use server'
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export  async function POST(req:Request) {
    try{
        const body=await req.json()
        const {name,email,password}=body
        if(!email || !password || !name){
            return NextResponse.json({msg:'Lütfen bos alanları doldurun'},{status:401})
        }
        if(!emailRegex.test(email)){
            return NextResponse.json({msg:'email formatı hatali',},{status:400})
        }
        if(!passwordRegex.test(password)){
            return NextResponse.json({msg:'parola hatalı',},{status:400})
        }

        const existsUser=await prisma.user.findUnique({
            where:{
                email
            }
        })
        if(existsUser){
            return NextResponse.json({msg:'Boyle bir Email var',},{status:400})
        }
        const hashedPassword= bcrypt.hashSync(password,10)
        
        const user=await prisma.user.create({
            data:{
                email,
                name,
                hashPassword:hashedPassword
            }
        })
        return NextResponse.json({msg:'Kayit olusturuldu',user},{status:201})

        
    
    }catch (err){
        console.log(err)
        return NextResponse.json({msg:'Fatal Error '},{status:500})
    }
}