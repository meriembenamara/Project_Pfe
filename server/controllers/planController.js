const Image = require('../models/planModel');

async function uploadImage(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    let path = req.file.path.replace('uploads\\','');

    const newImage = new Image({
      fileName: req.file.filename,
      imageUrl: path,
    });

    const savedImage = await newImage.save();
    res.status(200).json(savedImage);
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Route pour récupérer les données de l'image
async function getImageFromDatabase(req, res) {
  try {
    const image = await Image.findOne().sort({ createdAt: -1 }); // Trouver la dernière image ajoutée
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }
    console.log('Image found:', image.fileName); // Ajouter un journal pour vérifier si l'image est trouvée correctement
    res.json({ fileName: image.fileName }); // Envoyer l'URL de l'image dans la réponse
  } catch (error) {
    console.error('Error getting image:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getImageById = async (req, res) => {
  const id = req.params.id; 
  try {
      const image = await Image.findById(id);
      if (!image) {
        return res.status(404).json({ message: "Image non trouvée" }); // Correction du message
      }
      return res.json(image);
  } catch (err) { 
      console.error('Erreur lors de la récupération de l\'image :', err); // Correction du message
      return res.status(500).json({ message: "Erreur serveur lors de la récupération de l'image" });
  }
};



module.exports = {
  uploadImage,
  getImageFromDatabase,
  getImageById
};                                                  