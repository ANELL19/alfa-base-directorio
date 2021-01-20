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

module.exports={
    
    login,
    loginclientes,
    getTablaClientes,
    loginAdminGeneral,
    getTablaAdmin 
    
    
    
}