import firebase from 'firebase';
var firebaseConfig = {
apiKey: "AIzaSyCt8NmoKXdPKMYht8V_gs0AVqMNvZ2KVag111",
authDomain: "lista-de-linguagens-750971.firebaseapp.com",
databaseURL: "https://lista-de-linguagens-750971-default-rtdb.f
irebaseio.com",
projectId: "lista-de-linguagens-750971",
storageBucket: "lista-de-linguagens-750971.appspot.com",
messagingSenderId: "5276139692026",
appId: "1:527613969206:web:6ec65a82543b1f08274a997"
};
const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();