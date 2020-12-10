const client  = require('../database')
const bcrypt =  require('bcrypt')
const {jsonwebtoken} = require('../utils/index')
const SALT_WORK_FACTOR =10

const login  = async  data =>{
     console.log('esto es la data',data)
   return new Promise((resolve,reject) =>{ 
    //console.log(' esta es la query',`select * from clientes where correo='${data[0]}' and contraseña = '${data[1]}'`,
    
 
    client.query(`select * from administrador where correo='${data[0]}'`,
    function(err,results,field){
     if(err){ reject(err)
    //console.log("error", err)
    }

        var string = JSON.stringify(results)

        var resultados=JSON.parse(string);
        console.log("resultados",resultados)

        if(resultados[0]){
            bcrypt.compare(data[1],resultados[0].contrasena,function(error,result){
                if(result){
                     resolve({
                     id:resultados[0].id,
                     nombre:resultados[0].nombre,
                     rason_social:resultados[0].razon_social,
                     telefono:resultados[0].telefono,
                     correo:resultados[0].correo,
                     contrasena:resultados[0].password,
                     message:"login exitoso",
                     token:jsonwebtoken(resultados[0].correo) //coreo data[0]]
    
             })
                } else{ 
                    resolve({message:"usuario y contraseña incorrecto", token:"no hay token"})


                   

                }

            })
          //no existe el usuario "correo y contraseña"
        
        }else{
            resolve({
                message:"usuario no encontrado ",
              
             })
        
        
        }
    
    })
} )

}

   
//////////////////////////////encriptacion de contraeñas

const signup = (data) => {
    console.log('esto contiene data:',data)
 return new Promise((resolve,reject) =>{
     bcrypt.genSalt(SALT_WORK_FACTOR,function(error,salt){
         if (error){    
              reject(error,{message:'error',token:error})
         } else{
             bcrypt.hash(data[4],salt, function(error,hash){
                 if(error){
                    throw error
                 } else{
                    client.query(`insert into administrador(nombre,razon_social,telefono,correo,password ) values ('${data[0]}','${data[1]}','${data[2]}','${data[3]}','${hash}')`)
                    resolve({message:"el registro fue exitoso con apellidos"})
                 }


             })
         }

     })
     
 })   
} 

    const ProcesarCompra   = (data)  => {
    return new Promise((resolve,reject)=>{
        client.query(`insert into tabla (nombre,precio) values('${data[0]}','${data[1]}')`) 
        resolve({message:"registro exitoso"})
    })
    }

    const GetTabla   = ( )  => {
        return new Promise((resolve,reject)=>{
            client.query(`select * from tabla` , function (err,results,fields ) {
                var string =  JSON.parse(stringify)
                var resultados = JSON.parse(string)

                resolve(resultados)
            }) 
            resolve({message:"registro exitoso"})
        })
        }

module.exports={
    GetTabla,

    login,
    signup,
    ProcesarCompra,
  
/////
    
}