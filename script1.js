// ==UserScript==
// @name New Script2
// @namespace Script Runner Pro
// @match *://*/*
// @grant none
// ==/UserScript==

//buka halaman>cek index saat ini>pilih 1 index di bawah>klik semua radio>kirim. loop lagi/pencet tombol
//buka halaman>cek index saat ini>pilih 1 index di bawah>ambil data value baru>POST untuk ambil form

$(document.body).on("keydown", this, function (event) {
  if (event.keyCode == 65) {
    // Klik semuanya
    $(`input[type="radio"][Value$="Ada"]`).prop("checked", true); // Klik semua tombol yang mengandung kata "Ada"
    $(`input[type="radio"][Value$="Ya"]`).prop("checked", true); // Klik semua tombol yang mengandung kata "Ya"
    $(`input[type="radio"][name$="12"]`).prop("checked", true); // Klik 'Tidak' pada pertanyaan 'Apakah anda menyukai kuliah online'
    $(`input[type="radio"][Value$="Wifi Rumah/Kos"]`).prop("checked", true); // Koneksi Internet apa yang digunakan
    $(`input[type="radio"][Value$="Laptop"]`).prop("checked",true); // Perangkat yang digunakan dalam kuliah online
    $(`input[type="radio"][Value$="Kuliah Online"]`).prop("checked", true); // Metode apa yang adan sukai dalam memahami materi kuliah
    $(`input[type="radio"][Value$="Ms Teams"]`).prop("checked", true); // Jika menyukai media online, anda lebih menyukai media apa
    
    const regex = /(?:\\[tn"\"]|[\t\n]+)+/gim;
    const str =  $('select#dosen_pengampu>option:selected').text();
    const subst = ``;
    const result = str.replace(regex, subst);
    
    alert(result+" SUDAH DIKIRIM");
    
    //scroll ke bawah
    $('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
    }
});
