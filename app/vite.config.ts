import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 빌드 결과물은 저장소 루트 /etl 폴더로 출력 → 기존 정적 페이지와 함께 GitHub Pages로 배포
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: '../etl',
    emptyOutDir: true,
  },
})
