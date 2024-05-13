/**
 * eslint-disable react/prop-types
 *
 * @format
 */

import { createContext, useEffect, useState } from "react";
import {
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import toast from "react-hot-toast";
import axios from "axios";
// import UseAxiosSecure from '../Hooks/UseAxiosSecure';
// const axiosSecure = UseAxiosSecure();

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
   // const axiosSecure = UseAxiosSecure();
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const signInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   const logOut = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/logout`, {
         withCredentials: true,
      });
      setLoading(true);

      // console.log(data);
      toast.success("You are logged Out");
      return signOut(auth);
   };

   const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photo,
      });
   };

   // useEffect(()=>{
   //   const unSubscribe =   onAuthStateChanged(auth,currentUser => {
   //          const userEmail = currentUser?.email || user?.email;
   //          const loggedUser = {email: userEmail}
   //          setUser(currentUser);
   //          setLoading(false);
   //          // if user exists then issue a token
   //          if(currentUser) {
   //              // const loggedUser = {email: currentUser.email}
   //              axios.post('https://assign-mates-server.vercel.app/jwt', loggedUser,{
   //                  withCredentials:true})
   //              .then(res=> {
   //                  console.log('token response from auth',
   //                   res.data);

   //              })
   //          }
   //          else {
   //              axios.get('https://assign-mates-server.vercel.app/logout',{
   //                  withCredentials:true
   //              })
   //              .then(res =>{
   //                  console.log(res.data);
   //              })
   //          }
   //      });
   //      return () => {
   //          return unSubscribe()
   //      }
   //  },[])

   // onAuthStateChange
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);

         // console.log("CurrentUser-->", currentUser);
         setLoading(false);
      });
      return () => {
         return unsubscribe();
      };
   }, []);

   const authInfo = {
      user,
      setUser,
      loading,
      setLoading,
      createUser,
      signIn,
      signInWithGoogle,
      logOut,
      updateUserProfile,
   };

   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default AuthProvider;
