const FormData = require('../models/formModel');

const submitForm = async (req, res) => {
  try {
    // Crée une nouvelle instance du modèle FormData avec les données du corps de la requête
    const formData = new FormData({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    // Enregistre les données dans la base de données
    const savedFormData = await formData.save();
    // Envoie une réponse de succès avec les données enregistrées
    res.status(200).json(savedFormData);
  } catch (error) {
    // Envoie une réponse d'erreur avec le message d'erreur
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  submitForm,
};
