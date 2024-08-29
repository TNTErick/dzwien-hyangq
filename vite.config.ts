import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/dzwien-hyangq',
    plugins: [react()],
    // declare app version loaded from package.json
    define: { _appVersion: JSON.stringify(process.env.npm_package_version) },
})
