<template>
    <div class="select-menu" :class="{ active: isActive }">
     <!-- Boxicons -->
	<link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>

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
    <main>
    <Router-view></Router-view></main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isActive: false,
        selectedOption: 'Select your option', // Default selected option text
        options: [ // Your options data
          { text: 'Ingénieur'},
          { text: 'Architecte'},
          { text: 'Client' },
        ]
      };
    },
    methods: {
      toggleDropdown() {
        this.isActive = !this.isActive;
      },
      selectOption(option) {
        this.selectedOption = option.text;
        this.isActive = false; // Close dropdown after selecting an option
      }
    }
  };
  </script>
  
  <style scoped>
 /* ===== Google Font Import - Poppins ===== */

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
body{
    background: #E3F2FD;
}
.select-menu{
    width: 380px;
    margin: 140px auto;
}
.select-menu .select-btn{
    display: flex;
    height: 55px;
    background: #fff;
    padding: 20px;
    font-size: 18px;
    font-weight: 400;
    border-radius: 8px;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
}
.select-btn i{
    font-size: 25px;
    transition: 0.3s;
}
.select-menu.active .select-btn i{
    transform: rotate(-180deg);
}
.select-menu .options{
    position: relative;
    padding: 20px;
    margin-top: 10px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 0 3px rgba(0,0,0,0.1);
    display: none;
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
  