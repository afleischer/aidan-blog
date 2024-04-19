/** @type {import('tailwindcss').Config} */
export default {
	corePlugins: {
    // Removes css resets. Use astro for now
    preflight: false,
  },
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [],
}
