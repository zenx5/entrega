import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";
import { get } from "http";

const prisma = new PrismaClient();

export const getAllBooks = async (req:Request, res:Response) => {
    try{
        const books = await prisma.book.findMany()
        prisma.$disconnect()
        res.json(books || [])
    }catch(error){
        res.send([])
    }
}

export const getBookById = async (req:Request, res:Response) => {
    const { id } = req.params
    try{
        const book = await prisma.book.findUnique({
            where: {
                id: Number(id)
            }
        })
        prisma.$disconnect()
        res.json(book || {})
    } catch( error ) {
        res.send({})
    }
}

export const createBook = async (req:Request, res:Response) => {
    const { title, chapters, pages, authors } = req.body
    const book = await prisma.book.create({
        data: {
            title,
            chapters,
            pages,
            Authors: {
                create: authors
            }
        }
    })
    prisma.$disconnect()
    res.json(book || {})
}

export const updateBook = async (req:Request, res:Response) => {
    const { id } = req.params
    const { title, chapters, pages, authors } = req.body
    const book = await prisma.book.update({
        where: {
            id: Number(id)
        },
        data: {
            title,
            chapters,
            pages,
            Authors: {
                create: authors
            }
        }
    })
    prisma.$disconnect()
    res.json(book || {})
}

export const deleteBook = async (req:Request, res:Response) => {
    const { id } = req.params
    const book = await prisma.book.delete({
        where: {
            id: Number(id)
        }
    })
    prisma.$disconnect()
    res.json(book || {})
}
