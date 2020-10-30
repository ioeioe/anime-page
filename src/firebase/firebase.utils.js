import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/storage';
import {EmailSignInStart} from '../redux/user/user.actions';

var firebaseConfig = {
  apiKey: "AIzaSyA7iJcRdZ3En5IC0yhR8Mx38PQcQASLK2Q",
  authDomain: "isekai-de346.firebaseapp.com",
  databaseURL: "https://isekai-de346.firebaseio.com",
  projectId: "isekai-de346",
  storageBucket: "isekai-de346.appspot.com",
  messagingSenderId: "582028807770",
  appId: "1:582028807770:web:786c4f1344190c0ad7d263",
  measurementId: "G-QBKM478K73",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const PopupGoogleSignIn = () => auth.signInWithPopup(googleProvider);

export const addCollectionAndDocument = async (CollectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(CollectionKey);

  const batch = firestore.batch();
  const newDocRef = collectionRef.doc("all");
  objectsToAdd.forEach((obj) => {
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(userAuth);
  if (!snapShot.exists) {
    const { email } = userAuth;
    let firstName="",lastName="",imageUrl="";
    if(additionalData)
    {
      firstName=additionalData.firstName;
       lastName=additionalData.lastName;
        imageUrl=additionalData.imageUrl;
    }
    else{
       firstName="";
       lastName=userAuth.displayName;
       imageUrl=userAuth.photoURL;
    }
    const createAt = new Date();
    
    try {
      await userRef.set({ email, createAt,firstName,lastName,imageUrl  });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubcribe = auth.onAuthStateChanged((userAuth) => {
      unsubcribe();
      resolve(userAuth);
    }, reject);
  });
};

export const upLoadImageTask= (imageAsFile,userId)=>{
  let imageUrl="";
 const uploadTask =storage.ref(`/images/${userId}/${imageAsFile.name}`).put(imageAsFile);
 uploadTask.on('state_changed',
 (snapShot)=>{
   console.log(snapShot);
 },(err)=>{
   console.log(err)
 },()=>{
  storage.ref(`images/${userId}`).child(imageAsFile.name).getDownloadURL().then(fireBaseUrl=>{
    imageUrl=fireBaseUrl;
    firestore.collection('users').doc(userId).set({
      imageUrl:fireBaseUrl,
    },{merge:true})
  })
 })
 return imageUrl;

}
// export const addCollectionToFireStore = (CollectionKey, objectsToAdd) => {
//   firestore.collection(CollectionKey).doc("all").set({
//     objectsToAdd,
//     title: "all",
//   });
// };
export const addCollectionToFireStore = async(CollectionKey, objectsToAdd) => {
  console.log("asd");
  const collectionRef = firestore.collection(CollectionKey);
    const batch = firestore.batch();
      const regex = /\s/gi;
     objectsToAdd.forEach((obj) => {
      obj.routeName=obj.title.toLowerCase().replace(regex,"-");
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit(); 
};

export const updateItemTime = async(id)=>{
  const collectionRef = firestore.collection("collections");
  const collectionSnapshot = await collectionRef.where("mal_id","==",id).get();
  collectionSnapshot.forEach(async (doc)=>{
    const docRef = await firestore.collection("collections").doc(doc.id);
    docRef.update({
      updateTime:new Date
    })
  })
}