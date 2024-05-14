<template>
  <div class="container">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- Boxicons -->
	<link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
    <div class="image">
      <img src="@/assets/img_cnx.png" alt="Exemple d'image" width="105%">
    </div>

   <div class="form-container">
    <p class="title">S'inscrire</p>
    <form class="form">
      <div class="input-container">
      <label>Prènom</label>
      <input type="text" class="input" placeholder="Entrez votre Prènom...">
      </div>
      <div class="input-container">
      <label>Nom</label>
      <input type="text" class="input" placeholder="Entrez votre Nom...">
      </div>
    </form>
    <form class="form">
      <div class="input-container">
      <label>Email</label>
      <input type="email" class="input" placeholder="Entrez votre Email...">
      </div>
      <div class="input-container">
      <label>Rôle</label>
<!-- -->      
      <div class="select-menu " :class="{ active: isActive }">
      <div class="select-btn" @click="toggleDropdown">
        <span class="sBtn-text">{{ selectedOption }}</span>
        <i class="bx bx-chevron-down"></i>
      </div>
      <ul class="options">
        <li class="option" v-for="(option, index) in options" :key="index" @click="selectOption(option)">
          <i :class="option.icon" :style="{ color: option.color }"></i>
          <span class="option-text">{{ option.text }}</span>
        </li>
      </ul>
    </div>
       <!-- -->
      </div>
    </form>
    <form class="form">
      <div class="input-container">
      <label>Adresse</label>
      <input type="text" class="input" placeholder="Entrez votre Adresse...">
      </div>
      <div class="input-container">
      <label>Numèro de telephone</label>
      <input type="tel" class="input" placeholder="Entrez votre Mobile...">
      </div>
    </form>
    <form class="form">
      <div class="input-container">
      <label>Mot de passe</label>
      <input type="password" class="input" placeholder="Entrez votre mot de passe...">
      </div>
      <div class="input-container">
      <label>Confirmation</label>
      <input type="password" class="input" placeholder="Confirmer votre mot de passe...">
      </div>
    </form>
    <button class="form-btn">S'inscrire</button>
    <p class="sign-up-label">
      Vous avez déjà un compte?<a @click="NavigationToLogin">
      <span class="sign-up-link">Se connecter</span>
    </a>
    </p>


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
      //For select 
      isActive: false,
        selectedOption: 'Entez votre Rôle', // Default selected option text
        options: [ // Your options data
          { text: 'Ingénieur'},
          { text: 'Architecte'},
          { text: 'Client' },
        ],
        optionColors: { // Mapping des couleurs pour chaque option
        'Sélectionnez votre Rôle': '#fffff', // Couleur par défaut
        'Option 1': '#ff0000',
        'Option 2': '#00ff00',
        'Option 3': '#0000ff'
      }

    };
  },
   // Object containing methods for the component
  methods: {
    //For select 
    toggleDropdown() {
        this.isActive = !this.isActive;
      },
      selectOption(option) {
        this.selectedOption = option.text;
        this.isActive = false; // Close dropdown after selecting an option
      },

    // Asynchronous function to handle user registration
    async register() {
      try {
         // Send a POST request to the user registration endpoint
        const response = await axios.post('/api/users/register', {
          username: this.username, // Include the username from the component's state
          email: this.email,       // Include the email from the component's state
          password: this.password,  // Include the password from the component's state
        });

        console.log(response.data); // Log the response data from the server (usually contains success/failure message and potentially user information)
      } catch (error) {
        console.log(error.response.data); // Log any errors encountered during the registration process (e.g., validation errors, server issues)
      }
    },

     //  navigation
  NavigationToLogin() {
    this.$router.push('/login');
  },

  }
   
};
</script>

<style scoped>
.container {
  display: flex; 
width: 100%;

/* height: 100%;
background-color: #fff;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 10px;
box-sizing: border-box; */


}
.image {
flex: 1.5; 
text-align: center; 
margin-left: 30px;
margin-right: 60px;
margin-top: 70px; 

}
.form-container {
flex: 1.5; 
width: 100%;
height: 100%;
background-color: #fff;
margin-left: 50px;
margin-right: 40px;
margin-top: 20px;
margin-bottom: 10px;
justify-content: center;
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
flex: 1.5;
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
margin-top: 10px;
margin-bottom: 10px;

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
select {
width: 100%;
border-radius: 20px;
border: 1px solid  teal;
outline: teal;
outline-color :  teal;
box-sizing: border-box;
padding: 12px 15px;
}
.bx{
  color:teal ;
}


.select-menu .select-btn{
    display: flex; 
    background: #fff;
   
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
   
    width: 100%;
    border-radius: 20px;
    border: 1px solid  teal;
    outline: teal;
    outline-color :  teal;
    box-sizing: border-box;
    padding: 12px 15px;

}
.select-btn i{
    font-size: 25px;
    transition: 0.3s;
}
.select-menu.active .select-btn i{
    transform: rotate(-180deg);
}

.select-menu {
    position: relative;
}

.options {
    position: absolute;
    top: calc(100% + 10px); /* Position the dropdown below the select button */
    left: 0;
    width: 100%;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    display: none;
    z-index: 1; /* Ensure the dropdown is above other content */
}
.select-menu.active .options{
    display: block;
}
.options .option{
    display: flex;
    height: 55px;
    cursor: pointer;
    padding: 0 16px;
    border-radius: 8px;
    align-items: center;
    background: #fff;
}
.options .option:hover{
    background: #F2F2F2;
}
.option i{
    font-size: 25px;
    margin-right: 12px;
}
.option .option-text{
    font-size: 18px;
    color: #333;
}



</style>