import { Router } from "express";
import { createBook, deleteBook, getAllBooks, getBookById, updateBook } from "../controllers/BookController.ts";

const bookRouter = Router();

bookRouter.get("/", getAllBooks )
bookRouter.get("/:id", getBookById )
bookRouter.put("/:id", updateBook )
bookRouter.post("/", createBook )
bookRouter.delete("/:id", deleteBook )

export default bookRouter;