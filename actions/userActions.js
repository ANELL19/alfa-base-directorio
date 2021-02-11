
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

// const signup = (data) => {
//     console.log("esto contiene data:",data)
//  return new Promise((resolve,reject) =>{
//     // console.log("esto contiene data:",data[0], )
//      bcrypt.genSalt(SALT_WORK_FACTOR,function(error,salt){
//          if (error){    
//               reject(error,{message:'error',token:error})
//          } else{
//              bcrypt.hash(data[6],salt, function(error,hash){
//                  console.log("data[6]" , data[6])
//                  if(error){
//                     throw error
//                  } else{
//                      let idAdmin = parseInt(data[7]);
//                  //    console.log(`insert into administrador(nombre,apellidos,razonSocial,RFC,telefono,correo,statusCorreo,contraseña,fk_adminGral) values ('${data[0]}','${data[1]}','${data[2]}','${data[3]}','${data[4]}','${data[5]}','TRUE' , '${hash}',${idAdmin})`)
//                     client.query(`insert into administrador(nombre,apellidos,razonSocial,RFC,telefono,correo,statusCorreo,contraseña,fk_adminGral) values ('${data[0]}','${data[1]}','${data[2]}','${data[3]}','${data[4]}','${data[5]}','TRUE','${hash}',${idAdmin})`);
                  
//                        resolve({
//                         nombre:resultados[0].nombre,                        
//                         apellidos:resultados[0].apellidos,
//                         razonSocial:resultados[0].razonSocial,
//                         RFC:resultados[0].rfc,
//                         telefono:resultados[0].telefono,
//                         correo:resultados[0].correo,                       
//                         message:"el registro en signup fue exitoso",

//                      })
                       
//                  }
//              })
//          }

//      })
     
//  })   
// } 

    const getTablaClientes   = ( data)  => {
        return new Promise((resolve,reject)=>{
            client.query(`select * from clientes` , function (err,results,fields ) {
                
                var string = JSON.stringify(results)
                var resultados=JSON.parse(string);

                resolve(resultados)
                console.log("resultados",resultados)
            }) 
        })
        }
       //      ******************* insertClientes  ***********
    // const insertClientes= (data)=> { 
    //     return new Promise((resolve,reject)=>{            
    //         client.query(`insert into clientes (nombre_cliente, apellidos_cliente,curp,rfc,nombreEmpresa,telefono,correo,contrasena,num_factura) values('${data[0]}','${data[1]}','${data[2]}','${data[3]}','${data[4]}','${data[5]}','${data[6]}','${data[7]}','${data[8]}')`) 
    //         resolve({message:"registro exitoso"})
    //     })
    //     }
//  *********************************************
        
