// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6NG1lMf6UOW91V3Gtf_kIjRG5h9isTtI",
    authDomain: "bukapaoletti.firebaseapp.com",
    projectId: "bukapaoletti",
    storageBucket: "bukapaoletti.appspot.com",
    messagingSenderId: "576777001053",
    appId: "1:576777001053:web:24203cd18e77c315d615b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getBeer() {
    const miColleccion = collection(firestore, "Cervezas");
    let snapshotDB = await getDocs(miColleccion);
    let dataDocs = snapshotDB.docs.map((documento) => {
        return { ...documento.data(), id: documento.id }
    });
    return dataDocs;
}

export async function BeerDetail(id) {
    const docRef = doc(firestore, "Cervezas", id)
    const docSnapshot = await getDoc(docRef);
    return { ...docSnapshot.data(), id: docSnapshot.id }
}

export async function BeerCategory(cat) {
    const miColleccion = collection(firestore, "Cervezas");
    const queryCat = query(miColleccion, where("category", "==", cat));
    const rtaCat = await getDocs(queryCat);
    let dataDocs = rtaCat.docs.map((documento) => {
        return { ...documento.data(), id: documento.id }
    });
    return dataDocs;
}
export default firestore;