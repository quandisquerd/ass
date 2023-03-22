import Product from "../model/product"

import Joi from "joi"

const Joivalidate= Joi.object({
    name:Joi.string().required(),
    price: Joi.number().required(),
    desc: Joi.string().required(),
    status: Joi.boolean().required(),
    quanty: Joi.number().required()
})

export const getAll = async (req, res, next) => {
    try {
        const data = await Product.find()
        return res.status(200).json({ message: "Lay thanh cong", data })
    } catch (error) {
        return res.status(400).json({ message: "loi api" })
    }
}
export const getOne = async (req, res, next) => {
    try {
        const data = await Product.findById(req.params.id)
        return res.status(200).json({ message: "Lay thanh cong", data })
    } catch (error) {
        return res.status(400).json({ message: "loi api" })
    }
}
export const remove = async (req, res, next) => {
    try {
        const data = await Product.findByIdAndDelete(req.params.id)
        return res.status(200).json({ message: "xoa thanh cong", data })
    } catch (error) {
        return res.status(400).json({ message: "loi api" })
    }
}

export const create = async (req, res, next) => {
    try {
        const {error}= Joivalidate.validate(req.body)
        if(error) {
            const errors = error.details[0]
            return res.status(201).json({ message:errors.message})
        }
        const data = await Product.create(req.body)
        return res.status(200).json({ message: "them thanh cong", data })
    } catch (error) {
        return res.status(400).json({ message: "loi api" })
    }
}
export const update = async (req, res, next) => {
    try {
        const { error } = Joivalidate.validate(req.body)
        if (error) {
            const errors = error.details[0]
            return res.status(201).json({ message: errors.message })
        }
        const data = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).json({ message: "update thanh cong", data })
    } catch (error) {
        return res.status(400).json({ message: "loi api" })
    }
}