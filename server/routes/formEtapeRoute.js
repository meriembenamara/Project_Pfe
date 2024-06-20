const express = require("express");
const router = express.Router(); 

const { submitForm } = require('../controllers/formEtapeController');

// Route pour gérer la soumission du formulaire
router.post('/add', submitForm);
router.post('/addAll', submitForm);
module.exports = router;
