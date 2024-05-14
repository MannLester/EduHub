
<script type="module" src="https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js"></script>
<script type="module" src="https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js"></script>
<script type="module" src="https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js"></script>

    < script type = "module" >
    const firebaseConfig = {
    apiKey: "AIzaSyBUlXw5wDX0F1FYnBpewY5fk590XTIA0_w",
    authDomain: "oop-try.firebaseapp.com",
    projectId: "oop-try",
    storageBucket: "oop-try.appspot.com",
    messagingSenderId: "830646294247",
    appId: "1:830646294247:web:2d85ed8bc8df821b47f442"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Export auth object
window.auth = auth;
</script >
