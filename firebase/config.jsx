import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAON1rRvrzaj8a_Ui-1d3fQujyGZrjFiFc",
  authDomain: "ww-eficiencia.firebaseapp.com",
  projectId: "ww-eficiencia",
  storageBucket: "ww-eficiencia.appspot.com",
  messagingSenderId: "441737727597",
  appId: "1:441737727597:web:302087055580125eb83964",
  measurementId: "G-ENX67TFPBZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export { db, analytics }