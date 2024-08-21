import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import UnpluginTypia from '@ryoppippi/unplugin-typia/vite';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "~types": "./src/types.ts"
        }
    },
    plugins: [UnpluginTypia(), svelte()],
});
