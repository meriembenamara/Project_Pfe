const express = require("express");
const router = express.Router(); 
const {SignUpAdmin} = require("../Controllers/AdminController"); 


router.post("/SignUpAdmin",SignUpAdmin);
module.exports = router;