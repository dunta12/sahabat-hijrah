importScripts("https://www.gstatic.com/firebasejs/11.6.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.6.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAssjKSLJcpW-qzjmJKCOioXerB6yAF1ZY",
  authDomain: "sahabat-hijrah-f3faa.firebaseapp.com",
  projectId: "sahabat-hijrah-f3faa",
  storageBucket: "sahabat-hijrah-f3faa.firebasestorage.app",
  messagingSenderId: "942786617779",
  appId: "1:942786617779:web:eac409c4eb48f58768abc6"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title || 'Sahabat Hijrah';
  const notificationOptions = {
    body: payload.notification.body || '',
    icon: 'icon-192.png',
    badge: 'icon-192.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
