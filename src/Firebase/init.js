import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";
const firebaseInit =()=>{
    initializeApp(firebaseConfig);
}
export default firebaseInit;