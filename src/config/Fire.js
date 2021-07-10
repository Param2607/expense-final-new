import firebase from 'firebase';

const config={
    // apiKey: "AIzaSyCELoPoJiy-OCmJ3Qr2CuDg_NUiSlTiTfc",
    // authDomain: "expense-tracker-9a50b.firebaseapp.com",
    // projectId: "expense-tracker-9a50b",
    // storageBucket: "expense-tracker-9a50b.appspot.com",
    // messagingSenderId: "923241350199",
    // appId: "1:923241350199:web:d6e3f7c7b55f14a7eaabb2",
    // measurementId: "G-QT7MZQ9KQW"
    
    apiKey: "AIzaSyCpUupczwUSvkqAUkwu8cnAyKuEbU-sbeA",
    authDomain: "expense-final-new.firebaseapp.com",
    projectId: "expense-final-new",
    storageBucket: "expense-final-new.appspot.com",
    messagingSenderId: "157552671913",
    appId: "1:157552671913:web:7f7889319bfb7d1f363db8",
    measurementId: "G-BGGM8T9VY6"


}


const fire= firebase.initializeApp(config);
export default fire;