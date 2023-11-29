import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "import.meta.env.VITE_API_KEY",
//   authDomain: "import.meta.env.VITE_AUTH_DOMAIN",
//   projectId: "import.meta.env.VITE_PROJECT_ID",
//   storageBucket: "import.meta.env.VITE_STORAGE_BUCKET",
//   messagingSenderId: "import.meta.env.VITE_MESSAGING_SENDER_ID",
//   appId: "import.meta.env.VITE_APP_ID",
//   measurementId: "import.meta.env.VITE_MEASUREMENT_ID",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCIt0neSRoIsfhvXTQ5o9T9yX1rLKSk2jc",
  authDomain: "react-to-do-list-484d0.firebaseapp.com",
  projectId: "react-to-do-list-484d0",
  storageBucket: "react-to-do-list-484d0.appspot.com",
  messagingSenderId: "989453431340",
  appId: "1:989453431340:web:aad8413f0daa6d65ba5789"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);