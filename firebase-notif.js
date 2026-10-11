// ===== FIREBASE PUSH NOTIFICATION - SAHABAT HIJRAH =====
// Versi: 0.1 (v7)
// File ini handle notifikasi saat aplikasi TERBUKA (foreground)
// Untuk background: lihat firebase-messaging-sw.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyAssjKSLJcpW-qzjmJKCOioXerB6yAF1ZY",
  authDomain: "sahabat-hijrah-f3faa.firebaseapp.com",
  projectId: "sahabat-hijrah-f3faa",
  storageBucket: "sahabat-hijrah-f3faa.firebasestorage.app",
  messagingSenderId: "942786617779",
  appId: "1:942786617779:web:eac409c4eb48f58768abc6"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// VAPID key dari Firebase Console
const vapidKey = "BOPG9yoBLt_1_UkKX4JWt2EN0xnerR6whYdKtWGBWKL1nC19clYOIU3BBGvLN66r-0or8psyhXUo5f-aNG-psHA";

// Request permission & dapat token
export async function initPushNotif() {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, { vapidKey });
      console.log('FCM Token:', token);
      localStorage.setItem('fcm_token', token);
      return token;
    } else {
      console.log('Permission ditolak:', permission);
      return null;
    }
  } catch (error) {
    console.error('FCM init error:', error);
    return null;
  }
}

// Handle notifikasi saat aplikasi TERBUKA
export function onForegroundMessage(callback) {
  onMessage(messaging, (payload) => {
    console.log('Pesan foreground:', payload);
    if (callback) callback(payload);
  });
}

// Tampilkan notifikasi manual (foreground)
export function showForegroundNotif(payload) {
  const title = payload.notification?.title || 'Sahabat Hijrah';
  const body = payload.notification?.body || '';
  
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, {
      body: body,
      icon: 'icon-192.png',
      badge: 'icon-192.png'
    });
  }
}

// Export untuk window (agar bisa dipanggil dari HTML)
window.initPushNotif = initPushNotif;
window.onForegroundMessage = onForegroundMessage;
window.showForegroundNotif = showForegroundNotif;
