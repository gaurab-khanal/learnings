import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertUser = async (username: string, password: string, firstName: string, lastName: string, email: string) => {
    const user = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName,
            email
        },
        select: {
            id: true,
            username: true,
            password: false,
            firstName: true,
            lastName: true,
            email: true
        }
    })
    console.log(user)
}

// insertUser("Saugat", "password", "Saugat", "Karki", "saugat@gmail.com");

const getUserByEmail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    if (!user) {
        console.log("No user found")
        return
    }
    console.log(user)
}

// getUserByEmail("saugat@gmail.com")

const getAllUsers = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
            email: true,
            password: false
        }
    })
    console.log(users)
}

// getAllUsers()

const updateOneUserByEmail = async (email: string, data: { username?: string, password?: string, firstName?: string, lastName?: string, email?: string }) => {
    const user = await prisma.user.update({
        where: {
            email: email
        },
        data
    })
    console.log(user)
}

// updateOneUserByEmail("saugat@gmail.com", {firstName: "saugat", username: "hojo"})

const deleteUserByEmail = async (email: string) => {
    const user = await prisma.user.delete({
        where: {
            email: email
        }
    })
    console.log(user)
}

// deleteUserByEmail("saugat@gmail.com")

const insertTodo = async (title: string, completed: boolean, description: string, userId: number) => {
    try {
        const res = await prisma.todo.create({
            data: {
                title,
                completed,
                description,
                userId
            }
        })
        console.log(res)

    } catch (error) {
        console.log(error)
    }
}

// insertTodo("Learn Prisma", false, "Learn Prisma with Node.js", 1)

const getTodos = async (userId: number) => {
    const todos = await prisma.todo.findMany({
        where: {
            userId: userId
        }
    })
    console.log(todos)
}

// getTodos(1)

const getUserWithTodo = async (userId: number) => {
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        },
        include: {
            Todo: true
        }
    })
    console.log(user)
}

getUserWithTodo(1)