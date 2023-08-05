// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBK86vUeOAxzhJJV-qiFsOdskY5GS1ZWJE',
  authDomain: 'snaely-9fac2.firebaseapp.com',
  projectId: 'snaely-9fac2',
  storageBucket: 'snaely-9fac2.appspot.com',
  messagingSenderId: '1066221768751',
  appId: '1:1066221768751:web:5bc8b71d3cf0bc2b5eb6da',
  measurementId: 'G-D18YDD2QMS',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
