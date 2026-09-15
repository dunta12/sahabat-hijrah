/* ===== dlg.js: dialog dalam aplikasi, dipakai index.html & en.html ===== */
(function(){
  const EN=/(^|\/)en\.html$/.test(location.pathname)||
           (document.documentElement.lang||'').indexOf('en')===0;
  const BATAL=EN?'Cancel':'Batal';
  const SALIN=EN?'Long-press the text below, then copy:'
                :'Sentuh tahan teks di bawah, lalu salin:';
  function _dlg(){
    let w=document.getElementById('dlgWrap');
    if(w)return w;
    w=document.createElement('div');w.id='dlgWrap';
    w.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;z-index:99999;padding:20px';
    w.innerHTML='<div style="background:var(--card,#fff);color:var(--txt,#222);border-radius:16px;padding:18px;max-width:340px;width:100%;box-shadow:0 10px 30px rgba(0,0,0,.3)">'+
     '<div id="dlgMsg" style="white-space:pre-line;font-size:15px;line-height:1.5"></div>'+
     '<textarea id="dlgTa" style="display:none;width:100%;height:90px;margin-top:10px;font-size:13px;border:1px solid #bbb;border-radius:10px;padding:8px"></textarea>'+
     '<div style="display:flex;justify-content:flex-end;gap:10px;margin-top:16px">'+
     '<button id="dlgNo" style="background:none;border:none;color:var(--green,#1b6a4f);font-weight:700;padding:8px 14px"></button>'+
     '<button id="dlgOk" style="background:var(--green,#1b6a4f);color:#fff;border:none;border-radius:12px;padding:8px 18px;font-weight:700">OK</button></div></div>';
    document.body.appendChild(w);return w;
  }
  function kabari(p){
    const w=_dlg();
    document.getElementById('dlgMsg').textContent=p;
    document.getElementById('dlgTa').style.display='none';
    document.getElementById('dlgNo').style.display='none';
    w.style.display='flex';
    document.getElementById('dlgOk').onclick=function(){w.style.display='none';};
  }
  function tanya(p){
    return new Promise(function(res){
      const w=_dlg();
      document.getElementById('dlgMsg').textContent=p;
      document.getElementById('dlgTa').style.display='none';
      const no=document.getElementById('dlgNo');no.style.display='';no.textContent=BATAL;
      w.style.display='flex';
      document.getElementById('dlgOk').onclick=function(){w.style.display='none';res(true);};
      no.onclick=function(){w.style.display='none';res(false);};
    });
  }
  function salinTeks(t){
    const w=_dlg();
    document.getElementById('dlgMsg').textContent=SALIN;
    const ta=document.getElementById('dlgTa');ta.style.display='';ta.value=t;
    document.getElementById('dlgNo').style.display='none';
    w.style.display='flex';
    document.getElementById('dlgOk').onclick=function(){w.style.display='none';};
  }
  window.kabari=kabari;window.tanya=tanya;window.salinTeks=salinTeks;
  window.alert=function(p){kabari(p);};   /* 18 alert pensiun otomatis */
})();
