import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'xtjevt6n', // from your sanity.config.js
  dataset: 'production',
  useCdn: false, // Set to false to ensure fresh data is always fetched immediately
  apiVersion: '2024-06-27', // use current date
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
