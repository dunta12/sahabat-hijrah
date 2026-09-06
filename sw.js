const CACHE='sh-v4';
const ASSETS=['./','./index.html','./manifest.json','./adhan.mp3','./icon-192.png','./icon-512.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>Promise.all(ASSETS.map(u=>c.add(u).catch(()=>{})))));
  self.skipWaiting();
});

self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});

/* fetch dengan batas waktu agar halaman tidak menggantung */
function fetchT(req,ms){
  const ctl=new AbortController();
  const t=setTimeout(()=>ctl.abort(),ms);
  return fetch(req,{signal:ctl.signal}).finally(()=>clearTimeout(t));
}

function save(req,res){
  const copy=res.clone();
  caches.open(CACHE).then(c=>c.put(req,copy));
  return res;
}

self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;

  const sameOrigin=new URL(e.request.url).origin===location.origin;

  /* navigasi halaman: network dulu, fallback cache */
  if(e.request.mode==='navigate'){
    e.respondWith(
      fetchT(e.request,8000)
        .then(res=>save(e.request,res))
        .catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html')))
    );
    return;
  }

  /* aset sendiri & API luar: pakai cache segera bila ada,
     sambil perbarui di latar belakang */
  e.respondWith(
    caches.match(e.request).then(hit=>{

      const net=fetchT(e.request,8000)
        .then(res=>save(e.request,res))
        .catch(()=>null);

      if(hit){net.catch(()=>{});return hit;}

      return net.then(r=>{
        if(r)return r;
        /* jawaban error yang jelas, BUKAN index.html,
           supaya halaman bisa menampilkan pesan gagal */
        return new Response('{"error":"offline"}',{
          status:504,
          headers:{'Content-Type':'application/json'}
        });
      });
    })
  );
});
