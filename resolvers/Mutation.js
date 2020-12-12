const actions = require('../actions/userActions')

const signup=(_,data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")

    //console.log("la data en query es " , data)
 return actions.signup(variable)
    }


    const procesaCompra=(_,data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
    
        //console.log("la data en query es " , data)
     return actions.ProcesarCompra(variable)
        }

const directorio=(_,data) =>{
    var cadena= data.data[0]
    var variable = cadena.split(",")

    //console.log("la data en query es " , data)
    return actions.directorio(variable)
    }

module.exports={
    signup,
    procesaCompra,
    directorio,
}