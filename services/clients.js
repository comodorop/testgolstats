let data = require('../lstUsers.json')

function getUsers(id){
  return new Promise((resolve, reject)=>{
    let filter = data.filter(data=>{
      console.log(data)
      if(parseInt(data.id) === parseInt(id)){
        console.log("encontro el usuario")
        return data
      }
    })

    resolve(filter)
  })
  
}


module.exports={
  getUsers
}