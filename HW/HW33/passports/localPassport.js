const LocalStrategy = require('passport-local').Strategy;

const {User} = require("../models");
const bcrypt = require("bcrypt")

module.exports = new LocalStrategy(
   async function verify(username,password,cb) {
  
    const user =  await User.findOne({where:{username:username}});
        if(!user){ 
            return cb(null, false, { message: 'Incorrect username or password.' });
          } 
    
          const hash = user.password;
          bcrypt.compare(password, hash, (err, result) => {
            if (result) {
              cb(null, user);
              return;
            }
      
            cb(null, false, {
              message: "Incorrect username or password.",
            });
          });
        
    
      

    }
)