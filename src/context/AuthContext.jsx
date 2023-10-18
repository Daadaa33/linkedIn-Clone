import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/UserSlice';
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [users, setUsers] = useState({});
  const Navigate =useNavigate()
  const dispatch = useDispatch()


  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    // signInWithRedirect(auth, provider)
    Navigate("/feed")
  };

  const logOut = () => {
      signOut(auth)
  }

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUsers(currentUser);
      console.log('User', currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);
  
  useEffect(() => {
    dispatch(setUser(users))
    console.log("googlesign is working")
  }, [googleSignIn])
  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user : users }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};