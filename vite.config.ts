import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { configDefaults } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	test: {
		/* 
			jsdom: browser simulation
			globals: access to expect, describe, test variable by default
		*/
		environment: "jsdom",
		globals: true,
		setupFiles: "./testSetup.js",
	},
});
