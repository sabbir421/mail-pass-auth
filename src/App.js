
import { useState } from 'react';
import './App.css';
import firebaseInit from './Firebase/init';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

firebaseInit();





function App() {
  const auth = getAuth();

const [email, setEmail]=useState('');
const [password, setPassword]=useState('');
const [error,setError]=useState('')
const getEmail=e=>{
  setEmail(e.target.value);
}

const getPassword=e=>{
  setPassword(e.target.value);
}

const emailHandel=e=>{
  e.preventDefault()
 console.log(email,password);
 if(password.length<6){
   setError('password must be 6 carecters')
   return; 
 }
 createUserWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  console.log(user);
  setError('')
  // ...
})
 
}

  return (
    <div className="App">
     <form onSubmit={emailHandel} action="">
       <label htmlFor="">email</label>
       <input onBlur={getEmail} type="text" />
       <label htmlFor="">password</label>
       <input onBlur={getPassword} type="text" />
       <input type="submit" />
       <div>{error}</div>
     </form>
    </div>
  );
}

export default App;
