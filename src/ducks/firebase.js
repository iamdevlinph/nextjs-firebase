import firebase from 'firebase/app';
import 'firebase/firestore';

if (typeof firebase !== 'undefined') {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'AIzaSyBkaUGsz4oUZDXEY89F_s93hOFpPFfeG9E',
      authDomain: 'sample-data-d6293.firebaseapp.com',
      databaseURL: 'https://sample-data-d6293.firebaseio.com',
      projectId: 'sample-data-d6293',
    });
    // enable offline persistence
    // if (process.browser) {
    //   firebase
    //     .firestore()
    //     .enablePersistence()
    //     .then(() => {
    //       console.error('Firebase offline persistence enabled');
    //     })
    //     .catch(err => {
    //       switch (err) {
    //         case 'failed-precondition':
    //           console.error('Multiple tabs open');
    //           break;
    //         case 'unimplemented':
    //           console.error('Browser does not support');
    //           break;
    //         default:
    //           console.error('Error in enabling persistence');
    //       }
    //     });
    // }
  } else {
    firebase.app();
  }
}

export const onAuthStateChanged = () =>
  new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        resolve(user);
      } else {
        reject(new Error('No user found.'));
      }
    });
  });
