import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDH_ApOP_4RuPjVXBK4m2wfIhLtngUNv9E",
  authDomain: "meetchav2.firebaseapp.com",
  projectId: "meetchav2",
  storageBucket: "meetchav2.appspot.com",
  messagingSenderId: "981191348967",
  appId: "1:981191348967:web:9ed4b67e41a60cfbe74842",
  measurementId: "G-791DW9ZVW9"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };