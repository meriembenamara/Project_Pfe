<template>
  <div class="about">

	<!-- Boxicons -->
	<link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>

	<!-- SIDEBAR -->
	<section id="sidebar">
		<a href="#" class="brand">
			<i class='bx bx-building-house'></i>
			<span class="text">EstimaPro</span>
		</a>
		<ul class="side-menu top">
			<li class="active">
				<router-link :to="'/DashAdmin'">
				<a href="#">
					<i class='bx bxs-dashboard' ></i>
					<span class="text">Dashboard</span>
				</a>
			</router-link>
			</li>

			<li>
			<router-link :to="'/users'">
				<a href="#">
					<i class='bx bxs-group' ></i>
					<span class="text">Users</span>
				</a>
			</router-link>
			</li>
			<li>
			<router-link :to="'/plans'">
				<a href="#">
					<i class='bx bx-image-alt'></i>
					<span class="text">Plans</span>
				</a>
			</router-link>
			</li>
			<li>
			<router-link :to="'/feedback'">
				<a href="#">
					<i class='bx bxs-message-dots' ></i>
					<span class="text">Feedbacks</span>
				</a>
			</router-link>
			</li>
		</ul>
		
	</section>
	<!-- SIDEBAR -->



	<!-- CONTENT -->
	<section id="content">
		<!-- NAVBAR -->
		<nav>
			<i class='bx bx-menu' @click=" toggleSidebar()" ></i>
			<div class="form-container">
        <form action="#">
            <div class="form-input">
                <input type="search" placeholder="Search...">
                <button type="submit" class="search-btn" @click=" toggleSearchForm()"><i class='bx bx-search'></i></button>
            </div>
        </form>
    </div>
			<!--<a href="#" class="notification">
				<i class='bx bx-message-dots '></i>
				<span class="num">4</span>
			</a>
		
			<router-link to="/MessagesList" class="nav-link">
			<div class="nav-name">
            <span class="name">Messages</span>
            <i class='bx bx-chevron-down'></i>
			dropdown-menu
	</div>
</router-link>-->

			<!--<a href="#" class="notification">
				<i class='bx bxs-bell' ></i>
				<span class="num">2</span>
			</a>
			<router-link to="/NotificationList" class="nav-link">
			<div class="nav-name">
            <a href="#" class=" nav-link " ><span class="name">Notification</span>
	<i class='bx bx-chevron-down'></i>
            </a>
        <dropdown-menu
            </div>
		</router-link>-->

			
		
   <div class="nav-item ">
    <a href="#" class="profile">
		<img class="object-cover w-8 h-8 rounded-full " src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="">

		</a>
	
	</div>
	<div class="nav-name">
  <a href="#" class=" nav-link " ><span class="name">Admin EstimaPro</span>
	<i class='bx bx-chevron-down'></i>
  </a>
  <ul class="dropdown-menu hidden">
    <li>  <a href="#" class="dropdown-item">My Profile</a></li>
    <li> <router-link to="/gererprofil"> <a href="#" class="dropdown-item">Settings</a></router-link></li>
    <li>  <a href="#" class="dropdown-item">Log Out</a></li>
  </ul>
</div>

		</nav>
		<!-- NAVBAR -->

		<!-- MAIN -->
		<main>
			<router-view></router-view>
		</main>
		<!-- MAIN -->
	</section>
	<!-- CONTENT -->

  </div>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('hide');
    },
    toggleSearchForm() {
      const searchForm = document.querySelector('#content nav form');
      const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
      if (window.innerWidth < 576) {
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
          searchButtonIcon.classList.replace('bx-search', 'bx-x');
        } else {
          searchButtonIcon.classList.replace('bx-x', 'bx-search');
        }
      }
    },
 
    /**
     * Fonction sidebar
     */
    highlightSideMenuItem() {
      const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
      allSideMenu.forEach(item => {
        const li = item.parentElement;
        item.addEventListener('click', function () {
          allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
          });
          li.classList.add('active');
        });
      });
    },
  },
  mounted() {
    this.highlightSideMenuItem(); 
  },
  
};
</script>

