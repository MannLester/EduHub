
<script type="module" src="https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js"></script>
<script type="module" src="https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js"></script>
<script type="module" src="https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js"></script>

    < script type = "module" >
    const firebaseConfig = {
    apiKey: "AIzaSyAO-wlp1Vstq_6tFU_ZWHociX3ci4QMXhs",
  authDomain: "oop-try-431a6.firebaseapp.com",
  projectId: "oop-try-431a6",
  storageBucket: "oop-try-431a6.firebasestorage.app",
  messagingSenderId: "951615170627",
  appId: "1:951615170627:web:51ce1560543752a5f44cf6",
  measurementId: "G-M4CQ6PJKX6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Export auth object
window.auth = auth;
</script >
