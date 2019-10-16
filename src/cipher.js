window.cipher = {
  encode: (string, offset) => {
    let msjcifrado = "";
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        msjcifrado += String.fromCharCode((string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65);
      } 
      if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        msjcifrado += String.fromCharCode((string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97);
      }
    }
    return msjcifrado;
  },

  decode: (string, offset) => {
    let msjdescifrado = "";
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        msjdescifrado += String.fromCharCode((string.charCodeAt(i) - 90 - parseInt(offset)) % 26 + 90);
      } 
      if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        msjdescifrado += String.fromCharCode((string.charCodeAt(i) - 122 - parseInt(offset)) % 26 + 122);
      }
    }
    return msjdescifrado
  }
};


