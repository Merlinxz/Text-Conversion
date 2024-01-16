// Conversion Functions

// Convert text to binary
function textToBinary(text) {
    return text.split('').map(char => {
        const binary = char.charCodeAt(0).toString(2);
        return '0'.repeat(8 - binary.length) + binary;
    }).join(' ');
}

// Convert text to hex
function textToHex(text) {
    return text.split('').map(char => {
        const hex = char.charCodeAt(0).toString(16);
        return ('00' + hex).slice(-2);
    }).join(' ');
}

// Convert binary to text
function binaryToText(binaryString) {
    return binaryString.split(' ').map(binary => String.fromCharCode(parseInt(binary, 2))).join('');
}

// Convert hex to text
function hexToText(hexString) {
    return hexString.split(' ').map(hex => String.fromCharCode(parseInt(hex, 16))).join('');
}

// Convert decimal to binary
function decimalToBinary(decimalNumber) {
    const binary = parseInt(decimalNumber, 10).toString(2);
    return '0'.repeat(8 - binary.length % 8) + binary;
}

// Convert binary to decimal
function binaryToDecimal(binaryString) {
    return parseInt(binaryString, 2).toString(10);
}

// Convert decimal to hex
function decimalToHex(decimalNumber) {
    const hex = parseInt(decimalNumber, 10).toString(16);
    return ('00' + hex).slice(-2);
}

// Convert hex to decimal
function hexToDecimal(hexString) {
    return parseInt(hexString, 16).toString(10);
}

// Base64 encoding
function base64Encode(text) {
    return btoa(text);
}

// Base64 decoding
function base64Decode(base64Text) {
    try {
        return atob(base64Text);
    } catch (error) {
        return 'Invalid Base64 encoding';
    }
}

// URL encoding
function urlEncode(text) {
    return encodeURIComponent(text);
}

// URL decoding
function urlDecode(urlEncodedText) {
    try {
        return decodeURIComponent(urlEncodedText);
    } catch (error) {
        return 'Invalid URL encoding';
    }
}

// User Interface Functions

// Update input label based on selected conversion type
function updateInputLabel() {
    var conversionType = document.getElementById('conversionType').value;
    var inputLabel = 'Enter ';

    switch (conversionType) {
        case 'textToBinary':
            inputLabel += 'Text:';
            break;
        case 'textToHex':
            inputLabel += 'Text:';
            break;
        case 'binaryToText':
            inputLabel += 'Binary:';
            break;
        case 'hexToText':
            inputLabel += 'Hex:';
            break;
        case 'decimalToBinary':
            inputLabel += 'Decimal:';
            break;
        case 'binaryToDecimal':
            inputLabel += 'Binary:';
            break;
        case 'decimalToHex':
            inputLabel += 'Decimal:';
            break;
        case 'hexToDecimal':
            inputLabel += 'Hex:';
            break;
        case 'base64Encode':
            inputLabel += 'Text:';
            break;
        case 'base64Decode':
            inputLabel += 'Base64 Encoded Text:';
            break;
        case 'urlEncode':
            inputLabel += 'Text:';
            break;
        case 'urlDecode':
            inputLabel += 'URL Encoded Text:';
            break;
        default:
            inputLabel = 'Enter Text:';
    }

    document.getElementById('textInputLabel').textContent = inputLabel;
}

// Convert data based on selected conversion type
function convertData() {
    var conversionType = document.getElementById('conversionType').value;
    var inputText = document.getElementById('textInput').value;

    switch (conversionType) {
        case 'textToBinary':
            var binaryResult = textToBinary(inputText);
            displayResult(binaryResult, 'Binary');
            break;
        case 'textToHex':
            var hexResult = textToHex(inputText);
            displayResult(hexResult, 'Hex');
            break;
        case 'binaryToText':
            var textResult = binaryToText(inputText);
            displayResult(textResult, 'Text');
            break;
        case 'hexToText':
            var textResult = hexToText(inputText);
            displayResult(textResult, 'Text');
            break;
        case 'decimalToBinary':
            var binaryResult = decimalToBinary(inputText);
            displayResult(binaryResult, 'Binary');
            break;
        case 'binaryToDecimal':
            var decimalResult = binaryToDecimal(inputText);
            displayResult(decimalResult, 'Decimal');
            break;
        case 'decimalToHex':
            var hexResult = decimalToHex(inputText);
            displayResult(hexResult, 'Hex');
            break;
        case 'hexToDecimal':
            var decimalResult = hexToDecimal(inputText);
            displayResult(decimalResult, 'Decimal');
            break;
        case 'base64Encode':
            var base64Result = base64Encode(inputText);
            displayResult(base64Result, 'Base64 Encoded');
            break;
        case 'base64Decode':
            var base64Result = base64Decode(inputText);
            displayResult(base64Result, 'Decoded Text');
            break;
        case 'urlEncode':
            var urlEncodedResult = urlEncode(inputText);
            displayResult(urlEncodedResult, 'URL Encoded');
            break;
        case 'urlDecode':
            var urlDecodedResult = urlDecode(inputText);
            displayResult(urlDecodedResult, 'Decoded Text');
            break;
        default:
            displayResult('Invalid conversion type', '');
    }
}

// Display result and show the "Copy Result" button
function displayResult(result, type) {
    var resultElement = document.getElementById('result');
    var copyButton = document.querySelector('.result-container button');

    if (type !== '') {
        resultElement.innerHTML = type + ': ' + result;
    } else {
        resultElement.innerHTML = result;
    }

    // Show the button when there is a result
    copyButton.style.display = result ? 'inline-block' : 'none';
}

// Copy result to clipboard
function copyToClipboard() {
    var resultElement = document.getElementById('result');
    var resultText = resultElement.innerText;

    var textarea = document.createElement('textarea');
    textarea.value = resultText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Result copied to clipboard!');
}