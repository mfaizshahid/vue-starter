// Utilities
import { defineStore } from 'pinia'
import {computed} from "vue";
import { useDisplay } from 'vuetify'


export const useAppStore = defineStore('app', ()=>{
  const sidebarDrawer = ref<boolean>(true)
  const { mdAndDown } = useDisplay()


  const getSidebarDrawer = () => computed(() => sidebarDrawer.value);
  const setSidebarDrawer = (payload: boolean) => {
    sidebarDrawer.value = payload;
  };

  // Watch for changes in mobile status and update sidebarDrawer accordingly
  watchEffect(() => {
    if (mdAndDown.value) {
      sidebarDrawer.value = false
    }
  })
  return {
    sidebarDrawer,
    getSidebarDrawer,
    setSidebarDrawer
  }
})
