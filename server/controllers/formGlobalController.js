const FormGlobalModel = require("../models/formGlobalModel");

const submitForm = async (req, res) => {
  try {
    // Crée une nouvelle instance du modèle FormGlobal avec les données du corps de la requête
    const formGlobal = new FormGlobalModel({
      fondations: req.body.fondations,
      murs: req.body.murs,
      isolation: req.body.isolation,

      fenêtres: req.body.fenêtres,
      portes: req.body.portes,
      revêtements_de_sol: req.body.revêtements_de_sol,

      selected_charpente: req.body.selected_charpente,
      poutres_et_colonnes: req.body.poutres_et_colonnes,
      béton: req.body.béton,
      camions_de_livraison: req.body.camions_de_livraison,

      équipement_de_terrassement: req.body.équipement_de_terrassement,
      camions_de_béton: req.body.camions_de_béton,
      camions_de_ransport_de_matériel_lourd: req.body.camions_de_ransport_de_matériel_lourd,
      véhicules_utilitaires_légers: req.body.véhicules_utilitaires_légers,
      superviseurs_de_chantier: req.body.superviseurs_de_chantier,

      ingénieurs: req.body.ingénieurs,
      ouvriers_qualifiés: req.body.ouvriers_qualifiés,
      maître_dœuvre_ou_architecte: req.body.maître_dœuvre_ou_architecte,
      opérateurs_équipement_lourd: req.body.opérateurs_équipement_lourd,
      équipes_de_sécurité: req.body.équipes_de_sécurité,
      additional_details: req.body.additional_details,
    });

    // Enregistre les données dans la base de données
    const savedFormGlobal = await formGlobal.save();
    // Envoie une réponse de succès avec les données enregistrées
    res.status(200).json(savedFormGlobal);
    
  } catch (error) {
    // Envoie une réponse d'erreur avec le message d'erreur
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  submitForm,
};
