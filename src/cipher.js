window.cipher = {
    encode: (string, offset) => {
        let msjcifrado = "";
        for (let i = 0; i < string.length; i++) {
            let caracterC = string[i];
            if (caracterC.match(/[a-z]/i)) {
                if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                    msjcifrado += String.fromCharCode((string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65);

                } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                    msjcifrado += String.fromCharCode((string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97);
                }
            } else {
                msjcifrado += caracterC;
            }
        }

        return msjcifrado;
    },

    decode: (string, offset) => {
        let msjdescifrado = "";
        for (let i = 0; i < string.length; i++) {
            let caracterD = string[i];
            if (caracterD.match(/[a-z]/i)) {
                if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                    msjdescifrado += String.fromCharCode((string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65);

                } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                    msjdescifrado += String.fromCharCode((string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97);
                }
            } else {
                msjdescifrado += caracterD;
            }
        }

        return msjdescifrado;
    },
}


