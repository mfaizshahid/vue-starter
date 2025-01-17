/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from "./vuetify";
import router from "../router";
import { VueQueryPlugin } from '@tanstack/vue-query'
import Notifications from '@kyvg/vue3-notification'


// Types
import type { App } from "vue";
import { createPinia } from "pinia";

const pinia = createPinia();

export function registerPlugins(app: App) {
  app.use(vuetify).use(router).use(pinia).use(VueQueryPlugin).use(Notifications)
}
