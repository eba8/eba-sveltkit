import adapterStatic from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html

		adapter: adapterStatic()
	}
};

export default config;
