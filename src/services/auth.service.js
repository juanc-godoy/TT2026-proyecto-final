const validLogin={
    id= 1,
    user: "admin",
    pass: "superSafePass"
}

export const checkLogin= (credentials)=>{
    if (credentials.user==validLogin.user && credentials.pass ==validLogin.pass){
        return true
    }
    else {
        return false
    }
}