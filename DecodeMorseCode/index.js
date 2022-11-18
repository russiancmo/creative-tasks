decodeMorse = function (morseCode) {
  const wordsArray = morseCode.split("   ").map((item) => item.split(" "));

  let wordsRes = [];

  wordsArray.forEach((item) => {
    if (item) {
      let wordItem = "";
      item.forEach((word) => {
        if (MORSE_CODE[word]) {
          wordItem += MORSE_CODE[word];
        }
      });

      if (wordItem !== "") {
        wordsRes.push(wordItem);
      }
    }
  });

  return wordsRes.join(" ");
};
