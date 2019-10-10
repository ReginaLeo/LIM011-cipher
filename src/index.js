window.onload = () => {
    const pantalla_cifrado = document.getElementById("Ciphering")
    const pantalla_descifrado = document.getElementById("Deciphering")
    const cabecera = document.getElementById("cabecera")
    //Pantalla al elegir opción de CIFRADO
    const cipher_option = document.getElementById("cipher-opt")
    cipher_option.addEventListener("click", function () {
        pantalla_cifrado.classList.remove("hide");
        cabecera.classList.add("hide");
    });
    //Pantalla al elegir opción de DESCIFRADO
    const decipher_option = document.getElementById("decipher-opt")
    decipher_option.addEventListener("click", function () {
        pantalla_descifrado.classList.remove("hide");
        cabecera.classList.add("hide");
    });

    // botones para volver a inicio

    const inicio = document.getElementById("btnPlay")
    inicio.addEventListener("click", function () {
        location.reload()
    });

    const start = document.getElementById("btnStart")
    start.addEventListener("click", function () {
        location.reload()
    });

    //botones para Limpiar

    const cleanc = document.getElementById("btnCleanc");
    cleanc.addEventListener("click", function () {
        let bxTxt = document.getElementById("boxCipher")
        bxTxt.value = "";
        let key_numberc = document.getElementById("number_offsetc")
        key_numberc.value = "";
        let cajaRespuestaC = document.getElementById("msg-cipher-check")
        cajaRespuestaC.innerHTML = "";
    });

    const cleand = document.getElementById("btnCleand");
    cleand.addEventListener("click", function () {
        let bxTxt = document.getElementById("boxDecipher")
        bxTxt.value = "";
        let key_numberd = document.getElementById("number_offsetd")
        key_numberd.value = "";
        let cajaRespuestaD = document.getElementById("msg-decipher-check")
        cajaRespuestaD.value = "";
    });

    //tomando el valor del texto a cifrar 

    const btnTextCipher = document.getElementById("btn_cipher");
    btnTextCipher.addEventListener("click", function () {
        let textCipher = document.getElementById("boxCipher").value;
        let number_offset = document.getElementById("number_offsetc").value;
        document.getElementById("msg-cipher-check").innerHTML = window.cipher.encode(textCipher, number_offset);
    });

      //tomando el valor del texto a descifrar 

    const btnTextDecipher = document.getElementById("btn_decipher");
    btnTextDecipher.addEventListener("click", function () {
        let textDecipher = document.getElementById("boxDecipher").value;
        let number_offset = document.getElementById("number_offsetd").value;
        document.getElementById("msg-decipher-check").innerHTML = window.cipher.decode(textDecipher, number_offset);

    });

}