// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyD9t1l2nw3_lAggRwdPih38lvtq1fp2DWQ',
  authDomain: 'taskapp-77af2.firebaseapp.com',
  projectId: 'taskapp-77af2',
  storageBucket: 'taskapp-77af2.appspot.com',
  messagingSenderId: '487424290837',
  appId: '1:487424290837:web:30b51d3edc9487ca18de1c',
  measurementId: 'G-S6VELYDCBS',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseDataBase = getDatabase(app);
