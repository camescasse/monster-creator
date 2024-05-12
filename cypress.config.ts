import { defineConfig } from 'cypress';
import 'dotenv/config';

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false
});
