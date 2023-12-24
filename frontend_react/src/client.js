import sanityClient from '@sanity/client';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: process.env.REACT_APP_SANITY_DATASET,
    apiVersion: '2023-12-31',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
});

// export const client = sanityClient({
//     projectId: '',
//     dataset: '',
//     apiVersion: '',
//     useCdn: true,
//     token: ''
// });

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);