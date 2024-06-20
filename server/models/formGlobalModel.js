const mongoose = require("mongoose");
const { Schema } = mongoose;

const FormGlobalModel = new Schema({
  imageUrl: { type: String },
  fondations: { type: String },
  murs: { type: String },
  isolation: { type: String },
  fenêtres: { type: String },
  portes: { type: String },
  revêtements_de_sol: { type: String },
  selected_charpente: { type: String },
  poutres_et_colonnes: { type: String },
  béton: { type: String },
  camions_de_livraison: { type: String },
  équipement_de_terrassement: { type: String },
  camions_de_béton: { type: String },
  camions_de_ransport_de_matériel_lourd: { type: String },
  véhicules_utilitaires_légers: { type: String },
  superviseurs_de_chantier: { type: String },
  ingénieurs: { type: String },
  ouvriers_qualifiés: { type: String },
  maître_dœuvre_ou_architecte: { type: String },
  opérateurs_équipement_lourd: { type: String },
  équipes_de_sécurité: { type: String },
  additional_details: { type: String },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FormGlobal', FormGlobalModel);
