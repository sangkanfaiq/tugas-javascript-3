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