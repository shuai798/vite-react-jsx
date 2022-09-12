import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

const appInfo = {
  title: "开箱即用的中后台管理系统",
};

export default defineConfig({
  define: {
    appInfo: JSON.stringify(appInfo),
  },
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: appInfo.title,
        },
      },
    }),
  ],
  server: {
    open: true,
  },
});
