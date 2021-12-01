import firebase from 'firebase/app';
import 'firebase/auth'; //for authentication
import 'firebase/storage'; //for storage
import 'firebase/database'; //for realtime
import 'firebase/firestore'; //for cloud firestore

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB4pz5LnXOfyg3AQRtx-jd5XVT5mH-0hdU',
	authDomain: 'messaging-app-frontend.firebaseapp.com',
	projectId: 'messaging-app-frontend',
	storageBucket: 'messaging-app-frontend.appspot.com',
	messagingSenderId: '914361272311',
	appId: '1:914361272311:web:3013cf0ab30a21ffad90f2',
	measurementId: 'G-T23JRKV10B',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
