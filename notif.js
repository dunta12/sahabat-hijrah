// ===== NOTIFIKASI LOKAL - SAHABAT HIJRAH =====
// Versi: 0.1 (Persiapan v7)
// Status: BELUM AKTIF

let notifReady = false;
let notifPermission = 'default'; // 'default', 'granted', 'denied'

// Inisialisasi notifikasi
async function initNotif() {
  if (!('Notification' in window)) {
    console.log('Browser tidak support notifikasi');
    return;
  }
  
  notifPermission = Notification.permission;
  notifReady = true;
  console.log('Notifikasi siap. Status:', notifPermission);
}

// Request permission (dipanggil saat user interact)
function requestNotifPermission() {
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission().then(permission => {
      notifPermission = permission;
      console.log('Permission notifikasi:', permission);
    });
  }
}

// Kirim notifikasi sederhana
function kirimNotif(judul, opsi = {}) {
  if (notifReady && notifPermission === 'granted') {
    new Notification(judul, {
      body: opsi.body || '',
      icon: opsi.icon || 'icon-192.png',
      badge: opsi.badge || 'icon-192.png',
      tag: opsi.tag || 'default',
      requireInteraction: opsi.requireInteraction || false,
      silent: opsi.silent || false
    });
  }
}

// Schedule notifikasi (pakai setTimeout)
function jadwalNotif(judul, delayMs, opsi = {}) {
  setTimeout(() => {
    kirimNotif(judul, opsi);
  }, delayMs);
}

// ===== FITUR YANG AKAN DIBUAT (BELUM AKTIF) =====
// 1. Notifikasi waktu sholat (butuh integrasi dengan jadwal)
// 2. Notifikasi "Lanjutkan bacaan Quran" (butuh data sh_q_last)
// 3. Notifikasi adzan (butuh audio + trigger)

// Export fungsi yang dibutuhkan
window.initNotif = initNotif;
window.requestNotifPermission = requestNotifPermission;
window.kirimNotif = kirimNotif;
window.jadwalNotif = jadwalNotif;
