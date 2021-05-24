import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { Asset, AssetTransaction, AssetType, Income, User } from "./domain";
import moment from "moment";

const firebaseConfig = {
  apiKey: "AIzaSyC_BnHrYggMR3Mn7mR1QvQNf8XYW5bKiaE",
  authDomain: "reikning.firebaseapp.com",
  projectId: "reikning",
  storageBucket: "reikning.appspot.com",
  messagingSenderId: "1059270778887",
  appId: "1:1059270778887:web:dc20612b31bf86ed2d0aa2",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();
type FirebaseAsset = {
  institution: string;
  name: string;
  transactions: AssetTransaction[];
  type: AssetType;
};
export const assetConverter = {
  toFirestore: ({
    bank,
    name,
    transactions,
    type,
  }: Asset): FirebaseAsset => {
    return {
      institution: bank,
      name,
      transactions,
      type
    };
  },
  fromFirestore: (snapshot, options): Asset => {
    const {
      institution,
      name,
      transactions,
      type,
    }: FirebaseAsset = snapshot.data(options);
    return {
      id: snapshot.id,
      bank: institution,
      name,
      transactions,
      type
    };
  },
};
export type Collection = "assets" | "expenses" | "income";
const getCollection = (user: User, collection: Collection) =>
  firestore.collection("users").doc(user.uid).collection(collection);
export const getAssets = (
  user: User,
  setAssets: (assets: Asset[]) => void
): void => {
  if (user) {
    getCollection(user, "assets")
      .withConverter(assetConverter)
      .get()
      .then(querySnapshot => {
        const assets = [];

        querySnapshot.forEach(doc => {
          assets.push({...doc.data(), id: doc.id});
        });

        setAssets(assets);
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  }
};
export const incomeConverter = {
  toFirestore: ({ amount, category, date, description, source }: Income) => {
    return {
      amount: amount,
      description: description,
      date: date.toString(),
      source: source,
      category: category,
    };
  },
  fromFirestore: (snapshot, options): Income => {
    const { amount, category, date, description, source } = snapshot.data(options);
    return {
      amount: amount,
      description: description,
      date: moment(date),
      source: source,
      category: category,
    };
  },
};
export type FirebaseUserState = {
  user: User;
  loading: boolean;
  error: any;
};
