const actions = require('../actions/userActions')


const login  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
 console.log("la data en query es " , data)
 console.log("esto es variable", variable)
 return actions.login(variable)

}
const getTabla  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")

 console.log("la data en query es " , data)
 return actions.GetTabla(variable)

}
const loginclientes  =  (_ , data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")
 console.log("la data en query es " , data)
 console.log("esto es variable", variable)
 return actions.loginclientes(variable)

}

module.exports={
    getTabla,
    login,
    loginclientes,
    
    
}