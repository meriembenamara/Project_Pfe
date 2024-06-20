const FormEtapeModel = require("../models/formEtapeModel");

const submitForm = async (req, res) => {
  try {
    // Crée une nouvelle instance du modèle FormEtape avec les données du corps de la requête
    const formEtape = new FormEtapeModel({
      type_de_fondation: req.body.type_de_fondation,
      profondeur_des_fondations: req.body.profondeur_des_fondations,
      type_de_sol: req.body.type_de_sol,
      renforcement_des_fondations: req.body.renforcement_des_fondations,
      type_de_murs: req.body.type_de_murs,
      épaisseur_des_murs: req.body.épaisseur_des_murs,
      finition_des_murs: req.body.finition_des_murs,
      type_de_charpente: req.body.type_de_charpente,
      traitement_de_la_charpente: req.body.traitement_de_la_charpente,
      disposition_des_poutres_et_colonnes: req.body.disposition_des_poutres_et_colonnes,
      type_isolation: req.body.type_isolation,
      épaisseur_de_isolation: req.body.épaisseur_de_isolation,
      type_de_fenêtres: req.body.type_de_fenêtres,
      type_de_vitrage: req.body.type_de_vitrage,
      type_de_portes: req.body.type_de_portes,
      type_ouverture: req.body.type_ouverture,
      type_de_revêtement_de_sol: req.body.type_de_revêtement_de_sol,
      couleur_des_revêtements_de_sol: req.body.couleur_des_revêtements_de_sol,
      traitement_de_surface: req.body.traitement_de_surface
    });

    // Enregistre les données dans la base de données
    const savedFormEtape = await formEtape.save();
    // Envoie une réponse de succès avec les données enregistrées
    console.log("Enregistrement réussi:", savedFormEtape);
    res.status(200).json(savedFormEtape);
  } catch (error) {
    // Envoie une réponse d'erreur avec le message d'erreur
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  submitForm,
};
