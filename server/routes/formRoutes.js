const express = require('express');
const { submitForm } = require('../controllers/formController');

const router = express.Router();

// Route to handle form submission
router.post('/submit', submitForm);

module.exports = router;
