import {firebase,googleAuthProvider} from '../firebase/firebase'
//start log in process
export const startLogin =()=>{
    return ()=>{
        //calling firebase related method
        //i want to sign in using pop up mechanism using
        //googleoAuth provider services
         return firebase.auth().signInWithPopup(googleAuthProvider);

    }
}

export const startLogout =()=>{
    return ()=>{
        return firebase.auth().signOut();
    }
}