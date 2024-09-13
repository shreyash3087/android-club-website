import { createContext, useEffect, useState, useContext } from "react";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { app } from "../firebase";

const firestore = getFirestore(app);
const auth = getAuth(app);

const FirestoreContext = createContext(null);

export const useFirestore = () => useContext(FirestoreContext);

const FirestoreProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const userDoc = await getDoc(doc(firestore, "users", firebaseUser.uid));
        if (userDoc.exists()) {
          setUser({ uid: firebaseUser.uid, ...userDoc.data() });
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const registerUser = async (email, password, additionalData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      const userProfile = {
        email,
        name: additionalData.name,
        phone: additionalData.phone || "",
        profilePic: additionalData.profilePic || "",
        regNo: additionalData.regNo || "",
        allRegisteredEvents: [],
        droid:50, 
      };
  
      await setDoc(doc(firestore, "users", firebaseUser.uid), userProfile);

      setUser({ uid: firebaseUser.uid, ...userProfile });
    } catch (error) {
      console.error("Error registering user: ", error);
      throw error;
    }
  };

  const loginUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      const userDoc = await getDoc(doc(firestore, "users", firebaseUser.uid));
      if (userDoc.exists()) {
        setUser({ uid: firebaseUser.uid, ...userDoc.data() });
      }
    } catch (error) {
      console.error("Error logging in user: ", error);
      throw error;
    }
  };

  const logoutUser = async () => {
    await auth.signOut();
    setUser(null);
  };

  const contextValue = {
    user,
    registerUser,
    loginUser,
    logoutUser,
  };

  return <FirestoreContext.Provider value={contextValue}>{children}</FirestoreContext.Provider>;
};

export default FirestoreProvider;
