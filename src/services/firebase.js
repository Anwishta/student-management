import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCImmkfiZljNSxpk6LiKMd3bwdDcwhdUv4",
  authDomain: "student-management-a0969.firebaseapp.com",
  projectId: "student-management-a0969",
  storageBucket: "student-management-a0969.firebasestorage.app",
  messagingSenderId: "954063867973",
  appId: "1:954063867973:web:2597b440f6e5ca3d85d32c",
  measurementId: "G-DH9G0W2BNL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };