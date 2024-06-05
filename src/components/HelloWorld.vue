<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div>
<!-- Comptes-->
<section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-60 mt-20">
  <h2 class="text-lg font-bold text-gray-60 capitalize dark:text-white">Informations Générales</h2>
  
  <form>
      <div class=" gap-2 gap-6 mt-4 ">
          <div class="mb-5">
              <label class="font-semibold text-md text-gray-60 " for="username">Prènom</label>
              <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          </div>

          <div class="mb-5">
              <label class="font-semibold text-md text-gray-60" for="emailAddress">Nom</label>
              <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          </div>

          <div class="mb-5">
              <label class="font-semibold text-md text-gray-60" for="password">Rôle</label>
              <input id="password" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          </div>

         
      </div>

      <div class="flex justify-end mt-6 ">
          <button class="inline-block mr-2 py-2 px-6  rounded-xl border border-blue-500 bg-white text-blue-500 hover:bg-blue-500 hover:text-white focus:text-blue-500 focus:bg-gray-200 font-bold leading-loose transition duration-200">
Annuler
</button>
          <button class="inline-block py-2 px-6 rounded-xl  bg-blue-500 hover:bg-white hover:text-blue-500 focus:text-blue-500 focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200">
Enregistrer
</button>

      </div>
  </form>

</section>

<section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-60 mt-20">
  <h2 class="text-lg font-bold text-gray-60 capitalize dark:text-white">Informations Personnelles</h2>
  
  <form>
      <div class=" gap-2 gap-6 mt-4 ">
          <div class="mb-5">
              <label class="font-semibold text-md text-gray-60 " for="username">Adresse</label>
              <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          </div>

          <div class="mb-5">
              <label class="font-semibold text-md text-gray-60" for="password">Email</label>
              <input id="password" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          </div>

          <div class="mb-5">
              <label class="font-semibold text-md text-gray-60" for="emailAddress">Numèro de telephone</label>
              <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          </div>

          <div class="mb-5">
              <label class="font-semibold text-md text-gray-60" for="password">Rôle</label>
              <input id="password" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          </div>

         
      </div>

      <div class="flex justify-end mt-6 ">
          <button class="inline-block mr-2 py-2 px-6  rounded-xl border border-blue-500 bg-white text-blue-500 hover:bg-blue-500 hover:text-white focus:text-blue-500 focus:bg-gray-200 font-bold leading-loose transition duration-200">
Annuler
</button>
          <button class="inline-block py-2 px-6 rounded-xl  bg-blue-500 hover:bg-white hover:text-blue-500 focus:text-blue-500 focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200">
Enregistrer
</button>

      </div>
  </form>

</section>


<!-- Mdp-->
<section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-60 mt-20">
  <h2 class="text-lg font-bold text-gray-60 capitalize dark:text-white">Changer votre mot de passe</h2>
  
  <form>
      <div class=" gap-2 gap-6 mt-4 ">
          <div class="mb-5">
              <label class="font-semibold text-md text-gray-60 " for="username">Adresse</label>
              <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          </div>

          <div class="mb-5">
              <label class="font-semibold text-md text-gray-60" for="emailAddress">Numèro de telephone</label>
              <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          </div>

          <div class="mb-5">
              <label class="font-semibold text-md text-gray-60" for="password">Rôle</label>
              <input id="password" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          </div>

         
      </div>

      <div class="flex justify-end mt-6 ">
          <button class="inline-block mr-2 py-2 px-6  rounded-xl border border-blue-500 bg-white text-blue-500 hover:bg-blue-500 hover:text-white focus:text-blue-500 focus:bg-gray-200 font-bold leading-loose transition duration-200">
Annuler
</button>
          <button class="inline-block py-2 px-6 rounded-xl  bg-blue-500 hover:bg-white hover:text-blue-500 focus:text-blue-500 focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200">
Enregistrer
</button>

      </div>
  </form>

</section>




