$(document).ready(function() {
    // Función para encriptar el texto
    function encrypt(text) {
        return text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    // Función para desencriptar el texto
    function decrypt(text) {
        return text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    // Función para copiar el texto al portapapeles
    function copyToClipboard(text) {
        var tempInput = $("<input>");
        $("body").append(tempInput);
        tempInput.val(text).select();
        document.execCommand("copy");
        tempInput.remove();
    }

    // Evento al hacer clic en el botón de encriptar
    $('#encrypt-button').click(function() {
        var codigo = $('#codigo').val();
        var encryptedText = encrypt(codigo);
        $('#response').text('Texto encriptado: ' + encryptedText);
        $('#data-log').append(
            '<li>' + encryptedText + 
            ' <button class="copy-button">Copiar</button></li>'
        );
    });

    // Evento al hacer clic en el botón de desencriptar
    $('#decrypt-button').click(function() {
        var codigo = $('#codigo').val();
        var decryptedText = decrypt(codigo);
        $('#response').text('Texto desencriptado: ' + decryptedText);
        $('#data-log').append(
            '<li>' + decryptedText + 
            ' <button class="copy-button">Copiar</button></li>'
        );
    });

    // Delegar el evento click para los botones de copiar
    $('#data-log').on('click', '.copy-button', function() {
        var textToCopy = $(this).parent().text().replace(" Copiar", "");
        copyToClipboard(textToCopy);
        alert('Texto copiado: ' + textToCopy);
    });
});
