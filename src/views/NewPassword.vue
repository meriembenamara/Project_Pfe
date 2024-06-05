<template>
    <div class="auth">
    <div class="container">
      <div class="image">
        <img src="@/assets/img_cnx.png" alt="Exemple d'image " width="100%" height="">
      </div>
     
     <div class="form-container">
      <p class="title">Nouveau Mot de passe</p>
      <form class="form">
        <label>Nouveau Mot de passe</label>
        <input type="password" v-model="newPassword" class="input" placeholder="Entrez votre nouveau mot de passe...">
        <label>Confirmation</label>
        <input type="password" v-model="confirmPassword" class="input" placeholder="Confirmer votre mot de passe...">
       
        <button class="form-btn"  @click="updatePassword">Enregistrer</button>
      </form>
      <p class="sign-up-label">
      Vous avez déjà un compte?<a @click="NavigationToLogin">
      <span class="sign-up-link" >Se connecter</span>
    </a>
      </p>
     
    </div>
  </div>
  </div>
  </template>
  
  <script>
import axios from 'axios';

export default {
  data() {
    return {
      newPassword: '',
      confirmPassword: ''
    };
  },
  methods: {
    async updatePassword() { // Méthode appelée lorsque l'utilisateur clique sur le bouton "Update Password"
      if (this.newPassword !== this.confirmPassword) { // Vérification que les mots de passe correspondent
        return alert('Passwords do not match'); // Affiche un message d'alerte si les mots de passe ne correspondent pas
      }

      try { // Essayer de mettre à jour le mot de passe en utilisant une requête HTTP POST
        const token = this.$route.params.token; // Récupère le token à partir des paramètres de l'URL
        await axios.post("http://localhost:5000/api/users/UpdatePassword", { token, newPassword: this.newPassword }); // Envoie une requête POST à l'API pour mettre à jour le mot de passe
        alert('Password updated successfully'); // Affiche un message de succès
        // Rediriger vers la page de connexion ou toute autre page appropriée après la mise à jour du mot de passe

      } catch (error) { // Attrape les erreurs potentielles
        console.error(error.response.data); // Affiche l'erreur dans la console du navigateur
        alert('Failed to update password'); // Affiche un message d'erreur
      }
    },

     // navigation
   NavigationToLogin() {
    this.$router.push('/login');
  }
  }
};

  </script>
  
  <style scoped>
  
  .auth
  {
    background-color: #fff;
    height: 100% ;
    width: 100% ;
  }
  .container {
  display: flex; 
  width: 90%;
  height: 100%;
  background-color: #fff;
  margin-left: 55px;
  margin-right: 50px;
  margin-top: 50px;
  margin-bottom: 40px;
  
  }
  .image {
  flex: 1.5; 
  text-align: center; 
   margin-left: 30px;
  margin-right: 50px;
  margin-top: 0px; 
  
  
  }
  
  .form-container {
  flex: 1.5; 
  width: 50%;
  height: 500px;
  background-color: #fff;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 50px;
  
  }
  
  .title {
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color:teal ;
  margin: 10px 0 30px 0;
  font-size: 28px;
  font-weight: 800;
  }
  
  .form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  
  }
  
  label {
  text-align: left;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 15px;
  font-weight: bold;
  }
  .input {
  border-radius: 20px;
  border: 1px solid  teal;
  outline: teal;
  outline-color :  teal;
  box-sizing: border-box;
  padding: 12px 15px;
  }
  
  .page-link {
  text-decoration: underline;
  margin: 0;
  text-align: end;
  color: #747474;
  text-decoration-color: #747474;
  }
  
  .page-link-label {
  cursor: pointer;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 11px;
  font-weight: 700;
  }
  
  .page-link-label:hover {
  color: #000;
  }
  
  .form-btn {
  padding: 10px 15px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  border-radius: 20px;
  border: 0 !important;
  outline: 0 !important;
  background: teal;
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 50%;
  align-self: center;
  }
  
  .form-btn:active {
  box-shadow: none;
  }
  
  .sign-up-label {
    margin-top: 10px;
  font-size: 10px;
  color: #747474;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  
  .sign-up-link {
  margin-left: 1px;
  font-size: 11px;
  text-decoration: underline;
  text-decoration-color: teal;
  color: teal;
  cursor: pointer;
  font-weight: 800;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  </style>