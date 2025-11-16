import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyB-ig8fH42-44gJHs_1HS9U5GrklP_HY5E",
  authDomain: "finance-dashboard-a3727.firebaseapp.com",
  projectId: "finance-dashboard-a3727",
  storageBucket: "finance-dashboard-a3727.firebasestorage.app",
  messagingSenderId: "434665954294",
  appId: "1:434665954294:web:a3f0ef4d5ea4459d3fc5d7",
  measurementId: "G-E5PVSPBZB3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const signup = async (
  name: string,
  email: string,
  password: string
): Promise<void> => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user: User = res.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      email,
      authProvider: "local",
    });
  } catch (error: any) {
    toast.error(error.code.split("/")[1].replace(/-/g, " "));
    throw error; // 🔥 IMPORTANT
  }
};

export const login = async (email: string, password: string): Promise<void> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    toast.error(error.code.split("/")[1].replace(/-/g, " "));
    throw error; // 🔥 IMPORTANT
  }
};

export const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error: any) {
    console.error(error);
    toast.error("Logout failed");
  }
};
