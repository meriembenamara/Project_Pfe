<template>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css" rel="stylesheet">
 
<div>

    <div class="container light-style flex-grow-1 container-p-y ">
        <div class="d-flex justify-content-between align-items-center">
    <h4 class="font-weight-bold py-3 mb-2 mt-2">
        Paramètres du compte
    </h4>
    <div class="text-blue-500">
        <div class="d-flex align-items-center mt-2" @click="confirmDelete(user._id)">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
        <span class="text-blue-500 mr-2 ml-1 -mb-3"><h6>Supprimer Compte</h6> </span>
       
    </div>
    </div>
</div>


        <div class="card overflow-hidden">
            <div class="row no-gutters row-bordered row-border-light">
                <div class="col-md-3 pt-0">
                    <div class="list-group list-group-flush account-settings-links">
                        <a class="list-group-item list-group-item-action active" data-toggle="list"
                            href="#account-general">Informations Générales</a>
                        <a class="list-group-item list-group-item-action" data-toggle="list"
                            href="#account-info">Informations Personnelles</a>
                      
                            <a class="list-group-item list-group-item-action" data-toggle="list"
                            href="#account-change-password">Changer Mot De Passe</a>

                        <a class="list-group-item list-group-item-action" data-toggle="list"
                            href="#account-notifications">Notifications</a>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="tab-content">
                        <div class="tab-pane fade active show" id="account-general">
                            <div class="card-body media align-items-center">
                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt
                                    class="d-block ui-w-80">
                                <div class="media-body ml-4">
                                    <label class="btn btn-outline-primary">
                                        Upload new photo
                                        <input type="file" class="account-settings-fileinput">
                                    </label> &nbsp;
                                    <button type="button" class="btn btn-default md-btn-flat">Reset</button>
                                </div>
                            </div>
                            <hr class="border-light m-0">
                            <div class="card-body">
                                <div class="form-group">
                                    <label class="form-label text-left">Prènom</label>
                                    <input type="text" class="form-control mb-1" v-model="user.First_name">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Nom</label>
                                    <input type="text" class="form-control" v-model="user.name" >
                                </div>
                             
                                <div class="form-group">
                                    <label class="form-label">Rôle</label>
                                    <input type="text" class="form-control" v-model="user.selectedRole">
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="account-change-password">
                            <div class="card-body pb-2">
                                <div class="form-group">
                                    <label class="form-label">Mot de passe</label>
                                    <input type="password" class="form-control" v-model="user.anc_password">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Nouveau mot de passe</label>
                                    <input type="password" class="form-control" placeholder="Entrez voter nouveau mot de passe" v-model="user.new_password">
                                </div>
                                <div class="form-group">
                                    <label class="form-label" >Confirmer nouveau mot de passe</label>
                                    <input type="password" class="form-control" placeholder="Confirmer nouveau mot de passe"  v-model="user.conf_new_password">
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="account-info">
                            <div class="card-body pb-2">
                                
                                <div class="form-group">
                                    <label class="form-label">Date de naissance </label>
                                    <input type="text" class="form-control" v-model="user.Birthday">
                                </div>
                                <div class="form-group">
                                    <label class="form-label" >Adresse</label>
                                    <input type="text" class="form-control"  v-model="user.address">
                                </div>
                            </div>
                            <hr class="border-light m-0">
                            <div class="card-body pb-2">
                                <h6 class="mb-4 font-weight-bold">Contacts</h6>
                                <div class="form-group">
                                    <label class="form-label" >Numèro de telephone</label>
                                    <input type="text" class="form-control" v-model="user.num_tel">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Email</label>
                                    <input type="email" class="form-control" v-model="user.email">
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="account-notifications">
                            <div class="card-body pb-2">
                                <h6 class="mb-4 font-weight-bold ">Activity</h6>
                                <div class="form-group">
                                    <label class="switcher">
                                        <input type="checkbox" class="switcher-input" checked>
                                        <span class="switcher-indicator">
                                            <span class="switcher-yes"></span>
                                            <span class="switcher-no"></span>
                                        </span>
                                        <span class="switcher-label">Email me when someone comments on my article</span>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="switcher">
                                        <input type="checkbox" class="switcher-input" checked>
                                        <span class="switcher-indicator">
                                            <span class="switcher-yes"></span>
                                            <span class="switcher-no"></span>
                                        </span>
                                        <span class="switcher-label">Email me when someone answers on my forum
                                            thread</span>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="switcher">
                                        <input type="checkbox" class="switcher-input">
                                        <span class="switcher-indicator">
                                            <span class="switcher-yes"></span>
                                            <span class="switcher-no"></span>
                                        </span>
                                        <span class="switcher-label">Email me when someone follows me</span>
                                    </label>
                                </div>
                            </div>
                            <hr class="border-light m-0">
                            <div class="card-body pb-2">
                                <h6 class="mb-4 font-weight-bold ">Application</h6>
                                <div class="form-group">
                                    <label class="switcher">
                                        <input type="checkbox" class="switcher-input" checked>
                                        <span class="switcher-indicator">
                                            <span class="switcher-yes"></span>
                                            <span class="switcher-no"></span>
                                        </span>
                                        <span class="switcher-label">News and announcements</span>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="switcher">
                                        <input type="checkbox" class="switcher-input">
                                        <span class="switcher-indicator">
                                            <span class="switcher-yes"></span>
                                            <span class="switcher-no"></span>
                                        </span>
                                        <span class="switcher-label">Weekly product updates</span>
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label class="switcher">
                                        <input type="checkbox" class="switcher-input" checked>
                                        <span class="switcher-indicator">
                                            <span class="switcher-yes"></span>
                                            <span class="switcher-no"></span>
                                        </span>
                                        <span class="switcher-label">Weekly blog digest</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-right mt-3">
            <button type="submit" class="btn btn-primary" @click="updateUser">Enregistrer</button>&nbsp;
            <button type="reset" class="btn btn-default">Annuler</button>

        </div>
    </div>

    

