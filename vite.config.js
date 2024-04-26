import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // để deploy lên github page cần thêm
  base: "/taikool-test/",

  // add thêm dòng này mới đọc đc file 3D .glb
  assetsInclude: ['**/*.glb'],
})
