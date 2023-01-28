import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXZ4SU7FW8eiw9zNrWjOK8s3Nx_232zZI",
  authDomain: "miniblog-551e7.firebaseapp.com",
  projectId: "miniblog-551e7",
  storageBucket: "miniblog-551e7.appspot.com",
  messagingSenderId: "986557846590",
  appId: "1:986557846590:web:3e9e5277cdd77909bbed6f",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
