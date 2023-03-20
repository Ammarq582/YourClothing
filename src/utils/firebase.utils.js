import {initializeApp} from 'firebase/app';

import {
getAuth,
signInWithPopup,
signInWithRedirect,
GoogleAuthProvider,
onAuthStateChanged,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    getDocs,
    query,
    collection,
    writeBatch
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDp6UbRzd7fVkARD70DUvFYUQyLtsJ4qUI",
    authDomain: "newcapstone-3725f.firebaseapp.com",
    projectId: "newcapstone-3725f",
    storageBucket: "newcapstone-3725f.appspot.com",
    messagingSenderId: "549796985764",
    appId: "1:549796985764:web:a8a78fa38c118472bd9f31"
};
  

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

const googleProvider = new GoogleAuthProvider()
.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signUpWithEmailandPassword = async (email, password) => {
    if(!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const UserSignInWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);


const db = getFirestore();

export const createDocumentWithSignUp = async (user, additionalInfo) => {
    if(!user) return;

    const docRef = doc(db, 'users', user.uid)
    const docSnapshot = await getDoc(docRef);

    if(!docSnapshot.exists()) {
        const {displayName, email} = user;
        const createdAt = new Date();

        try {
            setDoc(docRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        }
        catch(err) {
            console.log(err);
        }
    }

    return docRef;
}

export const createCategoriesandDocuments = async (objectsToAdd) => {
    const collectionRef = collection(db, 'categories');
    const batch = writeBatch(db);
    
    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object)    
    })

    await batch.commit();
    console.log('done');
}

export const getCategoriesandDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef)
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => doc.data())
}