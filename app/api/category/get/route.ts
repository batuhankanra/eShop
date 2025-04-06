import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"


export async function GET() {
    try{
        const category=await prisma.category.findMany({
            include:{
                user:{
                    select:{
                        name:true,
                        email:true
                    }
                }
            }
        })
        return NextResponse.json(category,{status:200})

    }catch (err){
        console.log(err)
        return NextResponse.json({msg:'server is broken'},{status:404})
    }
}