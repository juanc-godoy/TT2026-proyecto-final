import * as productsModel from "../models/products.model.js"

const notFound="Recurso no encontrado"
const missing="Todos los campos son obligatorios"

export const getAllProducts= async (req,res)=>{
    const products= await productsModel.getAllProducts()
    if (!products){
        res.status(500).json({message: "Fallo al comunicar con el servidor"})
    }
    res.status(200).json(products)
}

export const getProductById= async (req,res)=>{
    const id= req.params.id
    const findedProduct= await productsModel.getProductById(id)
    if  (!findedProduct){
        return res.status(404).json({message: notFound})
    }
    res.status(200).json({producto: findedProduct})
    console.log(findedProduct)
}

export const createProduct= async (req,res)=>{
    const {name, price, origin, stock}= req.body
    if (!name || !price || !origin || !stock){
        return res.status(400).json({message: missing})
    }
    const createdProduct= await productsModel.createProduct({name, price, origin, stock})
    res.status(201).json({
        message: "Creado exitosamente",
        creado: createdProduct
    })
}

export const deleteProduct= async (req,res)=>{
    const id= req.params.id
    const deletedProduct= await productsModel.deleteProduct(id)
    if (!deletedProduct){
        return res.status(404).json({message: notFound})
    }
    res.status(200).json({message: "Eliminado exitosamente",
        eliminado: deletedProduct})
}