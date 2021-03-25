import {fireConfig} from './FireConfig'
import * as firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: fireConfig.apiKey,
    authDomain: fireConfig.authDomain,
    projectId: fireConfig.projectId,
    storageBucket: fireConfig.storageBucket,
    messagingSenderId: fireConfig.messagingSenderId,
    appId: fireConfig.appId,
    measurementId: fireConfig.measurementId
  };

  let app;

  if(firebase.apps.length===0){
      app = firebase.initializeApp(firebaseConfig)
  } else {
      app = firebase.app();
  }

  const db = app.firestore();
  const auth = app.auth();

  export {db, auth};

