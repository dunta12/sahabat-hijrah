// ===== FIREBASE PUSH NOTIFICATION - SAHABAT HIJRAH =====
// Versi: 0.2 (v7) - Firebase compat (stabil)
// Dipanggil dari HTML setelah firebase-app-compat.js & firebase-messaging-compat.js dimuat

var SH_vapidKey = "BOPG9yoBLt_1_UkKX4JWt2EN0xnerR6whYdKtWGBWKL1nC19clYOIU3BBGvLN66r-0or8psyhXUo5f-aNG-psHA";

var SH_firebaseConfig = {
  apiKey: "AIzaSyAssjKSLJcpW-qzjmJKCOioXerB6yAF1ZY",
  authDomain: "sahabat-hijrah-f3faa.firebaseapp.com",
  projectId: "sahabat-hijrah-f3faa",
  storageBucket: "sahabat-hijrah-f3faa.firebasestorage.app",
  messagingSenderId: "942786617779",
  appId: "1:942786617779:web:eac409c4eb48f58768abc6"
};

// Register Firebase Messaging Service Worker
function registerFirebaseSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
      .then(function(reg) { console.log('Firebase SW registered:', reg.scope); })
      .catch(function(err) { console.error('Firebase SW error:', err); });
  }
}

// Initialize Firebase & minta permission
function initPushNotif() {
  if (typeof firebase === 'undefined') {
    console.error('Firebase SDK belum dimuat');
    alert('Firebase belum siap. Coba refresh halaman.');
    return;
  }
  
  try {
    firebase.initializeApp(SH_firebaseConfig);
  } catch(e) {
    console.log('Firebase sudah diinit:', e.message);
  }
  
  var messaging = firebase.messaging();
  registerFirebaseSW();
  
  Notification.requestPermission().then(function(permission) {
    if (permission === 'granted') {
      messaging.getToken({ vapidKey: SH_vapidKey }).then(function(token) {
        console.log('FCM Token:', token);
        localStorage.setItem('fcm_token', token);
        alert('Notifikasi aktif! Token: ' + token.substring(0, 20) + '...');
      }).catch(function(err) {
        console.error('Token error:', err);
      });
    } else {
      console.log('Permission ditolak:', permission);
    }
  });
}

// Handle notifikasi foreground
function onForegroundMessage(callback) {
  if (typeof firebase === 'undefined') return;
  var messaging = firebase.messaging();
  messaging.onMessage(function(payload) {
    console.log('Pesan foreground:', payload);
    if (callback) callback(payload);
  });
}

// Tampilkan notifikasi manual (foreground)
function showForegroundNotif(payload) {
  var title = (payload.notification && payload.notification.title) || 'Sahabat Hijrah';
  var body = (payload.notification && payload.notification.body) || '';
  
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, {
      body: body,
      icon: 'icon-192.png',
      badge: 'icon-192.png'
    });
  }
}

// Export ke global
window.initPushNotif = initPushNotif;
window.onForegroundMessage = onForegroundMessage;
window.showForegroundNotif = showForegroundNotif;

// Auto init saat file dimuat (jika Firebase sudah siap)
if (typeof firebase !== 'undefined') {
  console.log('firebase-notif.js dimuat, Firebase siap');
}
