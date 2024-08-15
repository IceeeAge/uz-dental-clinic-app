//config.ts

import { config } from 'dotenv';

// Load environment variables from .env file
config();


export default {
  expo: {
    scheme: 'uz-dental-clinic-scheme',
    extra: {
      EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
      HYGRAPH_END_POINT_URL: process.env.HYGRAPH_END_POINT_URL,
    },
  },
};
