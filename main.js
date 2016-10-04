 var config = {
    apiKey: "AIzaSyAw5uIZdlyPYjBuYoc8zRjbiv0-lxWANys",
    authDomain: "playground-3f11f.firebaseapp.com",
    databaseURL: "https://playground-3f11f.firebaseio.com",
    storageBucket: "playground-3f11f.appspot.com",
    messagingSenderId: "1016399993027"
  };
firebase.initializeApp(config);

var auth = firebase.auth();

var btnLogin = document.getElementById('btnLogin');
var btnLogout = document.getElementById('btnLogout');


btnLogin.addEventListener('click', e => {
	auth.signInAnonymously();
});

auth.onAuthStateChanged(user => {
	console.log(user);
});

