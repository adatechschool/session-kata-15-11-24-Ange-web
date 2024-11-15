
const latinToMorse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..'
};


const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
};


function getMorseCharacterList(morseText) {
    return morseText.split(' '); 
}


function translateMorseCharacter(morseCharacter) {
    return morseToLatin[morseCharacter] || ''; 
}


function decode(morseText) {
    const words = morseText.split(' / '); 
    return words
        .map(word => {
            const characters = getMorseCharacterList(word); 
            return characters
                .map(char => translateMorseCharacter(char)) 
                .join(''); 
        })
        .join(' '); 
}


const decodedText = decode(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
console.log(decodedText);

