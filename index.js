// palindrome
function checkPalindrome(String) {
  const smallStr = String.toLowerCase();
  for (var i = 0; i < smallStr.length; i++) {
    var strAwal = i;
    var strAkhir = smallStr.length - i - 1;

    if (smallStr.charAt(strAwal) == smallStr.charAt(strAkhir)) {
      console.log("Palindrome");
      return true;
    } else {
      console.log("Bukan Palindrome");
      return false;
    }
  }
}
checkPalindrome("malam");

// reverse words
var newString = "";
var str = "saya belajar javascript";
var word = "";
var c;
var stack = [];

for (var i = 0; i < str.length; i++) {
  c = str[i];
  word += c;
  if (c == " " || i == str.length - 1) {
    stack.push(word);
    word = "";
  }
}
while ((x = stack.pop())) {
  newString += x + " ";
}
console.log(newString);

// FazzFood
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

  subtotal = harga + biaya_antar + pajak - potongan;

  console.log("Potongan : " + potongan);
  console.log("Biaya antar : " + biaya_antar);
  console.log("Pajak : " + pajak);
  console.log("Subtotal : " + subtotal);
}

FazzFood(75000, "FAZZFOOD50", 5, true);

// divide and sort
function divideAndSort(number) {
  let digits = ("" + number).split("");

  let number1 = "";
  let number2 = "";
  let number3 = "";

  let numberArray1 = [];
  let numberArray2 = [];
  let numberArray3 = [];

  let first = false;
  let second = false;
  let third = false;

  for (let i = 0; i < digits.length; i++) {
    if (first == false) {
      if (digits[i] != 0) {
        numberArray1.push(digits[i]);
      } else {
        first = true;
      }
      continue;
    }

    if (second == false) {
      if (digits[i] != 0) {
        numberArray2.push(digits[i]);
      } else {
        second = true;
      }
      continue;
    }

    if (third == false) {
      if (digits[i] != 0) {
        numberArray3.push(digits[i]);
      } else {
        third = true;
      }
      continue;
    }
  }

  // sorting
  let a = numberArray1.sort(function (a, b) {
    return a - b;
  });
  let b = numberArray2.sort(function (a, b) {
    return a - b;
  });
  let c = numberArray3.sort(function (a, b) {
    return a - b;
  });

  // gabung array menjadi string
  for (let i = 0; i < a.length; i++) {
    number1 = number1.concat(a[i]);
  }

  for (let i = 0; i < b.length; i++) {
    number2 = number2.concat(b[i]);
  }

  for (let i = 0; i < c.length; i++) {
    number3 = number3.concat(c[i]);
  }

  let result = number1.concat(number2);
  result = result.concat(number3);
  parseInt(result); // mengubah string menjadi number
  console.log(result);
}

divideAndSort(5956560159466056);

const divideAndSort = (number) => {
  let result = number.toString().split("0");
  newArr = result.map((item) => {
    return item
      .split("")
      .sort((a, b) => {
        return a, b;
      })
      .join("");
  });
  finalResult = Number.parseInt(newArr.join(""));
  console.log(finalResult);
};
divideAndSort(5956560159466056);