</div>


</template>


<script>
import axios from 'axios';
export default {
  name: 'GererProfil',
  data() {
    return {
     
      user: [], // Initialiser l'utilisateur à null
      ////////////////////////////////////////////////////////////////
      newData: {
      First_name: '',
      name: '',
      selectedRole: '',
      num_tel: '',
      Birthday: '',
      address: '',
      anc_password: '',
      new_password: '',
      conf_new_password: ''
    }
    };
  },

   
  mounted() {
  
    // Inclure jQuery
    const scriptJQuery = document.createElement('script');
    scriptJQuery.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    scriptJQuery.onload = () => {
        console.log('jQuery chargé avec succès');
    };
    scriptJQuery.onerror = (error) => {
        console.error('Erreur lors du chargement de jQuery :', error);
    };
    document.body.appendChild(scriptJQuery);

    // Inclure Bootstrap JS
    const scriptBootstrap = document.createElement('script');
    scriptBootstrap.src = "https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.bundle.min.js";
    scriptBootstrap.onload = () => {
        console.log('Bootstrap chargé avec succès');
    };
    scriptBootstrap.onerror = (error) => {
        console.error('Erreur lors du chargement de Bootstrap :', error);
    };
    document.body.appendChild(scriptBootstrap);

    this.getuserData();

  },

  methods: {
    async deleteUser(userId) {
      const response = await axios.delete(`http://localhost:5000/api/users/delete/${userId}`);
      if (response.status === 200) {
        this.users = this.users.filter(user => user.id !== userId);
        console.log(`Utilisateur supprimé avec succès.`);
        alert("Utilisateur supprimé avec succès.")
        
      } else {
        console.error(`Échec de la suppression de l'utilisateur avec l'ID ${userId} :`, response.data);
      }
    },

     async  confirmDelete(userId) {
  if (confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
    this.deleteUser(userId);
    window.location.reload();
  }
},

   

    //async updateUser(userId) {
        async getuserData() {
  try {
    // Faire une requête HTTP GET pour récupérer les données de l'utilisateur
    const response = await axios.get(`http://localhost:5000/api/users/66460653ea52b95a4dd38a1b`); // Remplacer '/api/user/' par l'URL de votre endpoint backend pour récupérer un utilisateur par ID
    // Mettre à jour les données de l'utilisateur dans le composant avec les données reçues de l'API
    this.user = response.data;
    console.log('Récupération avec succès');
  } catch (error) {
    console.log('Erreur lors de la récupération des données utilisateur :', error);
    // Gérer les erreurs de requête, par exemple afficher un message d'erreur à l'utilisateur
  }
},

async updateUser() {
  try {
    // Données mises à jour de l'utilisateur
    const updatedData = {
      // Mettre à jour les données de l'utilisateur ici
      name: this.user.name,
      First_name: this.user.First_name,
      email: this.user.email,
      selectedRole: this.user.selectedRole,
      num_tel: this.user.num_tel,
      Birthday: this.user.Birthday,
      address: this.user.address,
      anc_password: this.user.anc_password,
      new_password: this.user.new_password,
      conf_new_password: this.user.conf_new_password
    };

    // Faire une requête HTTP PUT pour mettre à jour les données de l'utilisateur
    const response = await axios.put(`http://localhost:5000/api/user/updateUser/66460653ea52b95a4dd38a1b`, updatedData);
    // Mettre à jour les données de l'utilisateur dans le composant avec les données mises à jour de l'API
    this.user = response.data;
    console.log('Mise à jour avec succès');

  } catch (error) {
    console.error('Erreur lors de la mise à jour des données de l\'utilisateur :', error);
    // Gérer les erreurs de requête, par exemple afficher un message d'erreur à l'utilisateur
  }
}



},


};

