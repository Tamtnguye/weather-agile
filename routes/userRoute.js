const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//     res.send(req.user);
// });

router.get("/profile", (req, res) => {
    res.send(req.user);
});

module.exports = router;