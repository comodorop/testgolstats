const express = require('express')
const services = require('../services/clients')
const router = express.Router()

router.get('/:id', async(req, resp)=>{
  let {id} = req.params
  let data = await services.getUsers(id)
  //NO HAY NECESIDAD DE HACER ESTO, YA QUE ESTO OCACIONA QUE BLOQUEMOS EL EVENT LOOP DE 
  //NODE JS
  // setTimeout(() => {
    resp.status(200).send({status:200, data: data})  
  // }, 3000);
})

module.exports= router