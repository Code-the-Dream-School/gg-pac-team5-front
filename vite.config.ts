import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { configDefaults } from "vitest/config";

export default defineConfig(({ command, mode }) => {
	// Load environment variables based on the mode
	const env = loadEnv(mode, process.cwd(), "");

	return {
		// Plugins for Vite
		plugins: [react(), svgr()],

		// Vitest configuration
		test: {
			/* 
			jsdom: browser simulation
			globals: access to expect, describe, test variable by default
		*/
			environment: "jsdom",
			globals: true,
			setupFiles: "./testSetup.js",
		},

		// Define custom environment variables
		define: {
			"import.meta.env.VITE_API_URL": JSON.stringify(process.env.API_URL),
		},
	};
});
