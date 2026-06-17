import * as authService from "../services/auth.service.js"

export const login= (req,res)=>{
    const {user, pass}= req.body
    if (!user || !pass){
        res.status(400).json({message: "Faltan datos"})
    }
    const login= authService.checkLogin({user,pass})
    if (!login){
        res.status(401).json({message: "No Autorizado"})
    }
    res.status(200).json({message:`Bienvenido ${user}`})
}