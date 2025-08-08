import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from 'vite-plugin-svgr'
import devtoolsJson from 'vite-plugin-devtools-json'

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), svgr(), devtoolsJson({uuid: "49fdeb28-107b-403e-bbca-0d177125a27f"})],
});