<style >
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
a {
	text-decoration: none;
}

li {
	list-style: none;
}

:root {
	--poppins: 'Poppins', sans-serif;
	--lato: 'Lato', sans-serif;

	--light: #F9F9F9;
	--blue: #3C91E6;
	--light-blue: #CFE8FF;
	--grey: #eee;
	--dark-grey: #AAAAAA;
	--dark: #342E37;
	--red: #DB504A;
	--yellow: #FFCE26;
	--light-yellow: #FFF2C6;
	--orange: #FD7238;
	--light-orange: #FFE0D3;
}

body.dark {
	--light: #0C0C1E;
	--grey: #060714;
	--dark: #FBFBFB;
}

body {
	background-color: white;
	overflow-x: hidden;
}


/* SIDEBAR */
#sidebar {
	position: fixed;
	top: 0;
	left: 0;
	width: 280px;
	height: 100%;
	background: var(--light);
	z-index: 2000;
	font-family: var(--lato);
	transition: .3s ease;
	overflow-x: hidden;
	scrollbar-width: none;
}
#sidebar :state(webkit-scrollbar) {
	display: none;
}
#sidebar.hide {
	width: 60px;
}
#sidebar .brand {
	font-size: 24px;
	font-weight: 700;
	height: 56px;
	display: flex;
	align-items: center;
	color: var(--blue);
	position: sticky;
	top: 0;
	left: 0;
	background: var(--light);
	z-index: 500;
	padding-bottom: 20px;
	box-sizing: content-box;
}
#sidebar .brand .bx {
	min-width: 60px;
	display: flex;
	justify-content: center;
}
#sidebar .side-menu {
	width: 100%;
	margin-top: 48px;
}
#sidebar .side-menu li {
	height: 52px;
	background: transparent;
	margin-left: 6px;
	border-radius: 48px 0 0 48px;
	padding: 4px;
}
#sidebar .side-menu li.active {
	background: white;
	position: relative;
}
#sidebar .side-menu li.active::before {
	content: '';
	position: absolute;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	top: -40px;
	right: 0;
	box-shadow: 20px 20px 0 white;
	z-index: -1;
}
#sidebar .side-menu li.active::after {
	content: '';
	position: absolute;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	bottom: -40px;
	right: 0;
	box-shadow: 20px -20px 0 white;
	z-index: -1;
}
#sidebar .side-menu li a {
	width: 100%;
	height: 100%;
	background: var(--light);
	display: flex;
	align-items: center;
	border-radius: 48px;
	font-size: 20px;
	color: var(--dark);
	white-space: nowrap;
	overflow-x: hidden;

}
#sidebar .side-menu.top li.active a {
	color: var(--blue);
}
#sidebar.hide .side-menu li a {
	width: calc(48px - (4px * 2));
	transition: width .3s ease;
}
#sidebar .side-menu li a.logout {
	color: var(--red);
}
#sidebar .side-menu.top li a:hover {
	color: var(--blue);
}
#sidebar .side-menu li a .bx {
	min-width: calc(60px  - ((4px + 6px) * 2));
	display: flex;
	justify-content: center;
	
}
/* SIDEBAR */


/* CONTENT */
#content {
	position: relative;
	width: calc(100% - 280px);
	left: 280px;
	transition: .3s ease;
}
#sidebar.hide ~ #content {
	width: calc(100% - 60px);
	left: 60px;
}

/* NAVBAR */
.nav-bar {
    display: flex;
    justify-content: center; /* Centre les éléments horizontalement */
    align-items: center; /* Centre les éléments verticalement */
    position: relative;
}

.nav-bar i.bx-menu {
    position: absolute;
    left: 0; /* Aligne l'icône de menu à gauche */
    margin-left: 10px; /* Ajuste la marge selon vos besoins */
}

