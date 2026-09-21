/* ===== KUNCI RUMAH — satu-satunya tempat konfigurasi Firebase tinggal =====
   Diimpor oleh setiap halaman (index, sapaan, sapaan-en, …).
   Kunci browser Firebase memang dirancang publik; penjaga sejati data
   ialah Firestore Security Rules, dan pagar API kunci ini sudah dipasang. */
import { initializeApp }  from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth }        from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

export const konfigurasiFirebase = {
  apiKey:            "AIzaSyAssjKSLJcpW-qzjmJKCOioXerB6yAF1ZY", 
  authDomain:        "sahabat-hijrah-f3faa.firebaseapp.com",
  projectId:         "sahabat-hijrah-f3faa",
  storageBucket:     "sahabat-hijrah-f3faa.firebasestorage.app",
  messagingSenderId: "942786617779",
  appId:             "1:942786617779:web:eac409c4eb48f58768abc6"
};

export const app  = initializeApp(konfigurasiFirebase);
export const auth = getAuth(app);
export const db   = getFirestore(app);
