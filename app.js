import express from "express";
import mongoose from "mongoose";
import routerProduct from "./router/product"
const app = express();
app.use(express.json())

app.use("/api",routerProduct)
mongoose.connect('mongodb://127.0.0.1:27017/ass')

export const viteNodeApp=app





