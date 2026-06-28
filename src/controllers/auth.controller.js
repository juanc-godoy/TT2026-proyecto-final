import {generateToken} from "../utils/token.generator.js"

const validUser={
    id: 1,
    email: "superSafe@email.com",
    pass: "superSafePass"
}

export const login= (req,res)=>{
    const {email, password}= req.body
    if (!email || !password){
        res.status(400).json({message: "Faltan datos"})
    }
    if (email!==validUser.email || password!==validUser.pass){
        return res.status(401).json({message: "Credenciales inválidas"})
    }
    const token=generateToken(validUser)
    res.status(200).json({
        message:"Bienvenido",
        token
    })
}