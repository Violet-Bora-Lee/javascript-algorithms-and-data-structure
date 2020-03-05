function charCount1(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
      var char = str[i].toLowerCase();
      if (/[a-z0-9]/.test(char)) {
        if (obj[char] > 0) {
          obj[char]++;
        } else {
          obj[char] = 1;
        };
      }
    }
    return obj;
  }

  function charCount2(str) {
    var obj = {};
    for (var char of str) {
      char = char.toLowerCase();
      if (/[a-z0-9]/.test(char)) {
        obj[char] = ++obj[char] || 1;
      }
    }
    return obj;
  }

  function charCount3(str) {
    var obj = {};
    for (var char of str) {
      char = char.toLowerCase();
      if (isAlphaNumeric(char)) {
        char = char.toLowerCase();
        obj[char] = ++obj[char] || 1;
      }
    }
    return obj;
  }
  
  function isAlphaNumeric(char) {
    var code = char.charCodeAt(0)
    if ( !(code > 47 && code < 58) &&  // 숫자(0-9)
         !(code > 64 && code < 91) &&  // 대문자(A-Z)
         !(code > 96 && code < 123)) { // 소문자(a-z)
        return false;
      }
      return true;
  }