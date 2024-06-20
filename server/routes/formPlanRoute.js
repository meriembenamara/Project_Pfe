const express = require("express");
const router = express.Router(); 

const { submitForm } = require('../controllers/formPlanController');

// Route pour gérer la soumission du formulaire
router.post('/add', submitForm);

module.exports = router;
