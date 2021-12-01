import firebase from 'firebase/app';
import 'firebase/auth'; //for authentication
import 'firebase/storage'; //for storage
import 'firebase/database'; //for realtime
import 'firebase/firestore'; //for cloud firestore

const firebaseConfig = {
	apiKey: '',
	authDomain: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
	appId: '',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GooglAuthProvider();

export { auth, provider };
export default db;
