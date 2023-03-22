import express from "express";
import { create, getAll, getOne, remove, update } from "../controler/product";


const router = express.Router();
router.post('/add', create)
router.get('/list',getAll)
router.get('/list/:id', getOne)
router.delete('/list/:id', remove)
router.patch('/list/edit/:id', update)



export default router