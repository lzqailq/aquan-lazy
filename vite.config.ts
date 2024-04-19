import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.ts',
            name:'imagesLazy'
        }
    },
    rollupOptions: {
        external: ['vue'],
        output: {
            globals: {
                imagesLazy:"imagesLazy"
            }
        }
    }
})