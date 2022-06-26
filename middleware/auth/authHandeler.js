const authUser = (req, res, next) => {
      console.log("Auth from middleware !");
      next();
}

module.exports = {
      authUser
}