const loginclientes  = async  data =>{
    console.log('esto es la data',data)
  return new Promise((resolve,reject) =>{ 

   //console.log(' esta es la query',`select * from clientes where correo='${data[0]}' and contraseña = '${data[1]}'`,
   

   client.query(`select * from clientes where correo='${data[0]}' and contrasena='${data[1]}'`,
   function(err,results,field){
    if(err){ reject(err)
   //console.log("error", err)
   }

       var string = JSON.stringify(results)
       var resultados=JSON.parse(string);

       if(resultados[0]){
        console.log("resultados",resultados[0])
         bcrypt.compare(data[1],resultados[0].contrasena,function(error,result){
               if(result){
                    resolve({
                    id_cliente:resultados[0].id_cliente,
                    nombre_cliente:resultados[0].nombre_cliente,
                    apellidos_cliente:resultados[0].apellidos_cliente,
                    rfc:resultados[0].rfc,
                    nombreEmpresa:resultados[0].nombreEmpresa,
                    telefono:resultados[0].telefono,
                    correo:resultados[0].correo,                    
                    message:"login exitoso",
                    token:jsonwebtoken(resultados[0].correo) //coreo data[0]]
   
            })
               } else{ 
                
                   resolve.Alert({message:"usuario y contraseña incorrecto", token:"no hay token"})
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


const loginAdminGeneral  = async  data =>{
    console.log('esto es la data',data)
  return new Promise((resolve,reject) =>{ 
 client.query(`select * from administradorGeneral where correo='${data[0]}'`,
   function(err,results,field){
    if(err){ reject(err)
   //console.log("error", err)
   }

       var string = JSON.stringify(results)

       var resultados=JSON.parse(string);
        console.log("resultados", resultados)
       if(resultados[0]){
           bcrypt.compare(data[1],resultados[0].contraseña,function(error,result){
               if(result){
                    resolve({
                    fk_paquetes:resultados[0].fk_paquetes,    
                    id_adminG:resultados[0].id_adminG,
                    nombre:resultados[0].nombre,
                    apellido:resultados[0].apellido,
                    razonSocial:resultados[0].razonSocial,
                    rfc:resultados[0].rfc,
                    telefono:resultados[0].telefono,                              
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

const  signupAdminGeneral = (data) => {
    console.log("esto contiene data:",data)
 return new Promise((resolve,reject) =>{
    // console.log("esto contiene data:",data[0], )
     bcrypt.genSalt(SALT_WORK_FACTOR,function(error,salt){
         if (error){    
              reject(error,{message:'error',token:error})
         } else{
             bcrypt.hash(data[6],salt, function(error,hash){
               //  console.log("data[6]" , data[6])
                 if(error){
                    throw error
                 } else{
                    client.query(`insert into administradorGeneral(nombre,apellido,razonSocial,RFC,telefono,correo,contraseña,fk_paquetes) values ('${data[0]}','${data[1]}','${data[2]}','${data[3]}','${data[4]}','${data[5]}','${hash}','${data[7]}')`);
                    
                    var date= new Date()
                    var fecha = date.toLocaleString('es')

                    client.query(`select max(id_adminG) as idAdminGral from administradorgeneral `,function(err,results,fieds){
                        var string = JSON.stringify(results)
                        var resultados = JSON.parse(string)
                        client.query(`insert into ventasAlfa(fechaVenta,fk_adminG,fk_adminAlfa,fk_paquete) values('${fecha}','${resultados[0].idAdminGral}','${data[8]}','${data[7]}')`)
                    })
                    resolve({message:"el registro en signup fue exitoso"})
                 }
             })
         }

     })
     
 })   
} 


         
const insertClientes = (data)=> { 
    console.log("data",data)
    return new Promise((resolve,reject)=>{  
        //  let id_Admin = parseInt(data[9]);          
       client.query(`insert into clientes (nombre_cliente, apellidos_cliente,curp,rfc,nombreEmpresa,telefono,correo,contrasena,num_factura,fk_administrador) values('${data[0]}','${data[1]}','${data[2]}','${data[3]}','${data[4]}','${data[5]}','${data[6]}','${data[7]}','${data[8]}','${data[9]}')`) 
     //   client.query(`insert into clientes (nombre_cliente, apellidos_cliente,curp,rfc,nombreEmpresa,telefono,correo,contrasena,num_factura) values('${data[0]}','${data[1]}','${data[2]}','${data[3]}','${data[4]}','${data[5]}','${data[6]}','${data[7]}','${data[8]}')`) 
       
        resolve({message:"registro exitoso"})
    })
    }

    const getTablaAdmin   = ( data)  => {
        console.log("data",data)
        return new Promise((resolve,reject)=>{
            client.query(`select * from administrador where fk_adminGral='${data[0]}'` , function (err,results,fields ) {            
                var string = JSON.stringify(results)
                var resultados=JSON.parse(string);    
                resolve(resultados)
                console.log("resultados",resultados)
               
            }) 
        })
        }

        const getValidation   = ( data)  => {
            console.log("data",data[0],"query  :" , `select  count(id_admin) as id from administrador  where fk_adminGral = '${data[0]}'`)
            return new Promise((resolve,reject)=>{
                client.query(`select  count(id_admin) as id from administrador where fk_adminGral = '${data[0]}'`,function(err,results,fields){
                    var string = JSON.stringify(results)
                    var resultados = JSON.parse(string)
                    
                    resolve(resultados[0])
                    console.log("resultados[0]",resultados[0])
                })
            })
            }

            const getPaquetes   = ( data)  => {
                console.log("data",data)
                return new Promise((resolve,reject)=>{
                    client.query(`select * from paquetes where id_paquetes ='${data[0]}'` , function (err,results,fields ) {            
                        var string = JSON.stringify(results)
                        var resultados=JSON.parse(string);
            
                        resolve({
                            empresas:resultados[0].empresas
                        })
                    }) 
                })
                }

                        
const signupAdmin  = async  data =>{
    console.log('esto es la data',data)
  return new Promise((resolve,reject) =>{ 

   //console.log(' esta es la query',`select * from clientes where correo='${data[0]}' and contraseña = '${data[1]}'`,
   

   client.query(`select * from administrador where rfc='${data[3]}' `,
   function(err,results,field){
    var string = JSON.stringify(results)
    var resultados=JSON.parse(string);
    if (resultados[0]){
        resolve({
            message:"ya se encuentra registrado"
        })
    }else{
        bcrypt.genSalt(SALT_WORK_FACTOR,function(error,salt){
            if (error){    
                 reject(error,{message:'error',token:error})
            } else{
                bcrypt.hash(data[6],salt, function(error,hash){
                    console.log("data[6]" , data[6])
                    if(error){
                       throw error
                    } else{
                        let idAdmin = parseInt(data[7]);
                    //    console.log(`insert into administrador(nombre,apellidos,razonSocial,RFC,telefono,correo,statusCorreo,contraseña,fk_adminGral) values ('${data[0]}','${data[1]}','${data[2]}','${data[3]}','${data[4]}','${data[5]}','TRUE' , '${hash}',${idAdmin})`)
                       client.query(`insert into administrador(nombre,apellidos,razonSocial,RFC,telefono,correo,statusCorreo,contraseña,fk_adminGral) values ('${data[0]}','${data[1]}','${data[2]}','${data[3]}','${data[4]}','${data[5]}','TRUE','${hash}',${idAdmin})`);
                       resolve
                       ({

                           message:"el registro en signup fue exitoso",

                       })
                    }
                })
            }
   
        })

    }
})
})
}

const signupAlfa = (data) => {
    console.log("esto contiene data:",data)
 return new Promise((resolve,reject) =>{
    // console.log("esto contiene data:",data[0], )
     bcrypt.genSalt(SALT_WORK_FACTOR,function(error,salt){
         if (error){    
              reject(error,{message:'error',token:error})
         } else{
             bcrypt.hash(data[3],salt, function(error,hash){
              //   console.log("data[6]" , data[6])
                 if(error){
                    throw error
                 } else{
                   //  let idAdmin = parseInt(data[7]);
                  //  console.log(`insert into administrador(nombre,apellidos,razonSocial,RFC,telefono,correo,statusCorreo,contraseña,fk_adminGral) values ('${data[0]}','${data[1]}','${data[2]}','${data[3]}','${data[4]}','${data[5]}','TRUE' , '${hash}',${idAdmin})`)
                    client.query(`insert into adminAlfa(nombre,apellido,correo,contraseña) values ('${data[0]}','${data[1]}','${data[2]}','${hash}')`);
                  
                       resolve({           
                        message:"el registro en signup fue exitoso",

                     })
                       
                 }
             })
         }

     })
     
 })   
} 


const loginAdminAlfa  = async  data =>{
    console.log('esto es la data',data)
  return new Promise((resolve,reject) =>{ 

   //console.log(' esta es la query',`select * from clientes where correo='${data[0]}' and contraseña = '${data[1]}'`,
   

   client.query(`select * from adminAlfa where correo='${data[0]}'`,
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
                    id:resultados[0].id,
                    nombre:resultados[0].nombre,
                    apellido:resultados[0].apellido,                   
                    correo:resultados[0].correo,                   
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



  const getRFC   = ( data)  => {
                console.log("data",data)
                return new Promise((resolve,reject)=>{
                    client.query(`select * from administrador where rfc ='${data[0]}'` , function (err,results,fields ) {            
                        var string = JSON.stringify(results)
                        var resultados=JSON.parse(string);
            
                        resolve({
                            id_admin:resultados[0].id_admin,
                            rfc:resultados[0].rfc
                        })
                    }) 
                })
                }
    const getVentasAlfa   = ( data)  => {
        return new Promise((resolve,reject)=>{
            client.query(`select * from ventasAlfa where fk_adminAlfa ='${data[0]}'` , function (err,results,fields ) {            
                var string = JSON.stringify(results)
                var resultados=JSON.parse(string);
    
                resolve(
                    resultados
                )
            }) 
        })
        }            
        const getAdminGral   = ( data)  => {
            return new Promise((resolve,reject)=>{
                client.query(`select * from administradorgeneral inner join paquetes on administradorgeneral.fk_paquetes = paquetes.id_paquetes where administradorgeneral.id_adminG = '${data[0]}'` , function (err,results,fields ) {            
                    var string = JSON.stringify(results)
                    var resultados=JSON.parse(string);
        
                    resolve(
                        resultados
                    )
                }) 
            })
            }  
//////********
            
const  loginModalAdmin  = async  data =>{
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
               console.log("data[1]",data[1])
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


// const getModalLogin   = ( data)  => {
//     return new Promise((resolve,reject)=>{
//         client.query(`select * from ventasAlfa where fk_adminAlfa ='${data[0]}'` , function (err,results,fields ) {            
//             var string = JSON.stringify(results)
//             var resultados=JSON.parse(string);

//             resolve(
//                 resultados
//             )
//         }) 
//     })
//     } 
            
            
module.exports={
    loginModalAdmin ,
    getAdminGral,
    getVentasAlfa,
    insertClientes,
    getRFC,
    login,
    // signup,   
    loginclientes,
    getTablaClientes,
    loginAdminGeneral,
    signupAdminGeneral,
    getTablaAdmin,
    getValidation,
    getPaquetes,
    signupAdmin,
    signupAlfa,
    loginAdminAlfa


    
}