const modalOpenBtn = document.querySelectorAll('.portfolio__content a')
const modal = document.querySelector('.modal')
let modalCloseBtn
let modalContent = document.querySelector('.modal__content')
let modalView


// GET DATA FROM JSON
fetch('./data.json')
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    modalOpenBtn.forEach(l => l.addEventListener('click', function (e) {
      e.preventDefault();
      modal.classList.add('active-modal')
      modalContent.classList.add('active-modal')
      id = this.parentNode.id
      getId(id)
    }))

    function getId(id) {
      id = Number(id)
      i = id

      buildModal(data);
      const ghBtn = document.querySelector('.gh-btn')
      const demoBtn = document.querySelector('.demo-btn');
      ghBtn.addEventListener('click', function (e) {
        e.preventDefault();
        openGhLink();
      });
      demoBtn.addEventListener('click', function (e) {
        e.preventDefault();
        openDemoLink();
      });
      closeModal()
    }
  })

function buildModal(data) {

  let row = `<h1>${data[i].title}</h1>
    <div class="info">
      <span>
        <h3>개발 언어</h3>
          <p>${data[i].language}</p>
      </span>
      <span>
        <h3>개발 기간</h3>
          <p>${data[i].time}</p>
      </span>
    </div>
  
  
    <ul class="performence">
      <h3>핵심 기능</h3>
      <li>
        <i class='bx bxs-check-square'></i>${data[i].performence1}
      </li>
      <li><i class='bx bxs-check-square'></i>
        ${data[i].performence2}</li>
      <li><i class='bx bxs-check-square'></i>
        ${data[i].performence3}</li>
      <li><i class='bx bxs-check-square'></i>
        ${data[i].performence4}</li>
      <li><i class='bx bxs-check-square'></i>
        ${data[i].performence5}</li>
    </ul>
    <div class="modal__view">
      <h3>view</h3>
      <img src="${data[i].view}" alt="">
    </div>
  
    <div class="modal__links">
      <a href="#" class="gh-btn">
        <i class='bx bxl-github'></i>github
      </a>
      <a href="#" class="demo-btn">
        <i class='bx bxs-window-alt'></i>demo
      </a>
    </div>
  
    <a href="" class="modal__close">
      <svg class="" viewBox="0 0 24 24">
        <path
          d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
        <path d="M0 0h24v24h-24z" fill="none" />
      </svg>
    </a>`

  modalContent.innerHTML = row
}

function closeModal() {
  modalCloseBtn = document.querySelector('.modal__close')

  modalCloseBtn.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.remove('active-modal')
    modalContent.classList.remove('active-modal')
  })
}

// OPEN NEW BROWSER
const ghLinks = [
  'https://github.com/soojin128/JS-smooth-scroll-website',
  'https://github.com/soojin128/React-rentalHouse-Web',
  'https://github.com/soojin128/Budget-App',
  'https://github.com/soojin128/react-todo-app',
  'https://github.com/soojin128/JS-GYM-Website',
  'https://github.com/soojin128/Netflix-clone'
];
const demoLinks = [
  'https://soojin128.github.io/JS-smooth-scroll-website/',
  'https://soojin128.github.io/React-rentalHouse-Web/',
  'https://soojin128.github.io/Budget-App/',
  'https://soojin128.github.io/react-todo-app/',
  'https://soojin128.github.io/JS-GYM-Website/',
  'https://netflix-clone-6649c.web.app/'
];

function openGhLink() {
  ghLinks.forEach(function (l, idx) {
    if (id == idx) {
      window.open(ghLinks[idx]);
    }
  })
}

function openDemoLink() {
  demoLinks.forEach(function (l, idx) {
    if (id == idx) {
      window.open(demoLinks[idx]);
    }
  })
}