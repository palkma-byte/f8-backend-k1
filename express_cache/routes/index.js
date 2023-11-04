const { v4: uuidv4 } = require("uuid");
const Redis = require("ioredis");
const { User } = require("../models");

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
 
  let getId = req.cookies.id;
  const user = {};
  const redis = new Redis();
  if (!getId) {
    //first request
    getId = uuidv4();
    res.cookie("id", getId);
    const users = await User.findAll();
     user.data = users;
    await redis.set(getId,JSON.stringify(users) );
  }
  //from the second request   
  const key = getId;
  await redis.get(key, (err, data) => {
    if (err) {
      console.error("Error fetching data from Redis:", err);
    } else {
      if (data !== null) {
        user.data = JSON.parse(data) ;
        console.log("Get data from Redis");
      } else {
        console.log("Key not found in Redis.");
      }
    }    
  });
  redis.quit();
  const users = user.data;
  res.render("index", { users });
});

module.exports = router;
