let firstLetterCapital = (name) => {
    let nameArr = name.split("");
    let newNameArr = nameArr.map((value, i) => {
      if (i === 0) {
        return value.toUpperCase();
      } else {
        return value.toLowerCase();
      }
    });
    let output = newNameArr.join("");
    return output;
  };
  
  let eachWordCapital = (sentence) => {
    let sentenceArr = sentence.split(" ");
    let newSentenceArr = sentenceArr.map((value, i) => {
      let capitalizeWord = firstLetterCapital(value);
      return capitalizeWord;
    });
    let output = newSentenceArr.join(" ");
    return output;
  };
  
  let _eachWordCapital = eachWordCapital("my name is pra");
  console.log(_eachWordCapital);
  