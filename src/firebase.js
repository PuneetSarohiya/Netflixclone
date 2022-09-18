import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAVmTDojXvCt-UjfSdQ_-P1w25i0wlBsCw",
  authDomain: "netflix-clone-8292.firebaseapp.com",
  projectId: "netflix-clone-8292",
  storageBucket: "netflix-clone-8292.appspot.com",
  messagingSenderId: "645155675927",
  appId: "1:645155675927:web:44b6affe438077a15b6152",
  measurementId: "G-SYKNRWP8RL"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBqWq8WFmOb_t2-KmO4yacs3Ki0cc4HTuA",
//   authDomain: "netflixx-clone-8282.firebaseapp.com",
//   projectId: "netflixx-clone-8282",
//   storageBucket: "netflixx-clone-8282.appspot.com",
//   messagingSenderId: "1093442970123",
//   appId: "1:1093442970123:web:b9385f6b2ebbd6eeda9d0e",
//   measurementId: "G-5LNYW6BYZE"
// };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth,provider };
export default db;
