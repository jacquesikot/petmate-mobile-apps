import firebase from 'firebase/app';
import * as GoogleAuthentication from 'expo-google-app-auth';
import { auth, db } from '../../firebaseInit';

import storage from '../utils/storage';

const googleAuth = async () => {
  const result = await GoogleAuthentication.logInAsync({
    iosClientId: '72306694784-f9qq65ggip9hq2h6vpe8mcdei1a9mrqm.apps.googleusercontent.com',
    androidClientId: '72306694784-l3tfvd8bpndtluj3k7s81k9167obt196.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
  });

  if (result.type === 'success') {
    const { idToken, accessToken } = result;
    const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
    const res = await firebase.auth().signInWithCredential(credential);

    if (res.user) {
      const data = {
        id: res.user.uid,
        displayName: res.user.displayName,
        email: res.user.email,
        photoURL: res.user.photoURL,
      };

      await storage.storeData('user', JSON.stringify(data));
      return data;
    }
  }
};

const logout = async () => {
  await auth.signOut();
  await storage.deleteData('user');
};

const sendResetPasswordEmail = async (email: string) => {
  await auth.sendPasswordResetEmail(email);
};

export { googleAuth, logout, sendResetPasswordEmail };
