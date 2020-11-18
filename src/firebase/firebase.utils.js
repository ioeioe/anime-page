import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/storage';
import { FireSQL } from 'firesql';
import 'firesql/rx';
import {getUserGallerySuccess} from '../redux/anime-track/anime-track.actions';
import {fetchCommentSuccess} from '../redux/comment/comment.actions';
import {store} from '../redux/store';

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
export const fireSql = new FireSQL(firebase.firestore());
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
    const id=userAuth.uid;
    try {
      await userRef.set({ id,email, createAt,firstName,lastName,imageUrl  });
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

export const addItemToGallery = async(userAuth,item)=>{
  const collectionRef = firestore.collection("users").doc(userAuth.id).collection("gallery");
  const batch = firestore.batch();
  const newDocRef = collectionRef.doc();
  item.createAt =new Date();
  batch.set(newDocRef,item);
  return await batch.commit();
}
export const removeItemFromGallery = async(userAuth,item)=>{
  const batch= firestore.batch();
  const docRef = await firestore.collection("users").doc(userAuth.id).collection("gallery").where("mal_id","==",item.mal_id).get();
  docRef.forEach(doc=>{
    batch.delete(doc.ref);
  })
  return await batch.commit();


}
export const getUserGallery = async(id)=>{
    return new Promise((resolve,reject)=>{  
      firestore.collection("users").doc(id).collection("gallery").orderBy("createAt","desc").onSnapshot(snapshot=>{
         let gallery = [];
        console.log("gallery changing");
      snapshot.forEach(doc=>{
       
        gallery.push(doc.data());
        
      })
      console.log(gallery);
      store.dispatch(getUserGallerySuccess(gallery));
      resolve();
    },reject)
    })
}

export const updateItemTime = async(id)=>{
  const collectionRef = firestore.collection("collections");
  const collectionSnapshot = await collectionRef.where("mal_id","==",id).get();
  collectionSnapshot.forEach(async (doc)=>{
    const docRef = await firestore.collection("collections").doc(doc.id);
    docRef.update({
      updateTime:new Date()
    })
  })
}
export const updateItemBackground = async(id,url)=>{
   const collectionRef = firestore.collection("collections");
  const collectionSnapshot = await collectionRef.where("mal_id","==",id).get();
  collectionSnapshot.forEach(async (doc)=>{
    const docRef = await firestore.collection("collections").doc(doc.id);
    docRef.update({
      background_url:url,
    })
  })
}

export const PostCommentToFirestore = async (userImage,userName,animeId,commentText)=>{
  const CollectionSnapshot = await firestore.collection('collections').where("mal_id","==",animeId).get();
   CollectionSnapshot.forEach(async(doc)=>{
    const CollectionRef = await firestore.collection("collections").doc(doc.id).collection("comments");
    const batch = firestore.batch();
  const newDocRef = CollectionRef.doc();
  let postAt = new Date();
  batch.set(newDocRef,{userImage,userName,commentText,postAt});
  batch.commit();
  })
}
export const GetAnimeComments =  (mal_id)=>{

    return new Promise(async(resolve,reject)=>{  
    let id="";
    const snapshot = firestore.collection("collections").where("mal_id","==",mal_id).get();
    (await snapshot).docs.forEach(doc=>{
      id=doc.id;
    })
      firestore.collection("collections").doc(id).collection("comments").orderBy("postAt","desc").onSnapshot(snapshot=>{
         let comments = [];
      snapshot.forEach(doc=>{     
        comments.push(doc.data());
      })
      console.log(comments);
      store.dispatch(fetchCommentSuccess(comments));
      resolve();
    },reject)
    })

}

// export const pushGalleryToFireStore = (userId,gallery)=>{
//   console.log("PUSH GALLERY FIRESTORE");
//   const userRef = firestore.collection("users").doc(userId);
//   userRef.update({
//     gallery:gallery
//   })
// }