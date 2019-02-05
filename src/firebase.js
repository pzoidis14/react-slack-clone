import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
  apiKey: 'AIzaSyAlwUYC_DDBtdLhSMPevr83mcewkKPn2LA',
  authDomain: 'react-slack-clone-3e073.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-3e073.firebaseio.com',
  projectId: 'react-slack-clone-3e073',
  storageBucket: 'react-slack-clone-3e073.appspot.com',
  messagingSenderId: '261694682318',
};
firebase.initializeApp(config);

export default firebase;
