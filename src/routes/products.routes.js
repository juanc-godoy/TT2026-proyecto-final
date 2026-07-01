import { Router } from "express";
import { getAllProducts,getProductById,createProduct,deleteProduct, updateProduct } from "../controllers/products.controller.js";
import { auth } from "../middlewares/auth.middlewares.js"

const router= Router()

//GET - traer todos los productos
router.get("/", getAllProducts)
//GET - traer producto por ID
router.get("/:id", getProductById)
//POST - crear producto
router.post("/create", auth, createProduct)
//DELETE - eliminar producto
router.delete("/:id", auth, deleteProduct)
//PUT - modificar un producto
router.put("/:id",auth, updateProduct)

export default router