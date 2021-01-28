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

const pruebaUser  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
//  console.log("la data en query es " , data)
 console.log("esto es variable", variable)
 return actions.pruebaUser (variable)

}


const getRFC  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
//  console.log("la data en query es " , data)
 console.log("esto es variable", variable)
 return actions.getRFC (variable)

}



module.exports={
    getRFC,
    login,
    loginclientes,
    getTablaClientes,
    loginAdminGeneral,
    getTablaAdmin,
    getValidation,
    getPaquetes,
    pruebaUser
    
    
    
}