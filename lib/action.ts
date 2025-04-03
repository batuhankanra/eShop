import { authOption } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { prisma } from "./prisma";


 export async function GetCurrentUser() {
    const user=await getServerSession(authOption)
    return user
}

export async function GetUser() {
    const session=await GetCurrentUser()
    if(!session?.user?.email){
        return null
    }
    const user=await prisma.user.findUnique({
        where:{
            email:session.user.email
        }
    })
    if(!user){
        return null
    }

    return {
        id:user.id,
        name:user?.name,
        email:user?.email,

    }
}
