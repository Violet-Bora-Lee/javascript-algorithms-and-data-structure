function isAlphaNemeric(char) {
    var code = char.charCodeAt(0)
    if ( !(code > 47 && code < 58) &&  // 숫자(0-9)
         !(code > 64 && code < 91) &&  // 대문자(A-Z)
         !(code > 96 && code < 123)) { // 소문자(a-z)
        return false;
      }
      return true;
  }