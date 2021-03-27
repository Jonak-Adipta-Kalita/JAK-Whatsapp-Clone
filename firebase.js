import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBEVtWcV7Y9LbJjfAjKMHjxifoU8vi4GRQ",
  authDomain: "jak-whatsapp-clone-2-665dc.firebaseapp.com",
  projectId: "jak-whatsapp-clone-2-665dc",
  storageBucket: "jak-whatsapp-clone-2-665dc.appspot.com",
  messagingSenderId: "712023414378",
  appId: "1:712023414378:web:9dd15eecf496b7bd39dc13"
};

const app = !firebase.apps.length 
	? firebase.initializeApp(firebaseConfig) 
	: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