</script>



<style>
.form-group{
  text-align: left;
  margin-left:10px;
}
h4{
  text-align: left;
}
h6{
  text-align: left;
  margin-left:10px;
}
.media-body{
  text-align: left ;
}
.ui-w-80 {
    width : 80px !important;
    height: auto;
}

.btn-default {
    border-color: rgba(24, 28, 33, 0.1);
    background  : rgba(0, 0, 0, 0);
    color       : #4E5155;
}

label.btn {
    margin-bottom: 0;
}

.btn-outline-primary {
    border-color: #26B4FF;
    background  : transparent;
    color       : #26B4FF;
}

.btn {
    cursor: pointer;
}

.text-light {
    color: #babbbc !important;
}

.btn-facebook {
    border-color: rgba(0, 0, 0, 0);
    background  : #3B5998;
    color       : #fff;
}

.btn-instagram {
    border-color: rgba(0, 0, 0, 0);
    background  : #000;
    color       : #fff;
}

.card {
    background-clip: padding-box;
    box-shadow     : 0 1px 4px rgba(24, 28, 33, 0.012);
}

.row-bordered {
    overflow: hidden;
}

.account-settings-fileinput {
    position  : absolute;
    visibility: hidden;
    width     : 1px;
    height    : 1px;
    opacity   : 0;
}

.account-settings-links .list-group-item.active {
    font-weight: bold !important;
}

html:not(.dark-style) .account-settings-links .list-group-item.active {
    background: transparent !important;
}

.account-settings-multiselect~.select2-container {
    width: 100% !important;
}

.light-style .account-settings-links .list-group-item {
    padding     : 0.85rem 1.5rem;
    border-color: rgba(24, 28, 33, 0.03) !important;
}

.light-style .account-settings-links .list-group-item.active {
    color: #4e5155 !important;
}

.material-style .account-settings-links .list-group-item {
    padding     : 0.85rem 1.5rem;
    border-color: rgba(24, 28, 33, 0.03) !important;
}

.material-style .account-settings-links .list-group-item.active {
    color: #4e5155 !important;
}

.dark-style .account-settings-links .list-group-item {
    padding     : 0.85rem 1.5rem;
    border-color: rgba(255, 255, 255, 0.03) !important;
}

.dark-style .account-settings-links .list-group-item.active {
    color: #fff !important;
}

.light-style .account-settings-links .list-group-item.active {
    color: #4E5155 !important;
}

.light-style .account-settings-links .list-group-item {
    padding     : 0.85rem 1.5rem;
    border-color: rgba(24, 28, 33, 0.03) !important;
}
</style>

