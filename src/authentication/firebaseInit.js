import * as firebase from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from './firebaseConfig';
// const app = firebase.initializeApp({
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.FIREBASE_DATABASE_URL,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_ID,
//     appId: process.env.FIREBASE_APPID,
//     measurementId: process.env.FIREBASE_MEASUREMENT_ID
// });

const app = firebase.initializeApp(firebaseConfig);
export default app;