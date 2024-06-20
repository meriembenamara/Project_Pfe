const FormPlan = require("../models/formPlanModel");

const submitForm = async (req, res) => {
  try {
    // Crée une nouvelle instance du modèle FormGlobal avec les données du corps de la requête
    const formPlan = new FormPlan({
        commune: req.body.commune,
        lieu_dit: req.body.lieu_dit,
        n_de_parcelle: req.body.n_de_parcelle,
        résidentielle: req.body.résidentielle,
        institutionnelle: req.body.institutionnelle,
        commerciales: req.body.commerciales,
        culturelle: req.body.culturelle,
        industrielle: req.body.industrielle,
        réligieuse: req.body.réligieuse,

        surface_de_la_parcelle: req.body.surface_de_la_parcelle,
        surface_de_construction: req.body.surface_de_construction,
        largeur: req.body.largeur,

        longueur: req.body.longueur,
        nombres_de_portes: req.body.nombres_de_portes,
        nombres_de_fenêtres: req.body.nombres_de_fenêtres,
        nombres_étages: req.body.nombres_étages,
        nombres_de_salles: req.body.nombres_de_salles,
        décompositions: req.body.décompositions,

        moderne: req.body.moderne,
        traditionnel: req.body.traditionnel,
        roman: req.body.roman,
        fondations: req.body.fondations,
        murs: req.body.murs,
        isolation: req.body.isolation,

        fenêtres: req.body.fenêtres,
        portes: req.body.portes,
        revêtements_de_sol: req.body.revêtements_de_sol,

        selectedcharpente: req.body.selectedcharpente,
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
    const formPlans = await formPlan.save();
    // Envoie une réponse de succès avec les données enregistrées
    res.status(200).json(formPlans);
    

  } catch (error) {
    // Envoie une réponse d'erreur avec le message d'erreur
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  submitForm,
};
