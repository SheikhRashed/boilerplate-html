import vituum from 'vituum';
import path, { resolve } from 'path';
import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import nunjucks from '@vituum/vite-plugin-nunjucks'
import timeReporter from 'vite-plugin-time-reporter';

export default defineConfig({
  publicDir: resolve(__dirname, 'src/public'),
  plugins:[
    Inspect(),
    timeReporter(),
    vituum({
      imports: {
        filenamePattern: {
            '+.css': [],
        },
      }
    }),
    nunjucks({
      root: resolve(__dirname, 'src'),
    })
  ],
  build: { 
    rollupOptions: { 
      input: ['./src/styles/style.{css,scss,sass,less}']
    }
  }
});
