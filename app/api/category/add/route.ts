import { GetUser } from "@/lib/action"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"


export async function POST(req:Request) {
    try{
        const {name} =await req.json()
        

        const user=await GetUser()
        if(!user){
            return NextResponse.json({msg:'insufficient authority d'},{status:400})
        }
        if(!name){
            return NextResponse.json({msg:'Boş gönderdin'},{status:400})
        }
        const existsUser=await prisma.user.findUnique({
            where:{
                id:user.id
            }
        })
        if(existsUser?.role!=='ADMIN'){
            return NextResponse.json({msg:'insufficient authority s'},{status:400})
        }
        await prisma.category.create({
            data:{
                name:name,
                userid:existsUser.id
            }
        })
        
        return NextResponse.json({msg:'Category olusturuldu'},{status:201})


    }catch (err){
        return NextResponse.json({msg:'Ayni gonderdin'},{status:404})
        
    }
}