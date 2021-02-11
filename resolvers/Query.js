const actions = require('../actions/userActions')


const login  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
 console.log("la data en query es " , data)
 console.log("esto es variable", variable)
 return actions.login(variable)

}

const loginclientes  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
 console.log("la data en query es " , data)
 console.log("esto es variable", variable)
 return actions.loginclientes(variable)

}

const getTablaClientes =  (_ , data) =>{
    
    var cadena= data.data[0]
    var variable = cadena.split(",")

 console.log("la data en query es " , variable)
 return actions.getTablaClientes(variable)

}


const loginAdminGeneral  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
 console.log("la data en query es " , data)
 console.log("esto es variable", variable)
 return actions.loginAdminGeneral(variable)

}
const getTablaAdmin  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
//  console.log("la data en query es " , data)
 console.log("esto es variable", variable)
 return actions.getTablaAdmin (variable)

}
const getValidation  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
//  console.log("la data en query es " , data)
    
 return actions.getValidation (variable)

}

const getPaquetes  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
//  console.log("la data en query es " , data)
 console.log("esto es variable", variable)
 return actions.getPaquetes (variable)

}

const signupAdmin  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
//  console.log("la data en query es " , data)
 console.log("esto es variable", variable)
 return actions.signupAdmin (variable)

}


const loginAdminAlfa  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
 console.log("la data en query es " , data)
 console.log("esto es variable", variable)
 return actions.loginAdminAlfa(variable)

}


const getRFC  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
//  console.log("la data en query es " , data)
 console.log("esto es variable", variable)
 return actions.getRFC (variable)

}

const getVentasAlfa  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
//  console.log("la data en query es " , data)
 console.log("esto es variable", variable)
 return actions.getVentasAlfa (variable)

}

const getAdminGral  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
//  console.log("la data en query es " , data)
 console.log("esto es variable", variable)
 return actions.getAdminGral (variable)

}

const loginModalAdmin   =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
//  console.log("la data en query es " , data)
 console.log("esto es variable", variable)
 return actions.loginModalAdmin  (variable)

}


module.exports={
    loginModalAdmin,
    getAdminGral,
    getVentasAlfa,
    getRFC,
    login,
    loginclientes,
    getTablaClientes,
    loginAdminGeneral,
    getTablaAdmin,
    getValidation,
    getPaquetes,
    signupAdmin,
    loginAdminAlfa
    
    
    
}