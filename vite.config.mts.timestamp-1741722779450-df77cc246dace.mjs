// vite.config.mts
import AutoImport from "file:///home/mfaizshahid/dev/gems-track/gems-track-frontend/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///home/mfaizshahid/dev/gems-track/gems-track-frontend/node_modules/unplugin-vue-components/dist/vite.js";
import Fonts from "file:///home/mfaizshahid/dev/gems-track/gems-track-frontend/node_modules/unplugin-fonts/dist/vite.mjs";
import Layouts from "file:///home/mfaizshahid/dev/gems-track/gems-track-frontend/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Vue from "file:///home/mfaizshahid/dev/gems-track/gems-track-frontend/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueRouter from "file:///home/mfaizshahid/dev/gems-track/gems-track-frontend/node_modules/unplugin-vue-router/dist/vite.js";
import Vuetify, { transformAssetUrls } from "file:///home/mfaizshahid/dev/gems-track/gems-track-frontend/node_modules/vite-plugin-vuetify/dist/index.mjs";
import { defineConfig } from "file:///home/mfaizshahid/dev/gems-track/gems-track-frontend/node_modules/vite/dist/node/index.js";
import { fileURLToPath, URL } from "node:url";
var __vite_injected_original_import_meta_url = "file:///home/mfaizshahid/dev/gems-track/gems-track-frontend/vite.config.mts";
var vite_config_default = defineConfig({
  plugins: [
    VueRouter({
      dts: "src/typed-router.d.ts"
    }),
    Layouts(),
    AutoImport({
      imports: [
        "vue",
        {
          "vue-router/auto": ["useRoute", "useRouter"]
        }
      ],
      dts: "src/auto-imports.d.ts",
      eslintrc: {
        enabled: true
      },
      vueTemplate: true
    }),
    Components({
      dts: "src/components.d.ts"
    }),
    Vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: "src/styles/settings.scss"
      }
    }),
    Fonts({
      google: {
        families: [
          {
            name: "Roboto",
            styles: "wght@100;300;400;500;700;900"
          }
        ]
      }
    })
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"]
  },
  server: {
    port: 3500
  },
  css: {
    preprocessorOptions: {
      sass: {
        api: "modern-compiler"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvbWZhaXpzaGFoaWQvZGV2L2dlbXMtdHJhY2svZ2Vtcy10cmFjay1mcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvbWZhaXpzaGFoaWQvZGV2L2dlbXMtdHJhY2svZ2Vtcy10cmFjay1mcm9udGVuZC92aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbWZhaXpzaGFoaWQvZGV2L2dlbXMtdHJhY2svZ2Vtcy10cmFjay1mcm9udGVuZC92aXRlLmNvbmZpZy5tdHNcIjsvLyBQbHVnaW5zXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIjtcbmltcG9ydCBGb250cyBmcm9tIFwidW5wbHVnaW4tZm9udHMvdml0ZVwiO1xuaW1wb3J0IExheW91dHMgZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzXCI7XG5pbXBvcnQgVnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSBcInVucGx1Z2luLXZ1ZS1yb3V0ZXIvdml0ZVwiO1xuaW1wb3J0IFZ1ZXRpZnksIHsgdHJhbnNmb3JtQXNzZXRVcmxzIH0gZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZXRpZnlcIjtcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSBcIm5vZGU6dXJsXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgVnVlUm91dGVyKHtcbiAgICAgIGR0czogXCJzcmMvdHlwZWQtcm91dGVyLmQudHNcIixcbiAgICB9KSxcbiAgICBMYXlvdXRzKCksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgIFwidnVlXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBcInZ1ZS1yb3V0ZXIvYXV0b1wiOiBbXCJ1c2VSb3V0ZVwiLCBcInVzZVJvdXRlclwiXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBkdHM6IFwic3JjL2F1dG8taW1wb3J0cy5kLnRzXCIsXG4gICAgICBlc2xpbnRyYzoge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHZ1ZVRlbXBsYXRlOiB0cnVlLFxuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgZHRzOiBcInNyYy9jb21wb25lbnRzLmQudHNcIixcbiAgICB9KSxcbiAgICBWdWUoe1xuICAgICAgdGVtcGxhdGU6IHsgdHJhbnNmb3JtQXNzZXRVcmxzIH0sXG4gICAgfSksXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXRpZnlqcy92dWV0aWZ5LWxvYWRlci90cmVlL21hc3Rlci9wYWNrYWdlcy92aXRlLXBsdWdpbiNyZWFkbWVcbiAgICBWdWV0aWZ5KHtcbiAgICAgIGF1dG9JbXBvcnQ6IHRydWUsXG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgY29uZmlnRmlsZTogXCJzcmMvc3R5bGVzL3NldHRpbmdzLnNjc3NcIixcbiAgICAgIH0sXG4gICAgfSksXG4gICAgRm9udHMoe1xuICAgICAgZ29vZ2xlOiB7XG4gICAgICAgIGZhbWlsaWVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJSb2JvdG9cIixcbiAgICAgICAgICAgIHN0eWxlczogXCJ3Z2h0QDEwMDszMDA7NDAwOzUwMDs3MDA7OTAwXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlZmluZTogeyBcInByb2Nlc3MuZW52XCI6IHt9IH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4vc3JjXCIsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gICAgZXh0ZW5zaW9uczogW1wiLmpzXCIsIFwiLmpzb25cIiwgXCIuanN4XCIsIFwiLm1qc1wiLCBcIi50c1wiLCBcIi50c3hcIiwgXCIudnVlXCJdLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzNTAwLFxuICB9LFxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBzYXNzOiB7XG4gICAgICAgIGFwaTogXCJtb2Rlcm4tY29tcGlsZXJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sV0FBVztBQUNsQixPQUFPLGFBQWE7QUFDcEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZUFBZTtBQUN0QixPQUFPLFdBQVcsMEJBQTBCO0FBRzVDLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsZUFBZSxXQUFXO0FBWDhLLElBQU0sMkNBQTJDO0FBY2xRLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLFVBQVU7QUFBQSxNQUNSLEtBQUs7QUFBQSxJQUNQLENBQUM7QUFBQSxJQUNELFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFVBQ0UsbUJBQW1CLENBQUMsWUFBWSxXQUFXO0FBQUEsUUFDN0M7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsTUFDTCxVQUFVO0FBQUEsUUFDUixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsYUFBYTtBQUFBLElBQ2YsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLE1BQ0YsVUFBVSxFQUFFLG1CQUFtQjtBQUFBLElBQ2pDLENBQUM7QUFBQTtBQUFBLElBRUQsUUFBUTtBQUFBLE1BQ04sWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLFFBQ04sWUFBWTtBQUFBLE1BQ2Q7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxNQUNKLFFBQVE7QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsUUFBUSxFQUFFLGVBQWUsQ0FBQyxFQUFFO0FBQUEsRUFDNUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLElBQ0EsWUFBWSxDQUFDLE9BQU8sU0FBUyxRQUFRLFFBQVEsT0FBTyxRQUFRLE1BQU07QUFBQSxFQUNwRTtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLEtBQUs7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
