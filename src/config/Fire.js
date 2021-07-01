import firebase from 'firebase';

const config={
    apiKey: "AIzaSyCELoPoJiy-OCmJ3Qr2CuDg_NUiSlTiTfc",
    authDomain: "expense-tracker-9a50b.firebaseapp.com",
    projectId: "expense-tracker-9a50b",
    storageBucket: "expense-tracker-9a50b.appspot.com",
    messagingSenderId: "923241350199",
    appId: "1:923241350199:web:d6e3f7c7b55f14a7eaabb2",
    measurementId: "G-QT7MZQ9KQW"



}


const fire= firebase.initializeApp(config);
export default fire;