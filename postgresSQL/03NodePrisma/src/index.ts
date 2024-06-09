import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertUser = async (username: string, password: string, firstName: string, lastName: string, email: string )=>{
    const user = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName,
            email
        }
    })
    console.log(user)
}

insertUser("Saugat", "password", "Saugat", "Karki", "saugat@gmail.com");

const getUserByEmail = async (email: string)=>{
    const user = await prisma.user.findUnique({
        where: {
           email: email
        }
    })
    if(!user){
        console.log("No user found")
        return
    }
    console.log(user)
}

// getUserByEmail("saugat@gmail.com")

const getAllUsers = async ()=>{
    const users = await prisma.user.findMany()
    console.log(users)
}

// getAllUsers()

const updateOneUserByEmail = async (email: string, data: {username?: string, password?: string, firstName?: string, lastName?: string, email?: string})=>{
    const user = await prisma.user.update({
        where: {
            email: email
        },
        data
    })
    console.log(user)
}

// updateOneUserByEmail("saugat@gmail.com", {firstName: "saugat", username: "hojo"})

const deleteUserByEmail = async (email: string)=>{
    const user = await prisma.user.delete({
        where: {
            email: email
        }
    })
    console.log(user)
}

// deleteUserByEmail("saugat@gmail.com")