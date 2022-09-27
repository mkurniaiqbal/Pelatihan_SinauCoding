var jumlahAngkot = 10;
var angkotBeroperasi = 6;

for (var angkot = 1; angkot <= jumlahAngkot; angkot++) {
  if (angkot <= angkotBeroperasi) {
    console.log("Bus Transjakarta " + angkot + " Beroperasi dengan baik.");
  } else if (angkot <= jumlahAngkot && angkot != 8) {
    console.log("Bus Transjakarta " + angkot + " Sedang Tidak Beroperasi.");
  } else {
    console.log("Bus Transjakarta " + angkot + " Sedang Lembur.");
  }
}
