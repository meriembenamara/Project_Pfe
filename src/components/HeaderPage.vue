<template>
    <div>
      <header>
        <div class="header-area header-transparent">
          <div class="main-header">
            <!-- Header Top -->
            <div class="header-top d-none d-lg-block">
              <div class="container-fluid">
                <div class="header-top-content d-flex justify-content-between align-items-center">
                  <div class="header-info-left">
                    <ul>
                      <li>+(123) 1234-567-8901</li>
                      <li>info@domain.com</li>
                      <li>Mon - Sat 8:00 - 17:30, Sunday - CLOSED</li>
                    </ul>
                  </div>
                  <div class="header-info-right">
                    <ul class="header-social">
                      <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Header Bottom -->
            <div class="header-bottom header-sticky">
              <div class="container-fluid">
                <div class="row align-items-center">
                  <!-- Logo -->
                  <div class="col-xl-2 col-lg-2 col-md-1">
                    <div class="logo">
                      <!-- Logo Container -->
                      <div class="logo-container">
                        <a href="/" class="big-logo">
                          <img src="/assets/img/logo/logo.png" alt="Logo">
                          <span class="text">EstimaPro</span>
                        </a>
                      </div>
                    </div>
                  </div>
  
                  <!-- Main Menu -->
                  <div class="col-xl-8 col-lg-8 col-md-8">
                    <div class="main-menu f-right d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li><router-link to="/">Acceuil</router-link></li>
                          <li><router-link to="/about">À Propos</router-link></li>
                          <li><router-link to="/projects">Projets</router-link></li>
                          <li><router-link to="/services">Services</router-link></li>
                          <li><router-link to="/avis">Avis</router-link></li>
                          <li><router-link to="/avis">Avis</router-link></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
  
                  <!-- Buttons -->
                  <div class="col-xl-2 col-lg-2 col-md-3">
                    <div class="header-right-btns f-right d-none d-lg-flex">
                      <a href="login" class="btn">Se connecter</a>
                      <a href="signup" class="btn">S'inscrire</a>
                    </div>
                  </div>
  
                  <!-- Mobile Menu -->
                  <div class="col-12">
                    <div class="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  </template>
  
    
    <script>
    export default {
      name: 'HeaderPage'
    }
    </script>
    
    <style scoped>
     .logo-container {
    display: flex;
    align-items: center;
  }
  
  .big-logo {
    display: flex;
    align-items: center;
    text-decoration: none; /* Removes underline from the link */
  }
  
  .big-logo img {
    width: 120px; /* Adjust the width of the logo */
    height: auto; /* Maintains aspect ratio */
  }
  
  .text {
    font-size: 30px; /* Adjust font size as needed */
    font-weight: bold;
    color: white /* Adjust spacing between logo and text */
  }
  .header-top-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  
  .header-info-left ul {
      display: flex;
      gap: 15px;
      list-style: none;
      margin: 0;
      padding: 0;
  }
  
  .header-info-right {
      margin-left: auto; /* Pushes the right info to the far right */
  }
  
  .header-social {
      display: flex;
      gap: 10px;
      list-style: none;
      margin: 0;
      padding: 0;
  }
  
  .header-social li a {
      text-decoration: none;
      color: inherit;
  }
  .header-right-btns {
    display: flex;
    align-items: center; /* Align items vertically */
    justify-content: flex-start; /* Align items to the start */
    gap: 10px; /* Space between the buttons */
  }
  
  .header-right-btns a {
    /* Button specific styles */
    color: white;
    font-weight: bold;
    background-color: rgb(19, 135, 255);
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
  }
  
  
  
  </style>
  
  