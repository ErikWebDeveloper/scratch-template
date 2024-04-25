import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "my-custom-dist", // Cambia 'my-custom-dist' por la carpeta deseada
  },
});
