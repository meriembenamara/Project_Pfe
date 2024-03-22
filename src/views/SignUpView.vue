<template>
  <div class="container">
    <div class="image">
      <img src="@/assets/img_cnx.png" alt="Exemple d'image">
    </div>
   
   <div class="form-container">
    <p class="title">S'inscrire</p>
    <form class="form">
      <div class="input-container">
      <label>Prènom</label>
      <input type="email" class="input" placeholder="Entrez votre Prènom...">
      </div>
      <div class="input-container">
      <label>Nom</label>
      <input type="password" class="input" placeholder="Entrez votre Nom...">
      </div>
    </form>
    <form class="form">
      <div class="input-container">
      <label>Email</label>
      <input type="email" class="input" placeholder="Entrez votre Email...">
      </div>
      <div class="input-container">
      <label>Rôle</label>
      <input type="password" class="input" placeholder="Entrez votre Adresse...">
      </div>
    </form>
    <form class="form">
      <div class="input-container">
      <label>Adresse</label>
      <input type="email" class="input" placeholder="Entrez votre Adresse...">
      </div>
      <div class="input-container">
      <label>Numèro de telephone</label>
      <input type="password" class="input" placeholder="Entrez votre Mobile...">
      </div>
    </form>
    <form class="form">
      <div class="input-container">
      <label>Mot de passe</label>
      <input type="email" class="input" placeholder="Entrez votre mot de passe...">
      </div>
      <div class="input-container">
      <label>Confirmation</label>
      <input type="password" class="input" placeholder="Confirmer votre mot de passe...">
      </div>
    </form>
    <button class="form-btn">S'inscrire</button>
    <p class="sign-up-label">
      Vous avez déjà un compte?<span class="sign-up-link">Se connecter</span>
    </p>
   
  </div>
</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.container {
display: flex; 
width: 90%;
height: 100%;
background-color: #fff;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 10px;
box-sizing: border-box;
margin-left: 55px;
margin-right: 50px;
margin-top: 50px;
margin-bottom: 40px;
}
.image {
  width: 100%;
  height: 100%;
flex: 1.5; 
text-align: right; 
margin-left: 50px;
margin-right: 50px;
margin-top: 50px;
}
.form-container {
flex: 1.5; 
width: 50%;
height: 500px;
background-color: #fff;
margin-left: 50px;
margin-top: 20px;
margin-bottom: 30px;
}
.title {
text-align: center;
font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
color:teal ;
margin-top: 20px ;
margin-bottom: 30px ;
font-size: 28px;
font-weight: 800;
}

.form {
width: 100%;
display: flex;
gap: 18px;
margin-bottom: 15px;
margin-left: 15px;
}

label {
text-align: left;
margin-top: 10px;
margin-left: 10px;
font-size: 15px;
font-weight: bold;
}
.input-container {
display: flex;
flex-direction: column;
gap: 10px;
}
.input {
width: 100%;
border-radius: 20px;
border: 1px solid  teal;
outline: teal;
outline-color :  teal;
box-sizing: border-box;
padding: 12px 15px;
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
margin-top: 5px;
margin-bottom:0px;
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
margin-bottom:70px;
font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>