// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, collection,
    getDocs,
    addDoc,
 } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzoizwGhVjCA83q1UjHYzL5PkQdeeQB9k",
  authDomain: "firestore-play-e52f4.firebaseapp.com",
  projectId: "firestore-play-e52f4",
  storageBucket: "firestore-play-e52f4.appspot.com",
  messagingSenderId: "785215075039",
  appId: "1:785215075039:web:20684059f8e7cc42892f6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

//collection reference

const colRef = collection(db,"links")

// get collection data

export const fetchDocs = () => {
    return new Promise((resolve, reject) => {
      getDocs(colRef)
        .then((snapshot) => {
          let links = [];
          snapshot.docs.forEach((doc) => {
            links.push({ ...doc.data(), id: doc.id });
          });
          console.log(links);
          resolve(links);
        })
        .catch((error) => {
          console.error("Error fetching documents: ", error);
          reject(error);
        });
    });
  };

  export const addLink = (link,topic,tags) =>{

    const tagsArray = tags.split(',');
    console.log(tagsArray);


    return addDoc(colRef,{
      link: link,
      topic: topic,
      tags: tagsArray,
    })


  }

export default app;