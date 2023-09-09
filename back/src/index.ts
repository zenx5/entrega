import { config } from "dotenv";
import Express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

import bookRouter from "./routers/bookRouter.ts";
import authorRouter from "./routers/authorRouter.ts";

config();

const App = Express();

App.use(cors());

App.use('/authors', authorRouter);
App.use('/books', bookRouter);

App.get("/connect/:authorId/:bookId", (req, res) => {
    // const { authorId, bookId } = req.params;
    // const prisma = new PrismaClient();
    // prisma.author.update({
    //     where: {
    //         id: Number(authorId)
    //     },
    //     data: {
    //         books: {
    //             connect: {
    //                 id: Number(bookId)
    //             }
    //         }
    //     }
    // })
    // prisma.$disconnect()
});

App.get("/", (req, res) => {
    res.send("Hello World!");
});


App.listen(3000, () => {
    console.log("Server running!");
});