// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGIcpxCmyhnPMzTf4OhlU3Xcjkg7sYjzs",
  authDomain: "analog-reef-331609.firebaseapp.com",
  databaseURL:
    "https://analog-reef-331609-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "analog-reef-331609",
  storageBucket: "analog-reef-331609.appspot.com",
  messagingSenderId: "718884098691",
  appId: "1:718884098691:web:b11a3cceb2076a69fd01b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const btn = document.querySelector("#regForm");
btn.addEventListener("submit", contactForm);

function contactForm(e) {
  e.preventDefault();

  var fullName = getVal("fullName");
  var email = getVal("email");
  var phone = getVal("phoneNumber");
  var member = getVal("ieeeMembership");
  var events = getVal("eventOptions");
  var comments = getVal("comments");

  document.querySelector(".alert").style.display = "block";
  setTimeout(() => {
    btn.reset();
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  saveToDB(fullName, email, phone, member, events, comments);
}

const saveToDB = (fullName, email, phone, member, events, comments) => {
  set(ref(db, "users/" + fullName), {
    Name: fullName,
    email: email,
    phone: phone,
    membershipId: member,
    events: events,
    comments: comments,
  });
};

function getVal(id) {
  return document.getElementById(id).value;
}
