/* ===== Hadits Harian · Arbain Nawawi (42 butir) =====
   Matan Arab: penggalan inti teks klasik (domain publik).
   Renderan ID/EN: ringkasan makna buatan rumah ini, bukan salinan terjemahan berbayar.
   Label menyebut posisi butir dalam koleksi, bukan nomor cetakan. */
const HADITS=[
{n:1,th:'Niat',a:'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ',i:'Sesungguhnya setiap amal tergantung pada niatnya.',e:'Deeds are judged only by their intentions.',r:'HR. Bukhari & Muslim'},
{n:2,th:'Rukun Islam',a:'بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ',i:'Islam dibangun di atas lima perkara.',e:'Islam is built upon five pillars.',r:'HR. Bukhari & Muslim'},
{n:3,th:'Ihsan',a:'أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ',i:'Sembahlah Allah seolah engkau melihat-Nya; bila engkau tidak melihat-Nya, sesungguhnya Ia melihatmu.',e:'Worship Allah as though you see Him; though you see Him not, He sees you.',r:'HR. Muslim'},
{n:4,th:'Takdir',a:'إِنَّ أَحَدَكُمْ يُجْمَعُ خَلْقُهُ فِي بَطْنِ أُمِّهِ أَرْبَعِينَ يَوْمًا',i:'Penciptaan tiap kalian dikumpulkan dalam rahim ibunya empat puluh hari, lalu takdirnya ditetapkan.',e:'Each of you is gathered in his mother’s womb for forty days, then his decree is written.',r:'HR. Bukhari & Muslim'},
{n:5,th:'Bid’ah tertolak',a:'مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ مِنْهُ فَهُوَ رَدٌّ',i:'Siapa mengada-adakan dalam urusan kami ini yang bukan darinya, maka ia tertolak.',e:'Whoever invents in this matter of ours what is not from it, it is rejected.',r:'HR. Bukhari & Muslim'},
{n:6,th:'Halal & haram',a:'الْحَلَالُ بَيِّنٌ وَالْحَرَامُ بَيِّنٌ',i:'Yang halal itu jelas dan yang haram itu jelas; di antara keduanya ada perkara samar.',e:'The lawful is clear and the unlawful is clear; between them are doubtful matters.',r:'HR. Bukhari & Muslim'},
{n:7,th:'Nasihat',a:'الدِّينُ النَّصِيحَةُ',i:'Agama ini adalah nasihat.',e:'This religion is sincere counsel.',r:'HR. Muslim'},
{n:8,th:'Syahadat & sholat',a:'أُمِرْتُ أَنْ أُقَاتِلَ النَّاسَ حَتَّى يَشْهَدُوا أَنْ لَا إِلَهَ إِلَّا اللَّهُ',i:'Aku diperintah memerangi manusia hingga mereka bersaksi tiada tuhan selain Allah dan menegakkan sholat.',e:'I was commanded to fight mankind until they testify there is no god but Allah and establish prayer.',r:'HR. Bukhari & Muslim'},
{n:9,th:'Semampu & jauhi',a:'مَا نَهَيْتُكُمْ عَنْهُ فَاجْتَنِبُوهُ وَمَا أَمَرْتُكُمْ بِهِ فَأْتُوا مِنْهُ مَا اسْتَطَعْتُمْ',i:'Apa yang kularang, jauhilah; apa yang kuperintah, lakukanlah semampu kalian.',e:'Shun what I forbid; do what I command as much as you can.',r:'HR. Bukhari & Muslim'},
{n:10,th:'Yang baik',a:'إِنَّ اللَّهَ طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا',i:'Sesungguhnya Allah Maha Baik dan tidak menerima kecuali yang baik.',e:'Allah is Good and accepts only what is good.',r:'HR. Muslim'},
{n:11,th:'Tinggalkan syubhat',a:'دَعْ مَا يَرِيبُكَ إِلَى مَا لَا يَرِيبُكَ',i:'Tinggalkan apa yang meragukanmu kepada apa yang tidak meragukanmu.',e:'Leave what makes you doubt for what does not make you doubt.',r:'HR. Tirmidzi & Nasa’i'},
{n:12,th:'Yang tak berguna',a:'مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ',i:'Di antara kebaikan Islam seseorang: meninggalkan apa yang tidak bermanfaat baginya.',e:'Part of a person’s good Islam is leaving what does not concern him.',r:'HR. Tirmidzi'},
{n:13,th:'Cinta saudara',a:'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',i:'Tidak beriman salah seorang kalian hingga mencintai untuk saudaranya apa yang ia cintai untuk dirinya.',e:'None of you truly believes until he loves for his brother what he loves for himself.',r:'HR. Bukhari & Muslim'},
{n:14,th:'Jangan marah',a:'لَا تَغْضَبْ',i:'Jangan marah.',e:'Do not be angry.',r:'HR. Bukhari'},
{n:15,th:'Berkata baik',a:'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',i:'Barangsiapa beriman kepada Allah dan hari akhir, hendaklah berkata baik atau diam.',e:'Whoever believes in Allah and the Last Day, let him speak good or remain silent.',r:'HR. Bukhari & Muslim'},
{n:16,th:'Takwa & akhlak',a:'اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا',i:'Bertakwalah kepada Allah di mana pun engkau berada; iringilah keburukan dengan kebaikan yang menghapusnya.',e:'Fear Allah wherever you are; follow a bad deed with a good one that erases it.',r:'HR. Tirmidzi'},
{n:17,th:'Ihsan segala hal',a:'إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ',i:'Sesungguhnya Allah mewajibkan berbuat ihsan atas segala sesuatu.',e:'Allah has prescribed excellence in everything.',r:'HR. Muslim'},
{n:18,th:'Minta pada Allah',a:'إِذَا سَأَلْتَ فَاسْأَلِ اللَّهَ وَإِذَا اسْتَعَنْتَ فَاسْتَعَنْ بِاللَّهِ',i:'Bila engkau meminta, mintalah kepada Allah; bila memohon pertolongan, mohonlah kepada Allah.',e:'If you ask, ask Allah; if you seek help, seek help from Allah.',r:'HR. Tirmidzi'},
{n:19,th:'Malu',a:'إِنْ لَمْ تَسْتَحِ فَاصْنَعْ مَا شِئْتَ',i:'Bila engkau tidak malu, berbuatlah apa yang engkau kehendaki.',e:'If you feel no shame, then do as you wish.',r:'HR. Bukhari'},
{n:20,th:'Istiqamah',a:'قُلْ آمَنْتُ بِاللَّهِ ثُمَّ اسْتَقِمْ',i:'Katakanlah: aku beriman kepada Allah; kemudian istiqamahlah.',e:'Say: I believe in Allah; then stand straight.',r:'HR. Muslim'},
{n:21,th:'Sucian separuh iman',a:'الطُّهُورُ شَطْرُ الْإِيمَانِ',i:'Bersuci itu separuh dari iman.',e:'Purity is half of faith.',r:'HR. Muslim'},
{n:22,th:'Birr & dosa',a:'الْبِرُّ حُسْنُ الْخُلُقِ وَالْإِثْمُ مَا حَاكَ فِي نَفْسِكَ',i:'Kebaikan adalah akhlak yang baik; dosa adalah apa yang mengganjal di dadamu dan engkau benci orang lain mengetahuinya.',e:'Righteousness is good character; sin is what wavers in your soul and you would hate others to know.',r:'HR. Muslim'},
{n:23,th:'Zalim diharamkan',a:'يَا عِبَادِي إِنِّي حَرَّمْتُ الظُّلْمَ عَلَى نَفْسِي وَجَعَلْتُهُ بَيْنَكُمْ مُحَرَّمًا',i:'Wahai hamba-hamba-Ku, sesungguhnya Aku mengharamkan kezaliman atas diri-Ku dan menjadikannya haram di antara kalian.',e:'O My servants, I have forbidden oppression for Myself and made it forbidden among you.',r:'HR. Muslim'},
{n:24,th:'Sedekah ruas tubuh',a:'كُلُّ سُلَامَى مِنَ النَّاسِ عَلَيْهِ صَدَقَةٌ كُلَّ يَوْمٍ تَطْلُعُ فِيهِ الشَّمْسُ',i:'Setiap ruas tulang manusia wajib bersedekah pada setiap hari terbit matahari.',e:'Every joint of a person owes a charity each day the sun rises.',r:'HR. Bukhari & Muslim'},
{n:25,th:'Melapangkan & menutupi',a:'مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ',i:'Barangsiapa melapangkan satu kesusahan dunia dari seorang mukmin, Allah lapangkan baginya satu kesusahan hari kiamat; dan barangsiapa menutupi aib seorang muslim, Allah menutupi aibnya.',e:'Whoever relieves a believer of a worldly distress, Allah relieves him of a distress on the Day of Resurrection; and whoever conceals a Muslim, Allah conceals him.',r:'HR. Muslim'},
{n:26,th:'Jalan ilmu',a:'مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ',i:'Barangsiapa menempuh jalan mencari ilmu, Allah mudahkan baginya jalan menuju surga.',e:'Whoever travels a path seeking knowledge, Allah eases for him a path to Paradise.',r:'HR. Muslim'},
{n:27,th:'Mukmin yang kuat',a:'الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ',i:'Mukmin yang kuat lebih baik dan lebih dicintai Allah daripada mukmin yang lemah.',e:'The strong believer is better and more beloved to Allah than the weak believer.',r:'HR. Muslim'},
{n:28,th:'Jangan dengki',a:'لَا تَحَاسَدُوا وَلَا تَنَاجَشُوا وَلَا تَبَاغَضُوا وَلَا تَدَابَرُوا',i:'Janganlah kalian saling dengki, saling menipu, saling membenci, dan saling membelakangi.',e:'Do not envy one another, do not outbid one another, do not hate one another, do not turn away from one another.',r:'HR. Muslim'},
{n:29,th:'Darah yang terjaga',a:'لَا يَحِلُّ دَمُ امْرِئٍ مُسْلِمٍ إِلَّا بِإِحْدَى ثَلَاثٍ',i:'Tidak halal darah seorang muslim kecuali dengan satu dari tiga perkara.',e:'The blood of a Muslim is not lawful except in one of three cases.',r:'HR. Bukhari & Muslim'},
{n:30,th:'Zuhud',a:'ازْهَدْ فِي الدُّنْيَا يُحِبَّكَ اللَّهُ وَازْهَدْ فِيمَا عِنْدَ النَّاسِ يُحِبَّكَ النَّاسُ',i:'Zuhudlah terhadap dunia, niscaya Allah mencintaimu; zuhudlah terhadap apa yang di tangan manusia, niscaya manusia mencintaimu.',e:'Be ascetic toward the world and Allah will love you; be ascetic toward what people possess and people will love you.',r:'HR. Tirmidzi & Ibnu Majah'},
{n:31,th:'Menolong penindas & tertindas',a:'انْصُرْ أَخَاكَ ظَالِمًا أَوْ مَظْلُومًا',i:'Tolonglah saudaramu yang menindas maupun yang ditindas; menolong penindas adalah dengan menahan tangannya dari menindas.',e:'Help your brother whether he is the oppressor or the oppressed; helping the oppressor is by restraining him from oppression.',r:'HR. Bukhari'},
{n:32,th:'Dua kalimat ringan',a:'كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ ثَقِيلَتَانِ فِي الْمِيزَانِ حَبِيبَتَانِ إِلَى الرَّحْمَنِ',i:'Dua kalimat yang ringan di lisan, berat di timbangan, dan dicintai Yang Maha Pengasih: Subhanallahi wa bihamdihi, Subhanallahil Azhim.',e:'Two words light on the tongue, heavy in the scale, beloved to the Most Merciful: Subhanallahi wa bihamdihi, Subhanallahil Azhim.',r:'HR. Bukhari & Muslim'},
{n:33,th:'Amal tercatit',a:'مَنْ هَمَّ بِحَسَنَةٍ فَلَمْ يَعْمَلْهَا كَتَبَهَا اللَّهُ لَهُ عِنْدَهُ حَسَنَةً كَامِلَةً',i:'Barangsiapa berniat satu kebaikan lalu belum mengerjakannya, Allah mencatat baginya satu kebaikan sempurna.',e:'Whoever intends a good deed and does not do it, Allah still writes for him one complete good deed.',r:'HR. Bukhari & Muslim'},
{n:34,th:'Wali Allah',a:'مَنْ عَادَى لِي وَلِيًّا فَقَدْ آذَنْتُهُ بِالْحَرْبِ',i:'Barangsiapa memusuhi wali-Ku, sesungguhnya Aku mengumumkan perang kepadanya.',e:'Whoever shows enmity to a wali of Mine, I declare war upon him.',r:'HR. Bukhari'},
{n:35,th:'Keliru, lupa, dipaksa',a:'إِنَّ اللَّهَ تَجَاوَزَ عَنْ أُمَّتِي الْخَطَأَ وَالنِّسْيَانَ وَمَا اسْتُكْرِهُوا عَلَيْهِ',i:'Sesungguhnya Allah memaafkan umatku dari kekeliruan, kelupaan, dan apa yang mereka lakukan karena dipaksa.',e:'Allah pardons my community for error, forgetfulness, and what they do under coercion.',r:'HR. Ibnu Majah & Baihaqi'},
{n:36,th:'Pengembara',a:'كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ',i:'Jadilah engkau di dunia seperti orang asing atau seorang pengembara.',e:'Be in this world as though you were a stranger or a traveller.',r:'HR. Bukhari'},
{n:37,th:'Hawa mengikuti wahyu',a:'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يَكُونَ هَوَاهُ تَبَعًا لِمَا جِئْتُ بِهِ',i:'Tidak beriman salah seorang kalian hingga hawa nafsunya mengikuti apa yang kubawa.',e:'None of you truly believes until his desire follows what I have brought.',r:'HR. Baihaqi (hasan shahih)'},
{n:38,th:'Allah memandang hati',a:'إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ',i:'Sesungguhnya Allah tidak memandang rupa dan harta kalian, tetapi memandang hati dan amal kalian.',e:'Allah does not look at your forms or wealth, but at your hearts and deeds.',r:'HR. Muslim'},
{n:39,th:'Sayang yang di bumi',a:'ارْحَمُوا مَنْ فِي الْأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ',i:'Sayangilah yang ada di bumi, niscaya yang di langit menyayangimu.',e:'Show mercy to those on earth, and He who is in heaven will show mercy to you.',r:'HR. Tirmidzi & Abu Dawud'},
{n:40,th:'Amal yang konsisten',a:'أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ',i:'Amal yang paling dicintai Allah adalah yang paling berkesinambungan meskipun sedikit.',e:'The deeds most beloved to Allah are those done consistently, even if few.',r:'HR. Bukhari & Muslim'},
{n:41,th:'Penunjuk jalan',a:'مَنْ دَعَا إِلَى هُدًى كَانَ لَهُ مِنَ الْأَجْرِ مِثْلُ أُجُورِ مَنْ تَبِعَهُ',i:'Barangsiapa menyeru kepada petunjuk, baginya pahala sebesar pahala orang-orang yang mengikutinya.',e:'Whoever calls to guidance receives reward like the rewards of those who follow him.',r:'HR. Muslim'},
{n:42,th:'Senyum sedekah',a:'وَتَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ',i:'Senyummu di wajah saudaramu adalah sedekah bagimu.',e:'Your smile in your brother’s face is a charity for you.',r:'HR. Tirmidzi'}
];
/* ===== kartu harian: menyusup setelah kartu hikmah, dwibahasa ===== */
(function(){
  function pilih(){
    const hari=Math.floor(Date.now()/86400000);
    return HADITS[hari%HADITS.length];
  }
  function pasang(){
    const kartu=document.getElementById('hikmahCard');
    if(!kartu||!kartu.parentNode){setTimeout(pasang,300);return;}
    const en=(document.documentElement.lang==='en');
    const h=pilih();
    const w=document.createElement('div');
    w.className='card';
    w.style.cssText='border-left:4px solid #d4a017;margin-top:12px';
    w.innerHTML='<b style="font-size:13px;color:#1a5c44">'+(en?'🌿 Daily Hadith · Arbain Nawawi #':'🌿 Hadits Harian · Arbain Nawawi ke-')+h.n+' — '+h.th+'</b>'+
      '<div dir="rtl" style="font-size:20px;line-height:1.9;text-align:right;margin:8px 0">'+h.a+'</div>'+
      '<div style="font-size:14px;line-height:1.6">'+(en?h.e:h.i)+'</div>'+
      '<div style="font-size:12px;color:#5b6b63;margin-top:6px">'+h.r+'</div>';
    const b=document.createElement('button');
    b.style.cssText='margin-top:10px;background:#2d6a4f;color:#fff;border:none;border-radius:20px;padding:8px 18px;font-size:13px';
    b.textContent=en?'📤 Share':'📤 Bagikan';
    b.onclick=function(){
      const t=(en?h.e:h.i)+'\n'+h.a+'\n'+h.r+' — '+(en?'Daily Hadith, Sahabat Hijrah 🌙':'Hadits Harian, Sahabat Hijrah 🌙');
      if(navigator.share){navigator.share({text:t}).catch(function(){});}
      else if(navigator.clipboard){navigator.clipboard.writeText(t).then(function(){alert(en?'Hadith copied.':'Hadits tersalin.');});}
      else{alert(t);}
    };
    w.appendChild(b);
    kartu.parentNode.insertBefore(w,kartu.nextSibling);
  }
  pasang();
})();

