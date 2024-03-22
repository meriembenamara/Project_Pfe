<template>
  <div class="container">
    <div class="image">
      <img src="@/assets/img_cnx.png" alt="Exemple d'image">
    </div>
   
   <div class="form-container">
    <p class="title">Se connecter</p>
    <form class="form">
      <label>Nom Utilisateur</label>
      <input type="email" class="input" placeholder="Entrez votre Nom...">
      <label>Mot de passe</label>
      <input type="password" class="input" placeholder="Entrez votre mot de passe...">
      <p class="page-link">
        <span class="page-link-label">Mot de passe oublié?</span>
      </p>
      <button class="form-btn">Se connecter</button>
    </form>
    <p class="sign-up-label">
      Pas encore membre?<span class="sign-up-link">S'inscrire</span>
    </p>
   
  </div>
</div>
</template>

<script>
export default {
  name: 'LogIn',
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
  height: 10%;
flex: 1.5; 
text-align: right; 
font-size: xx-large;
margin-left: 30px;
margin-right: 40px;
margin-top: 50px;
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
margin-bottom: 15px;
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
margin: 0;
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