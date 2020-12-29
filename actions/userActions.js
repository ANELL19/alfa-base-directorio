
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

       if(resultados[0]){
        console.log("resultados",resultados[0])


           bcrypt.compare(data[1],resultados[0].contraseña,function(error,result){
               if(result){
                    resolve({
                    id_admin:resultados[0].id_admin,
                    nombre:resultados[0].nombre,
                    apellidos:resultados[0].apellidos,
                    razonSocial:resultados[0].razonSocial,
                    RFC:resultados[0].rfc,
                    telefono:resultados[0].telefono,
                    correo:resultados[0].correo,
                    statusCorreo:resultados[0].statusCorreo,
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
    console.log("esto contiene data:",data)
 return new Promise((resolve,reject) =>{
    // console.log("esto contiene data:",data[0], )
     bcrypt.genSalt(SALT_WORK_FACTOR,function(error,salt){
         if (error){    
              reject(error,{message:'error',token:error})
         } else{
             bcrypt.hash(data[7],salt, function(error,hash){
                 console.log("data[7]" , data[7])
                 if(error){
                    throw error
                 } else{
                    client.query(`insert into administrador(nombre,apellidos,razonSocial,RFC,telefono,correo,statusCorreo,contraseña) values ('${data[0]}','${data[1]}','${data[2]}','${data[3]}','${data[4]}','${data[5]}','${data[6]}','${hash}')`);
                    resolve({message:"el registro en signup fue exitoso"})
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


        
    const directorio = (data)  => {
        console.log('esto contiene directorio data:',data)
        return new Promise((resolve,reject)=>{            
            client.query(`insert into directorio (nombre_cliente,empresa,telefono1,telefono2,correo) values('${data[0]}','${data[1]}','${data[2]}','${data[3]}','${data[4]}')`) 
            resolve({message:"registro exitoso"})
        })
        }

module.exports={
    GetTabla,

    login,
    signup,
    ProcesarCompra,
    directorio
  
/////
    
}