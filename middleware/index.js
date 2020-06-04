module.exports = {
  verifyUsers: async (req, res, next) => {
    let {url} = req
    let info = url.split("/")
    let id = info[info.length-1]
    if(parseInt(id) === 10 || parseInt(id) === 55 ){
      res.status(401).send({status: 401, msg:"You dont have access to the requested user"})
    }else{
      next();
    }
  },
};
