import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
    apiKey: "AIzaSyAmJEBDyNdPtzMg-6sslop4k4S5tVkEEeI",
    authDomain: "react-online-chat-bbc93.firebaseapp.com",
    projectId: "react-online-chat-bbc93",
    storageBucket: "react-online-chat-bbc93.appspot.com",
    messagingSenderId: "714153190764",
    appId: "1:714153190764:web:9073b10ef68a67267cff49",
    measurementId: "G-6DVHZS0YE0"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export const Context = createContext(null);

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);
