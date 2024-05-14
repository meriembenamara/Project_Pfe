<template>
  <div class="auth">
  <div class="container">
    <div class="image">
      <img src="@/assets/img_cnx.png" alt="Exemple d'image " width="100%" height="">
    </div>
   
   <div class="form-container">
    <p class="title">Se connecter</p>
    <form class="form">
      <label>Nom Utilisateur</label>
      <input type="email" class="input" placeholder="Entrez votre Nom...">
      <label>Mot de passe</label>
      <input type="password" class="input" placeholder="Entrez votre mot de passe...">
      <p class="page-link">
        <a @click="NavigationToPassword"> <span class="page-link-label">Mot de passe oublié?</span></a>
      </p>
      <button class="form-btn">Se connecter</button>
    </form>
    <p class="sign-up-label">
      Pas encore membre?  <a @click="NavigationToSignUp">
        <span class="sign-up-link">S'inscrire</span>
      </a>
    </p>
   
  </div>
</div>
</div>
</template>

<script>
// Import the axios library for making HTTP requests
const axios = require('axios');
export default {
  // Function that defines the component's initial data state
  data() { 
    return {
      username: '',   
      password: '', 
    };
  },
   // Object containing methods for the component
  methods: {

    // Asynchronous function to handle user login
    async login() { 
      try {
        const response = await axios.post('http://localhost:5000/api/users', { // Send a POST request to the user login endpoint
          username: this.username, // Include the username from the component's state
          password: this.password,  // Include the password from the component's state
        });

        console.log(response.data); // Log the response data from the server (usually contains success/failure message and potentially a JWT token)
      } catch (error) {
        console.log(error.response.data); // Log any errors encountered during the login process (e.g., invalid credentials, server issues)
      }
    },
  //  navigation
  NavigationToPassword() {
    this.$router.push('/ForgetPassword');
  },
  NavigationToSignUp() {
    this.$router.push('/signup');
  }

  },
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