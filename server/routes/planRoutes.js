const express = require('express');
const router = express.Router();
const multer = require('multer'); 
const imageController = require('../controllers/planController');
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('imageUrl'), imageController.uploadImage);
router.get('/download', imageController.getImageFromDatabase);
router.get('/download/:id', imageController.getImageById);


module.exports = router;
