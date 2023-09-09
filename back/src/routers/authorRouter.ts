import { Router } from "express";
import { createAuthor, deleteAuthor, getAllAuthors, getAuthorById, updateAuthor } from "../controllers/AuthorController.ts";

const authorRouter = Router();

authorRouter.get("/", getAllAuthors )
authorRouter.get("/:id", getAuthorById )
authorRouter.put("/:id", updateAuthor )
authorRouter.post("/", createAuthor )
authorRouter.delete("/:id", deleteAuthor )

export default authorRouter;