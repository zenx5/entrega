import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

const prisma = new PrismaClient();

export const getAllAuthors = async (req:Request, res:Response) => {
    const authors = await prisma.author.findMany()
    prisma.$disconnect()
    res.json(authors || [])
}

export const getAuthorById = async (req:Request, res:Response) => {
    const { id } = req.params
    const author = await prisma.author.findUnique({
        where: {
            id: Number(id)
        }
    })
    prisma.$disconnect()
    res.json(author || {})
}

export const createAuthor = async (req:Request, res:Response) => {
    const { name } = req.body
    const author = await prisma.author.create({
        data: {
            name
        }
    })
    prisma.$disconnect()
    res.json(author || {})
}

export const updateAuthor = async (req:Request, res:Response) => {
    const { id } = req.params
    const { name } = req.body
    const author = await prisma.author.update({
        where: {
            id: Number(id)
        },
        data: {
            name
        }
    })
    prisma.$disconnect()
    res.json(author || {})
}

export const deleteAuthor = async (req:Request, res:Response) => {
    const { id } = req.params
    const author = await prisma.author.delete({
        where: {
            id: Number(id)
        }
    })
    prisma.$disconnect()
    res.json(author || {})
}