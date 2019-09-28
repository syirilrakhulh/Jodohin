function getInput() {
  var male = document.getElementById("male").value;
  var female = document.getElementById("female").value;

  if (!male || !female) {
    alert("Input tidak boleh kosong!");
    return getInput();
  }
}

function jodohin() {
  getInput();
  var batas = 100;
  var hasil = Math.floor(Math.random() * batas);
  if (hasil === 0) {
    document.getElementById("result").innerHTML = "Maaf kamu bukan jodoh dia";
  } else {
    document.getElementById("result").innerHTML = "Hasil : " + hasil + " %";
  }
}
