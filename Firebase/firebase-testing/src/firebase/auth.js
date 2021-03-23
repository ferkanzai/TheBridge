import { useState, useEffect, createContext } from 'react';
import firebase from './index';

export const AuthContext = createContext();

export const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        const email = currentUser.email;
        const userId = currentUser.uid;

        setUser({
          isNewUser: false,
          email,
          id: userId,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, []);

  const handleRegister = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
  };

  const handleLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
  };

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  const handleGoogleSignin = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        console.log(result.credential)
        const { profile } = result.additionalUserInfo;
        console.log(profile.name, profile.picture);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        handleRegister,
        handleLogin,
        handleLogout,
        handleGoogleSignin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
