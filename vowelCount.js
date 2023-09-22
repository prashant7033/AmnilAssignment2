function vowelCount(str) {

    str = str.toLowerCase();

    let vowelCount = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        vowelCount=vowelCount + 1;
      }
    }
    return vowelCount;
  }
  let _numberOfVowels = vowelCount("aeiou");
  console.log(`Number of vowels: ${_numberOfVowels}`);
  