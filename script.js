function ara() {
    // Kullanıcının girdiği isim ve soyisim değerlerini al
    var isim = document.getElementById("isim").value;
    var soyisim = document.getElementById("soyisim").value;

    // Kişi bilgileri
    var kisiVerisi = {
        "Ahmet": { soyisim: "Yılmaz", bilgi: "Ahmet Yılmaz, yazılım geliştirici." },
        "Ayşe": { soyisim: "Kara", bilgi: "Ayşe Kara, grafik tasarımcı." },
        "Mehmet": { soyisim: "Çelik", bilgi: "Mehmet Çelik, sistem yöneticisi." }
    };

    // Arama sonucu göstermek
    var sonucDiv = document.getElementById("sonuc");
    
    if (kisiVerisi[isim] && kisiVerisi[isim].soyisim === soyisim) {
        sonucDiv.innerHTML = kisiVerisi[isim].bilgi;
        sonucDiv.style.display = 'block'; // Sonuç kutusunu göster
    } else {
        sonucDiv.innerHTML = "Kişi bulunamadı.";
        sonucDiv.style.display = 'block'; // Sonuç kutusunu göster
    }
}
