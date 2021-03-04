import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyBTKBNI8wqzw5VXFB1VhNB_Jzk1THMnLOU",
        authDomain: "swash-db.firebaseapp.com",
        projectId: "swash-db",
        storageBucket: "swash-db.appspot.com",
        messagingSenderId: "738963188189",
        appId: "1:738963188189:web:7c88463a3e982ce9daae34",
        measurementId: "G-QY8E05GXK5"
};

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData 
            })
        } catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;