.form-container {
    display: flex;
    justify-content: center; /* Centre le formulaire de recherche horizontalement */
    flex-grow: 1;
}

.form-input {
    display: flex;
    align-items: center;
}

input[type="search"] {
    padding: 5px;
}

.search-btn {
    background: none;
    border: none;
    cursor: pointer;
}

#content nav {
	height: 60px;
	background: var(--light);
	padding: 0 24px;
	display: flex;
	align-items: center;
	grid-gap: 10px;
	font-family: var(--lato);
	position: sticky;
	top: 0;
	left: 0px;
	z-index: 1000;
}
#content nav::before {
	content: '';
	position: absolute;
	width: 40px;
	height: 40px;
	bottom: -40px;
	left: 0;
	border-radius: 50%;
	box-shadow: -20px -20px 0 var(--light);
}
#content nav a {
	color: var(--dark);
}
#content nav .bx .bx-menu {
	cursor: pointer;
	color: var(--dark);
	margin-left:10px;
}

#content nav .bx .bx-msg .bx-notf {
	margin-left:10px;
}
#content nav .nav-link {
	font-size: 16px;
	
}
#content nav .nav-link:hover {
	color: var(--blue);
}
#content nav form {
	max-width: 400px;
	width: 100%;
	margin-right: auto;
}
#content nav form .form-input {
	display: flex;
	align-items: center;
	height: 36px;
}
#content nav form .form-input input {
	flex-grow: 1;
	padding: 0 16px;
	height: 100%;
	border: none;
	background: var(--grey);
	border-radius: 36px 0 0 36px;
	outline: none;
	width: 100%;
	color: var(--dark);
	
}
#content nav form .form-input button {
	width: 36px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: var(--blue);
	color: var(--light);
	font-size: 18px;
	border: none;
	outline: none;
	border-radius: 0 36px 36px 0;
	cursor: pointer;
}
#content nav .notification {
	font-size: 25px;
	position: relative;
}
#content nav .notification .num {
	position: absolute;
	top: -6px;
	right: -6px;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 2px solid var(--light);
	background: var(--red);
	color: var(--light);
	font-weight: 700;
	font-size: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
}
#content nav .profile img {
	width: 36px;
	height: 36px;
	object-fit: cover;
	border-radius: 50%;
}

.nav-item {
  position: relative; /* Needed for proper dropdown positioning */
  display: inline-block; /* Allow multiple items side-by-side */
}
.nav-name {
  position: relative; /* Needed for proper dropdown positioning */
 
}

.dropdown-menu {
  position: absolute;
  top: 50%; /* Position below the toggle */
  left: 0;
  margin-top: 28px;
  width: 150px;
  list-style: none;
  padding: 5px;
  background: var(--light);
  border: none;
  border-radius: 5%; /* Remove default border-radius */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Add optional shadow */
  opacity: 0; /* Initially hide the dropdown */
  visibility: hidden; /* Initially hide the dropdown content */
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out; /* Add smooth transition */
}

.nav-name:hover .dropdown-menu,
.nav-link.dropdown-toggle:focus + .dropdown-menu {
  position: bottom; /* Needed for proper dropdown positioning */
  display: inline-block; /* Allow multiple items side-by-side */
  opacity: 1;
  visibility: visible; /* Show the dropdown on hover or focus */
}

.dropdown-menu li {
  padding: 5px 10px; /* Adjust padding for menu items */
}

.dropdown-menu a {
  color: #333; /* Adjust link color */
  text-decoration: none; /* Remove underline */
  transition: color 0.3s ease-in-out; /* Add smooth hover effect */
}

.dropdown-menu a:hover {
  color: #007bff; /* Adjust hover color */
}
/* NAVBAR */





/* MAIN */
#content main {
	width: 100%;
	padding: 36px 24px;
	font-family: var(--poppins);
	max-height: calc(100vh - 56px);
	overflow-y: auto;
}

</style>


