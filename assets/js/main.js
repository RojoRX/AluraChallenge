document.addEventListener("DOMContentLoaded", function () {
    // Obtener una referencia al botón por su ID
    var button = document.getElementById("myButton");
    var optionButton = document.getElementById("optionButton");
    // Obtener una referencia al campo de entrada por su ID
    var input = document.getElementById("text");

    if (button) {
        // Asignar el controlador de eventos utilizando addEventListener
        button.addEventListener("click", copyText);
    }
    if (optionButton) {
        optionButton.addEventListener("click", selectOption);
    }
    // Agregar un controlador de eventos para el evento 'input'
    input.addEventListener("input", function () {
        var inputValue = input.value;
        var validInput = inputValue.replace(/[^a-z\u00A0\s]/g, "").toLowerCase();
        // Actualizar el valor del campo de entrada con el contenido válido
        input.value = validInput;
    });
});
function copyText() {
    var result = document.getElementById("result").value;
    navigator.clipboard.writeText(result);
}
let replacements = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};
function selectOption() {
    var message = document.getElementById("text").value;
    var option = document.getElementById("option").value;
    var result = "";

    if (option === "encript") { // Lógica de encriptación
        result = encryptMessage(message, replacements);
    } else if (option === "decript") { // Lógica de desencriptación
        result = decryptMessage(message, replacements);
    }

    document.getElementById("result").value = result;
}
function encryptMessage(message, replacements) {
    let encryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
        let letter = message[i];
        let replacement = replacements[letter];

        if (replacement) {
            encryptedMessage += replacement;
        } else {
            encryptedMessage += letter;
        }
    }
    return encryptedMessage;
}
function decryptMessage(encryptedMessage, replacements) {
    let decryptedMessage = encryptedMessage;
    for (const [original, replacement] of Object.entries(replacements)) {
        decryptedMessage = decryptedMessage.split(replacement).join(original);
    }
    return decryptedMessage;
}