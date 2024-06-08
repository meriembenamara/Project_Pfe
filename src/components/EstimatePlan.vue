<template>
    <div class="estimate">
      <!-- Input fields for location, size, number of rooms -->
      <div>
      <label for="Commune">Commune:</label>
      <input type="text" id="Commune" v-model="Commune">
    </div>
    <div>
      <label for="Lieu_dit">Lieu_dit:</label>
      <input type="text" id="Lieu_dit" v-model="Lieu_dit">
    </div>
    <div>
      <label for="N_de_parcelle">N_de_parcelle:</label>
      <input type="text" id="N_de_parcelle" v-model="N_de_parcelle">
    </div>
    <div>
      <label for="Institutionnelle">Institutionnelle:</label>
      <input type="text" id="Institutionnelle" v-model="Institutionnelle">
    </div>
    <div>
      <label for="Commerciales">Commerciales:</label>
      <input type="text" id="Commerciales" v-model="Commerciales">
    </div>
    <div>
      <label for="Culturelle">Culturelle:</label>
      <input type="text" id="Culturelle" v-model="Culturelle">
    </div>
    <div>
      <label for="Industrielle">Industrielle:</label>
      <input type="text" id="Industrielle" v-model="Industrielle">
    </div>
    <div>
      <label for="Réligieuse">Réligieuse:</label>
      <input type="text" id="Réligieuse" v-model="Réligieuse">
    </div>
    <div>
      <label for="Surface_de_la_parcelle">Surface_de_la_parcelle:</label>
      <input type="text" id="Surface_de_la_parcelle" v-model="Surface_de_la_parcelle">
    </div>
    <div>
      <label for="Surface_de_construction">Surface_de_construction:</label>
      <input type="text" id="Surface_de_construction" v-model="Surface_de_construction">
    </div>
    <div>
      <label for="Largeur">Largeur:</label>
      <input type="text" id="Largeur" v-model="Largeur">
    </div>
    <div>
      <label for="Longueur">Longueur:</label>
      <input type="text" id="Longueur" v-model="Longueur">
    </div>
    <div>
      <label for="Nombres_de_portes">Nombres_de_portes:</label>
      <input type="text" id="Nombres_de_portes" v-model="Nombres_de_portes">
    </div>
    <div>
      <label for="Nombres_de_Fenêtres">Nombres_de_Fenêtres:</label>
      <input type="text" id="Nombres_de_Fenêtres" v-model="Nombres_de_Fenêtres">
    </div>
    <div>
      <label for="Nombres_étages">Nombres_étages:</label>
      <input type="text" id="Nombres_étages" v-model="Nombres_étages">
    </div>
    <div>
      <label for="Nombres_de_salles">Nombres_de_salles:</label>
      <input type="text" id="Nombres_de_salles" v-model="Nombres_de_salles">
    </div>
    <div>
      <label for="Décompositions">Décompositions:</label>
      <input type="text" id="Décompositions" v-model="Décompositions">
    </div>
    <div>
      <label for="Moderne">Moderne:</label>
      <input type="text" id="Moderne" v-model="Moderne">
    </div>
    <div>
      <label for="Traditionnel">Traditionnel:</label>
      <input type="text" id="Traditionnel" v-model="Traditionnel">
    </div>
    <div>
      <label for="Roman">Roman:</label>
      <input type="text" id="Roman" v-model="Roman">
    </div>
    <div>
      <label for="Fondations">Fondations:</label>
      <input type="text" id="Fondations" v-model="Fondations">
    </div>
    <div>
      <label for="Murs">Murs:</label>
      <input type="text" id="Murs" v-model="Murs">
    </div>
    <div>
      <label for="Isolation">Isolation:</label>
      <input type="text" id="Isolation" v-model="Isolation">
    </div>
    <div>
      <label for="Fenêtres">Fenêtres:</label>
      <input type="text" id="Fenêtres" v-model="Fenêtres">
    </div>
    <div>
      <label for="Portes">Portes:</label>
      <input type="text" id="Portes" v-model="Portes">
    </div>
    <div>
      <label for="Revêtements_de_sol">Revêtements_de_sol:</label>
      <input type="text" id="Revêtements_de_sol" v-model="Revêtements_de_sol">
    </div>
    <div>
      <label for="selectedCharpente">selectedCharpente:</label>
      <input type="text" id="selectedCharpente" v-model="selectedCharpente">
    </div>
    <div>
      <label for="Poutres_et_colonnes">Poutres_et_colonnes:</label>
      <input type="text" id="Poutres_et_colonnes" v-model="Poutres_et_colonnes">
    </div>
    <div>
      <label for="Béton">Béton:</label>
      <input type="text" id="Béton" v-model="Béton">
    </div>
    <div>
      <label for="Camions_de_livraison">Camions_de_livraison:</label>
      <input type="text" id="Camions_de_livraison" v-model="Camions_de_livraison">
    </div>
    <div>
      <label for="Équipement_de_terrassement">Équipement_de_terrassement:</label>
      <input type="text" id="Équipement_de_terrassement" v-model="Équipement_de_terrassement">
    </div>
    <div>
      <label for="Camions_de_béton">Camions_de_béton:</label>
      <input type="text" id="Camions_de_béton" v-model="Camions_de_béton">
    </div>
    <div>
      <label for="Camions_de_ransport_de_matériel_lourd">Camions_de_ransport_de_matériel_lourd:</label>
      <input type="text" id="Camions_de_ransport_de_matériel_lourd" v-model="Camions_de_ransport_de_matériel_lourd">
    </div>
    <div>
      <label for="Véhicules_utilitaires_légers">Véhicules_utilitaires_légers:</label>
      <input type="text" id="Véhicules_utilitaires_légers" v-model="Véhicules_utilitaires_légers">
    </div>
    <div>
      <label for="Superviseurs_de_chantier">Superviseurs_de_chantier:</label>
      <input type="text" id="Superviseurs_de_chantier" v-model="Superviseurs_de_chantier">
    </div>
    <div>
      <label for="Ingénieurs">Ingénieurs:</label>
      <input type="text" id="Ingénieurs" v-model="Ingénieurs">
    </div>
    <div>
      <label for="Ouvriers_qualifiés">Ouvriers_qualifiés:</label>
      <input type="text" id="Ouvriers_qualifiés" v-model="Ouvriers_qualifiés">
    </div>
    <div>
      <label for="Maître_dœuvre_ou_architecte">Maître_dœuvre_ou_architecte:</label>
      <input type="text" id="Maître_dœuvre_ou_architecte" v-model="Maître_dœuvre_ou_architecte">
    </div>
    <div>
      <label for="Opérateurs_équipement_lourd">Opérateurs_équipement_lourd:</label>
      <input type="text" id="Opérateurs_équipement_lourd" v-model="Opérateurs_équipement_lourd">
    </div>
    <div>
      <label for="Équipes_de_sécurité">Équipes_de_sécurité:</label>
      <input type="text" id="Équipes_de_sécurité" v-model="Équipes_de_sécurité">
    </div>
      <div>
        <h2>Upload Plan</h2>
        <input type="file" @change="handleFileUpload">
        <div v-if="previewImageUrl">
          <img :src="previewImageUrl" alt="Uploaded Image">
        </div>
        <p v-if="uploading">Uploading image...</p>
        <p v-if="uploadSuccess">Image uploaded successfully!</p>
        <p v-if="uploadError">Failed to upload image. Please try again.</p>
      </div>
      <!-- Button to trigger price estimation -->
      <button @click="estimatePrice">Estimate Price</button>
  
      <!-- Display estimated price -->
      <div v-if="estimatedPrice !== null">
        <h2>Estimated Price:</h2>
        <p>{{ estimatedPrice }} TND</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  
  export default {
    name: 'EstimatePlan',
    components: {
     
    },
    data() {
      return {
        Commune: '',
      Lieu_dit: '',
      N_de_parcelle: '',
      Institutionnelle: '',
      Commerciales: '',
      Culturelle: '',
      Industrielle: '',
      Réligieuse: '',
      Surface_de_la_parcelle: '',
      Surface_de_construction: '',
      Largeur: '',
      Longueur: '',
      Nombres_de_portes: '',
      Nombres_de_Fenêtres: '',
      Nombres_étages: '',
      Nombres_de_salles: '',
      Décompositions: '',
      Moderne: '',
      Traditionnel: '',
      Roman: '',
      Fondations: '',
      Murs: '',
      Isolation: '',
      Fenêtres: '',
      Portes: '',
      Revêtements_de_sol: '',
      selectedCharpente: '',
      Poutres_et_colonnes: '',
      Béton: '',
      Camions_de_livraison: '',
      Équipement_de_terrassement: '',
      Camions_de_béton: '',
      Camions_de_ransport_de_matériel_lourd: '',
      Véhicules_utilitaires_légers: '',
      Superviseurs_de_chantier: '',
      Ingénieurs: '',
      Ouvriers_qualifiés: '',
      Maître_dœuvre_ou_architecte: '',
      Opérateurs_équipement_lourd: '',
      Équipes_de_sécurité: '',
      file: null,
        selectedFile: null,
        previewImageUrl: null,
        estimatedPrice: null,
        uploading: false,
        uploadSuccess: false,
        uploadError: false,
        currencyRate: 3.1 // Example exchange rate from USD to TND
      };
    },
    methods: {
      onPlaceChanged(place) {
        this.location = place.formatted_address;
      },
      async handleFileUpload(event) {
        const file = event.target.files[0];
        // Clear previous file data
        this.selectedFile = null;
        this.previewImageUrl = null;
  
        // Check if the uploaded file is a JPEG or a converted PDF (assumed to be a JPEG)
        if (file) {
          this.selectedFile = file;
          this.previewImageUrl = URL.createObjectURL(file);
        }
      },
      async estimatePrice() {
  try {
    this.uploading = true;
    this.uploadSuccess = false;
    this.uploadError = false;

    const formData = new FormData();
    formData.append('Commune', this.Commune);
formData.append('Lieu_dit', this.Lieu_dit);
formData.append('N_de_parcelle', this.N_de_parcelle);
formData.append('Institutionnelle', this.Institutionnelle);
formData.append('Commerciales', this.Commerciales);
formData.append('Culturelle', this.Culturelle);
formData.append('Industrielle', this.Industrielle);
formData.append('Réligieuse', this.Réligieuse);
formData.append('Surface_de_la_parcelle', this.Surface_de_la_parcelle);
formData.append('Surface_de_construction', this.Surface_de_construction);
formData.append('Largeur', this.Largeur);
formData.append('Longueur', this.Longueur);
formData.append('Nombres_de_portes', this.Nombres_de_portes);
formData.append('Nombres_de_Fenêtres', this.Nombres_de_Fenêtres);
formData.append('Nombres_étages', this.Nombres_étages);
formData.append('Nombres_de_salles', this.Nombres_de_salles);
formData.append('Décompositions', this.Décompositions);
formData.append('Moderne', this.Moderne);
formData.append('Traditionnel', this.Traditionnel);
formData.append('Roman', this.Roman);
formData.append('Fondations', this.Fondations);
formData.append('Murs', this.Murs);
formData.append('Isolation', this.Isolation);
formData.append('Fenêtres', this.Fenêtres);
formData.append('Portes', this.Portes);
formData.append('Revêtements_de_sol', this.Revêtements_de_sol);
formData.append('selectedCharpente', this.selectedCharpente);
formData.append('Poutres_et_colonnes', this.Poutres_et_colonnes);
formData.append('Béton', this.Béton);
formData.append('Camions_de_livraison', this.Camions_de_livraison);
formData.append('Équipement_de_terrassement', this.Équipement_de_terrassement);
formData.append('Camions_de_béton', this.Camions_de_béton);
formData.append('Camions_de_ransport_de_matériel_lourd', this.Camions_de_ransport_de_matériel_lourd);
formData.append('Véhicules_utilitaires_légers', this.Véhicules_utilitaires_légers);
formData.append('Superviseurs_de_chantier', this.Superviseurs_de_chantier);
formData.append('Ingénieurs', this.Ingénieurs);
formData.append('Ouvriers_qualifiés', this.Ouvriers_qualifiés);
formData.append('Maître_dœuvre_ou_architecte', this.Maître_dœuvre_ou_architecte);
formData.append('Opérateurs_équipement_lourd', this.Opérateurs_équipement_lourd);
formData.append('Équipes_de_sécurité', this.Équipes_de_sécurité);
formData.append('file', this.file);
    formData.append('image', this.selectedFile);

    const response = await axios.post('http://localhost:5000/estimate-price', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    const priceUSD = parseFloat(response.data.estimatedPrice); // Parse string to float
    if (!isNaN(priceUSD)) {
      this.estimatedPrice = this.convertCurrency(priceUSD, this.currencyRate);
      this.uploadSuccess = true;
    } else {
      throw new Error('Invalid price received from the server');
    }
  } catch (error) {
    console.error('Error estimating house price:', error);
    this.uploadError = true;
    this.estimatedPrice = null; // Reset estimated price in case of error
  } finally {
    this.uploading = false; // Always reset uploading flag after request completes
  }
}
,
      convertCurrency(amount, rate) {
        return amount * rate;
      }
    }
  };
  </script>
  
  <style scoped>
    .estimate {
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #f9f9f9;
    }
  
    .estimate div {
      margin-bottom: 10px;
    }
  
    .estimate label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
    }
  
    .estimate input[type="text"],
    .estimate input[type="file"] {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    .estimate h2 {
      margin-top: 20px;
      font-size: 1.2em;
    }
  
    .estimate img {
      max-width: 100%;
      margin-top: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    .estimate button {
      padding: 10px 15px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1em;
    }
  
    .estimate button:hover {
      background-color: #0056b3;
    }
  
    .estimate p {
      margin-top: 10px;
      color: #28a745;
      font-weight: bold;
    }
  </style>