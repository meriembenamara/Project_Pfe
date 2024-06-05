<template>
    <aside class="h-screen">
      <nav class="h-full flex flex-col bg-white border-r shadow-sm">
        <div class="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            alt=""
            :class="{ 'overflow-hidden transition-all': true, 'w-32': expanded, 'w-0': !expanded }"
          />
          <button @click="toggleExpanded" class="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
            <svg v-if="expanded" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M9.354 6.789a.5.5 0 00-.708 0l-6 6a.5.5 0 00.708.708l6-6a.5.5 0 000-.708z"></path></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13.293 3.293a.5.5 0 01.707 0L16 8l-2.707 4.707a.5.5 0 01-.707-.707L16 8z"></path></svg>
          </button>
        </div>
        <ul class="flex-1 px-3">
          <slot name="items" />
        </ul>
        <div class="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            class="w-10 h-10 rounded-md"
          />
          <div :class="{ 'flex justify-between items-center': true, 'overflow-hidden transition-all': true, 'w-52 ml-3': expanded, 'w-0': !expanded }">
            <div class="leading-4">
              <h4 class="font-semibold">John Doe</h4>
              <span class="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
              <path d="M12 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM7 6a1 1 0 011-1h8a1 1 0 011 1v8a1 1 0 01-1 1H8a1 1 0 01-1-1V6z" clip-rule="evenodd" fill-rule="evenodd"></path>
            </svg>
          </div>
        </div>
      </nav>
    </aside>
  </template>
  
  <script>
  export default {
    data() {
      return {
        expanded: true,
      };
    },
    methods: {
      toggleExpanded() {
        this.expanded = !this.expanded;
      },
    },
  };
  </script>
  
  <style scoped>
    /* Add your custom styles here */
  </style>