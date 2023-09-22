let palindrome = (word) => {
    let userWord=word.toLowerCase();
    let convertToArray = userWord.split("");
    let reverseArray = convertToArray.reverse(); 
    let convertToString = reverseArray.join("");
    if(userWord===convertToString){
        console.log(`the ${word} is palindrome`)
    }
    else{
        console.log(`the ${word} is not palindrome`)
    }
    
  }
  
  palindrome("lool")

  



