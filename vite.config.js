// export default {
//     root: "src",
//     build: {
//         outDir: "../public",
//     },
// };
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: "src",
  build: {
    outDir: "../public",
    rollupOptions: {
      input: {
        // index.html 파일과 sub 폴더 내의 HTML 파일 모두 포함
        index: resolve(__dirname, 'index.html'),
        sub1: resolve(__dirname, 'src/sub/sub1.html'),
        sub2: resolve(__dirname, 'src/sub/sub2.html'),
        // 필요한 만큼 추가할 수 있음
      }
    }
  }
});