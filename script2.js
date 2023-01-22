// ==UserScript==
// @name New Script
// @namespace Script Runner Pro
// @match *://*/*
// @grant none
// ==/UserScript==

//buka halaman>cek index saat ini>pilih 1 index di bawah>klik semua radio>kirim. loop lagi/pencet tombol
//buka halaman>cek index saat ini>pilih 1 index di bawah>ambil data value baru>POST untuk ambil form
document.onkeypress = function (e) {
  e = e || window.event;
  //Cek index saat ini
  var indexSelectedDosen = $("select#dosen_pengampu").prop('selectedIndex');
  console.log("Dosen yang dipilih berada di index ke = " + indexSelectedDosen);
  console.log($("select#dosen_pengampu").prop('value'));
 
  //Pilih 1 index ke bawah
  var newDosenIndex = indexSelectedDosen+1;
  $('select>option:eq('+newDosenIndex+')').prop('selected', true); //pilih dosen index ke n+1
  var indexAfterChangeDosen = $("select#dosen_pengampu").prop('selectedIndex');
  console.log("Dosen dipindahkan ke index = " + indexAfterChangeDosen);
  
  console.log($("select#dosen_pengampu").prop('value'));
  var valueBaru = $("select#dosen_pengampu").prop('value');
  var id_mks = valueBaru.split("|")[0];
  var id_dosen = valueBaru.split("|")[1];

}
  /*
  // Klik semuanya
  $(`input[type="radio"][Value$="Ada"]`).prop("checked", true); // Klik semua tombol yang mengandung kata "Ada"
  $(`input[type="radio"][Value$="Ya"]`).prop("checked", true); // Klik semua tombol yang mengandung kata "Ya"
  $(`input[type="radio"][name$="12"]`).prop("checked", true); // Klik 'Tidak' pada pertanyaan 'Apakah anda menyukai kuliah online'
  $(`input[type="radio"][Value$="Wifi Rumah/Kos"]`).prop("checked", true); // Koneksi Internet apa yang digunakan
  $(`input[type="radio"][Value$="Laptop"]`).prop("checked",true); // Perangkat yang digunakan dalam kuliah online
  $(`input[type="radio"][Value$="Kuliah Online"]`).prop("checked", true); // Metode apa yang adan sukai dalam memahami materi kuliah
  $(`input[type="radio"][Value$="Ms Teams"]`).prop("checked", true); // Jika menyukai media online, anda lebih menyukai media apa
*/
//};

//jumlah_dosen = $('select#dosen_pengampu>option').length; //(1 index+jumlah dosen). Result=17
//$('select#dosen_pengampu>option').filter(':selected').val() // Result '375457|1566' dengan id_dosen: 1566 dan id_mks: 375457
$.post("https://siap.undip.ac.id/evaluasi_perkuliahan/mhs/evaluasi/ajax/get-kuisioner",
  {
    nim:21060120140057,
    id_dosen:1009,
    id_mks:375462
  }
);
