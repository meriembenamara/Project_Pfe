const mongoose = require("mongoose");
const { Schema } = mongoose;

const FormEtapeSchema = new Schema({
  imageUrl: { type: String },
  type_de_fondation: { type: String },
  profondeur_des_fondations: { type: String },
  type_de_sol: { type: String },
  renforcement_des_fondations: { type: String },
  type_de_murs: { type: String },
  épaisseur_des_murs: { type: String },
  finition_des_murs: { type: String },
  type_de_charpente: { type: String },
  traitement_de_la_charpente: { type: String },
  disposition_des_poutres_et_colonnes: { type: String },
  type_isolation: { type: String },
  épaisseur_de_isolation: { type: String },
  type_de_fenêtres: { type: String },
  type_de_vitrage: { type: String },
  type_de_portes: { type: String },
  type_ouverture: { type: String },
  type_de_revêtement_de_sol: { type: String },
  couleur_des_revêtements_de_sol: { type: String },
  traitement_de_surface: { type: String },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FormEtape', FormEtapeSchema);
