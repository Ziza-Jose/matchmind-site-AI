import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyC4Q5BJ38pRZZzQpfDbonhFqc2lD0mlBZI",
  authDomain: "tenis-predict-ai.firebaseapp.com",
  projectId: "tenis-predict-ai",
  storageBucket: "tenis-predict-ai.appspot.com",
  messagingSenderId: "1005979020563",
  appId: "1:1005979020563:web:7c8e1640ccf4da87f7fee6"
};
const app = initializeApp(firebaseConfig);
export default app;
