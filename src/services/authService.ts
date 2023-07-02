import firebase from '../utils/firebase';

export const register = async (email: string, password: string) => {
  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logout = async () => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCurrentUser = () => {
  return firebase.auth().currentUser;
};