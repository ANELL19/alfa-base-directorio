const actions = require('../actions/userActions')

    const signup=(_,data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")

    console.log("la data de signup " , variable)
    return actions.signup(variable)
        }


    // const insertClientes=(_,data) =>{
    //     var cadena= data.data[0]
    //     var variable = cadena.split(",")
    
    //     //console.log("la data en query es " , data)
    // return actions.insertClientes(variable)
    //     }

    const signupAdminGeneral=(_,data) =>{
        var cadena= data.data[0]
        var variable = cadena.split(",")
    
        //console.log("la data en query es " , data)
    return actions. signupAdminGeneral(variable)
        }
    


module.exports={
    signup,
    // insertClientes,
    signupAdminGeneral
}