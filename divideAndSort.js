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
  parseInt(result) // mengubah string menjadi number
  console.log(result);
}

divideAndSort(5956560159466056);

const divideAndSort = (number) => {
    let result = number.toString().split("0")
    newArr = result.map(item =>{
        return item.split("").sort((a,b) => {return a,b}).join("")
    })
    finalResult = Number.parseInt(newArr.join(""))
    console.log(finalResult)
}
divideAndSort(5956560159466056)
