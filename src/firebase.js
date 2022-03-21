import firebase from 'firebase/app';
import 'firebase/messaging';

var firebaseConfig = {
  apiKey: "AIzaSyAHPB0qpamq-m3D-ZeyTXnxkxRrWlaVqdw",
  authDomain: "fcmpushnotification-275ce.firebaseapp.com",
  projectId: "fcmpushnotification-275ce",
  storageBucket: "fcmpushnotification-275ce.appspot.com",
  messagingSenderId: "946572371996",
  appId: "1:946572371996:web:30cf87894456a51cd5d7d9",
  measurementId: "G-M1KC69V5JV"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {
  console.log(setTokenFound)
   messaging.getToken({vapidKey: 'BO96YcclRJQktNYnTo6KUUASP-MiQ1mzaXjWm3ayQGT2gCx3ct4NaFQAiN9CtnRMIfZIwRQC5K_rlic5heQl2Oc'}).then((currentToken) => {
    if (currentToken) {
      let local = localStorage.getItem("push");
      if(!local){
        localStorage.setItem("push", currentToken);
        fetch('http://127.0.0.1:8000/staffapi/devices-auth/', {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo5NzY0OTU1LCJ1c2VybmFtZSI6InRyYW5xdW9jNjMxQGdtYWlsLmNvbSIsImV4cCI6MTY0OTk5MTgzNCwiZW1haWwiOiJ0cmFucXVvYzYzMUBnbWFpbC5jb20iLCJvcmlnX2lhdCI6MTY0NzM5OTgzNH0.eqvZSl24W8MGXJ3321ZjE8RXnUfcUroaANcHn-JsuuU'
            },
          body: JSON.stringify({
            'registration_id': currentToken,
            'type': 'web',
          }),
          credentials: "include",
        }).then(function(response) {
          console.log(response);
        })
      }
      console.log('current token for client: ', currentToken);
      
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});
