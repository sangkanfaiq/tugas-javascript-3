function FazzFood(harga, voucher, jarak, pajak) {
  let potongan;
  let subtotal;
  let biaya_antar;

  if (pajak == true) {
    pajak = harga * 0.05;
  }

  if (typeof voucher != "string") {
    console.log("Voucher harus string");
    return false;
  }

  //tidak menggunakan voucher
  if (voucher == "") {
    potongan = 0;
  }

  let voucher1 = new RegExp("FAZZFOOD50", "gi");
  // console.log(voucher1)
  if (voucher.match(voucher1)) {
    if (harga >= 50000) {
      potongan = harga * (50 / 100);
      if (potongan >= 50000) {
        potongan = 50000;
      }
    }
  }
  let voucher2 = new RegExp("DITRAKTIR60", "gi");
  // console.log(voucher2)
  if (voucher.match(voucher2)) {
    if (harga >= 25000) {
      potongan = harga * (60 / 100);
      if (potongan >= 30000) {
        potongan = 30000;
      }
    }
  }

  biaya_antar = 5000;
  for (let i = 1; i < jarak + 1; i++) {
    if (i > 2) {
      biaya_antar += 3000;
    }
  }

  subtotal = (harga + biaya_antar + pajak) - potongan;

  console.log("Potongan : " + potongan);
  console.log("Biaya antar : " + biaya_antar);
  console.log("Pajak : " + pajak);
  console.log("Subtotal : " + subtotal);
}

FazzFood(75000, "FAZZFOOD50", 5, true);