<!-- Autre-->
<!-- component -->
<div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center mt-20 mb-20">
<div class="container max-w-screen-lg mx-auto">
  <div>
    <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
      <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
        <div class="text-gray-600">
          <p class="font-medium text-lg">Personal Details</p>
          <p>Please fill out all the fields.</p>
        </div>

        <div class="lg:col-span-2">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
            <div class="md:col-span-5">
              <label for="full_name">Full Name</label>
              <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
            </div>

            <div class="md:col-span-5">
              <label for="email">Email Address</label>
              <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="email@domain.com" />
            </div>

            <div class="md:col-span-3">
              <label for="address">Address / Street</label>
              <input type="text" name="address" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
            </div>

            <div class="md:col-span-2">
              <label for="city">City</label>
              <input type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
            </div>

            <div class="md:col-span-2">
              <label for="country">Country / region</label>
              <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                <input name="country" id="country" placeholder="Country" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                  <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                  <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                </button>
              </div>
            </div>

            <div class="md:col-span-2">
              <label for="state">State / province</label>
              <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                <input name="state" id="state" placeholder="State" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" value="" />
                <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                  <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                  <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                </button>
              </div>
            </div>

            <div class="md:col-span-1">
              <label for="zipcode">Zipcode</label>
              <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
            </div>

            <div class="md:col-span-5">
              <div class="inline-flex items-center">
                <input type="checkbox" name="billing_same" id="billing_same" class="form-checkbox" />
                <label for="billing_same" class="ml-2">My billing address is different than above.</label>
              </div>
            </div>

            <div class="md:col-span-2">
              <label for="soda">How many soda pops?</label>
              <div class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
                <input name="soda" id="soda" placeholder="0" class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent" value="0" />
                <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2 fill-current" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
    
            <div class="md:col-span-5 text-right">
              <div class="inline-flex items-end">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  
</div>
</div>

<!--Autre-->

<!-- component -->
<section class="py-40 bg-gray-100  bg-opacity-50 h-screen">
    <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
      <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-indigo-400 rounded-t">
        <div class="max-w-sm mx-auto md:w-full md:mx-0">
          <div class="inline-flex items-center space-x-4">
            <img
              class="w-10 h-10 object-cover rounded-full"
              alt="User avatar"
              src="https://avatars3.githubusercontent.com/u/72724639?s=400&u=964a4803693899ad66a9229db55953a3dbaad5c6&v=4"
            />

            <h1 class="text-gray-600">Charly Olivas</h1>
          </div>
        </div>
      </div>
      <div class="bg-white space-y-6">
        <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
          <h2 class="md:w-1/3 max-w-sm mx-auto">Account</h2>
          <div class="md:w-2/3 max-w-sm mx-auto">
            <label class="text-sm text-gray-400">Email</label>
            <div class="w-full inline-flex border">
              <div class="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                <svg
                  fill="none"
                  class="w-6 text-gray-400 mx-auto"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <input
                type="email"
                class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                placeholder="email@example.com"
                disabled
              />
            </div>
          </div>
        </div>

        <hr />
        <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-500 items-center">
          <h2 class="md:w-1/3 mx-auto max-w-sm">Personal info</h2>
          <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
            <div>
              <label class="text-sm text-gray-400">Full name</label>
              <div class="w-full inline-flex border">
                <div class="w-1/12 pt-2 bg-gray-100">
                  <svg
                    fill="none"
                    class="w-6 text-gray-400 mx-auto"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  placeholder="Charly Olivas"
                />
              </div>
            </div>
            <div>
              <label class="text-sm text-gray-400">Phone number</label>
              <div class="w-full inline-flex border">
                <div class="pt-2 w-1/12 bg-gray-100">
                  <svg
                    fill="none"
                    class="w-6 text-gray-400 mx-auto"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  placeholder="12341234"
                />
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
          <h2 class="md:w-4/12 max-w-sm mx-auto">Change password</h2>

          <div class="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
            <div class="w-full inline-flex border-b">
              <div class="w-1/12 pt-2">
                <svg
                  fill="none"
                  class="w-6 text-gray-400 mx-auto"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <input
                type="password"
                class="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                placeholder="New"
              />
            </div>
          </div>

          <div class="md:w-3/12 text-center md:pl-6">
            <button class="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right">
              <svg
                fill="none"
                class="w-4 text-white mr-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Update
            </button>
          </div>
        </div>

        <hr />
        <div class="w-full p-4 text-right text-gray-500">
          <button class="inline-flex items-center focus:outline-none mr-4">
            <svg
              fill="none"
              class="w-4 mr-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Delete account
          </button>
        </div>
      </div>
    </div>
  </section>


  </div>
  
</template>

<script setup>

</script>