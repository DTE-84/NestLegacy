import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	plugins: [react()],

	// Tell Vite where to find your source files
	root: ".", // Project root where index.html is

	// Path aliases (for your @/ imports)
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./client"),
		},
	},

	// Build configuration
	build: {
		outDir: "dist",
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, "index.html"),
			},
		},
	},

	// Server configuration
	server: {
		port: 5173,
		strictPort: false,
		middlewareMode: false,
	},

	optimizeDeps: {
		include: ["react", "react-dom"],
	},
});
