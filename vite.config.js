import vituum from 'vituum';
import path, { resolve } from 'path';
import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import nunjucks from '@vituum/vite-plugin-nunjucks'
import timeReporter from 'vite-plugin-time-reporter';

export default defineConfig({
  plugins:[
    vituum(),
    Inspect(),
    timeReporter(),
    nunjucks({
      root: resolve(__dirname, 'src'),
    }),
  ]
});
