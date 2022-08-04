// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later., measurementId is optional
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_TODO,
	authDomain: process.env.REACT_APP_FIREBASE_DOMAIN_TODO,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_TODO,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_TODO,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_TODO,
	appId: process.env.REACT_APP_FIREBASE_APP_TODO,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_TODO,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const db = getFirestore(app)
