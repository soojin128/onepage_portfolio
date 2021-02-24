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

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();

  check();
});

// Input Check
const emailCheck = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

function check() {
  const nameValue = name.value;
  const emailValue = email.value;
  const messageValue = message.value;
  const form = document.querySelector('.contact__form');

  if (nameValue == '') {
    alert('이름을 입력해 주세요.');
    name.focus();
    return;
  }
  if (!emailCheck.test(emailValue)) {
    alert('email을 다시 입력해 주세요.');
    email.focus();
    return;
  }
  if (messageValue == '') {
    alert('메시지를 입력해 주세요.');
    message.focus();
    return;
  }

  // Insert Data
  database.ref('/users/' + name.value).set({

    nameV: name.value,
    emailV: email.value,
    messageV: message.value
  });

  alert('메시지가 성공적으로 전송되었습니다');

  resetInput();
}

function resetInput() {
  name.value = '';
  email.value = '';
  message.value = '';
}