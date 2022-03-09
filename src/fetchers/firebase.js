import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, onValue } from 'firebase/database';

export const firebaseConfig = {
    apiKey: "AIzaSyC3D44GCnPVqxceKW75BmJ5O27VeFGaKo8",
    authDomain: "music-man-backend.firebaseapp.com",
    databaseURL: "https://music-man-backend-default-rtdb.firebaseio.com",
    projectId: "music-man-backend",
    storageBucket: "music-man-backend.appspot.com",
    messagingSenderId: "12073912657",
    appId: "1:12073912657:web:33a7d693aa90fd3aedeb70",
    measurementId: "G-QBHDMSWJZ3"
  };

const app = initializeApp(firebaseConfig);
export default app;