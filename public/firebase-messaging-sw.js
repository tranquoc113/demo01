// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAHPB0qpamq-m3D-ZeyTXnxkxRrWlaVqdw",
  authDomain: "fcmpushnotification-275ce.firebaseapp.com",
  projectId: "fcmpushnotification-275ce",
  storageBucket: "fcmpushnotification-275ce.appspot.com",
  messagingSenderId: "946572371996",
  appId: "1:946572371996:web:30cf87894456a51cd5d7d9",
  measurementId: "G-M1KC69V5JV"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload) {
//   console.log('Received background message ', payload);


  // const notificationTitle = payload.notification.title;
  // const notificationOptions = {
  //   body: payload.notification.body
  // };

  // self.registration.showNotification(notificationTitle,
  //   notificationOptions);
  // self.registration.showNotification("second------------------",
  //     notificationOptions);
// });

