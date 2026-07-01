import db from "../config/firebase.js";
import { collection, getDocs, getDoc, addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore";

const productsCollection= collection(db, 'products')

export const getAllProducts= async()=>{
    const snapshot= await getDocs(productsCollection)
    const products=[]
    snapshot.forEach((doc)=>{
        products.push({
            id: doc.id,
            ...doc.data()
        })
    })   
    return products
}

export const getProductById= async (id)=>{
    const productRef= doc(productsCollection,id)
    const snapshot= await getDoc(productRef)
    if (!snapshot.exists()){
        return null
    }
    return {
        id: snapshot.id,
        ...snapshot.data()
    }
}

export const createProduct= async (productData)=>{
    
    const productRef= await addDoc(productsCollection,productData)
    return {
        id: productRef.id,
        ...productData
    }
}

export const deleteProduct= async(id)=>{
    const productRef= doc(productsCollection,id)
    const snapshot= await getDoc(productRef)
    if (!snapshot.exists()){
        return null
    }
    const deletedProduct={
        id: snapshot.id,
        ...snapshot.data()
    }
    await deleteDoc(productRef)
    return deletedProduct
}

export const updateProduct= async (id,product)=>{
    const productRef= doc(productsCollection,id)
    const snapshot= await getDoc(productRef)
    if (!snapshot.exists()){
        return null
    }
    await updateDoc(productRef, product)
    return {
        id: productRef.id,
        ...product
    }
}