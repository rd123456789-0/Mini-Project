import { initializeApp } from 'firebase/app';

// Firebase Configuration
const app = initializeApp(
    {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
        appId: process.env.REACT_APP_ID,
        databaseURL: process.env.REACT_APP_DATABASE_URL
    }
);

export default app;