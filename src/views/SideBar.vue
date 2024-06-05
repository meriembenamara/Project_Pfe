<template>
    <aside class="h-screen">
      <nav class="h-full flex flex-col bg-white border-r shadow-sm">
        <div class="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            :class="`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`"
            alt=""
          />
          <button
            @click="toggleSidebar"
            class="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <component :is="expanded ? 'ChevronFirst' : 'ChevronLast'" />
          </button>
        </div>
  
        <ul class="flex-1 px-3">
          <SidebarItem
            v-for="item in sidebarItems"
            :key="item.text"
            :icon="item.icon"
            :text="item.text"
            :active="item.active"
            :alert="item.alert"
            :to="item.to"
          />
        </ul>
  
        <div class="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            class="w-10 h-10 rounded-md"
          />
          <div
            :class="`flex justify-between items-center overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`"
          >
            <div class="leading-4">
              <h4 class="font-semibold">John Doe</h4>
              <span class="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size="20" />
          </div>
        </div>
      </nav>
      <router-view />
    </aside>
  </template>
  
  <script>
  import { ref } from "vue";
  import SidebarItem from './SidebarItem.vue';
  import { Home, Settings, User } from "lucide-vue-next";
  
  export default {
    name: "SideBar",
    components: {
      SidebarItem,
      Home,
      Settings,
      User,
    },
    setup() {
      const expanded = ref(true);
  
      const toggleSidebar = () => {
        expanded.value = !expanded.value;
      };
  
      const sidebarItems = ref([
      
      ]);
  
      return {
        expanded,
        toggleSidebar,
        sidebarItems,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>