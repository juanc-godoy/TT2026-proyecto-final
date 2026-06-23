/*
import * as productModel from "../models/products.model.js"
const products= [
    {id:1, nombre: "producto 1", price: 1000},
    {id:2, nombre: 'producto 2', price: 2000},
    {id:3, nombre: "producto 3", price: 3000},
    {id:4, nombre: "producto 4", price: 4000},
    {id:5, nombre: 'producto 5', price: 5000},
    {id:6, nombre: "producto 6", price: 6000},
    {id:7, nombre: "producto 7", price: 7000},
    {id:8, nombre: 'producto 8', price: 8000},
    {id:9, nombre: "producto 9", price: 9000},
    {id:10, nombre: "producto 10", price: 10000}
]
const notFound="Recurso no encontrado"
 
export const getAllProducts= ()=>{
    return products
}

export const getProductById= (id)=>{
    return productModel.getProductById(id)
}

export const createProduct= (productData)=>{
    const newProduct={
        id: products.length+1,
        name: productData.name,
        price: productData.price
    }
    products.push(newProduct)
    return newProduct
} 

export const deleteProduct= (id)=>{
    const deletedProduct= products.find(product=>product.id==id)
    const productIndex= products.findIndex(product=>product.id==id)
    products.splice(productIndex,1)
    return deletedProduct
}
*/