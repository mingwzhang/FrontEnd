    function palindrome(word) {

        let reversedWord = "";

        let lowerCaseWord = word.toLowerCase();


        for(let i = lowerCaseWord.length-1; i >= 0; i--)
            {
                reversedWord += lowerCaseWord[i];
            }

        return lowerCaseWord == reversedWord;
    }

    console.log(palindrome("Racecar"));
    console.log(palindrome("Madam"));
    console.log(palindrome("Moonlight"));
    console.log(palindrome("Aviary"));