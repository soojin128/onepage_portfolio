var firebaseConfig = {
  apiKey: "AIzaSyALK3_8F9xMDqnidJa_eehN-biL2E8Bkvo",
  authDomain: "portfolio-messages-ee994.firebaseapp.com",
  projectId: "portfolio-messages-ee994",
  storageBucket: "portfolio-messages-ee994.appspot.com",
  messagingSenderId: "735858377938",
  appId: "1:735858377938:web:34015b62ea81425c96190b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const sendBtn = document.getElementById('sendBtn');

const database = firebase.database();

sendBtn.addEventListener('click',(e) => {
  e.preventDefault();

  database.ref('/users/' + name.value).set({

    nameV: name.value,
    emailV: email.value,
    messageV: message.value
  })
})
