const express = require("express");
const router = express.Router();



// router.get("/profile", (req, res) => {
//     res.send(req.user);
// });

// module.exports = router;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
  
  /* GET user profile. */
  router.get('/profile', function(req, res, next) {
      res.send(req.user);
  });
  

  module.exports = router;