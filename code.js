// To run the code, open it in the browser using the VS Code Live Server
// Then open the console.  You can directly call these function in the console to test.

/*  --------------------------------------------------------
    encodeVowelWord()

    Encode words that begin with a vowel sound from english to pig latin
    For words that begin with vowel sounds, one just adds "yay" to the end.

    For example:
        "eat" becomes "eat-yay"
        "omelet" becomes "omelet-yay" 
*/
function encodeVowelWord(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i += 1) {
    let vowel = vowels[i];
    if (word.startsWith(vowel)) {
      word += "-yay";
    }
  }
  return word;
}

// Write your unit tests here
let result = encodeVowelWord("eat");
console.assert(result === "eat-yay", {
  test: "encodeVowelWord on eat",
  expected: "eat-yay",
  result: result,
});
/*  --------------------------------------------------------
    encodeConsonantWord()

    Encode words that begin with a consonant sound from english to pig latin.
    For words that begin with consonant sounds, all letters before the initial vowel 
    are placed at the end of the word sequence, preceded by a hyphen "-". Then, "ay" is added. 
    
    For example:
        "latin" becomes "atin-lay"
        "cheers" becomes "eers-chay"
*/
let vowels = ["a", "e", "i", "o", "u"];
function encodeConsonantWord(word) {
  let starterLetter = [];
  for (let i = 0; i < vowels.length; i += 1) {
    let letter = word[i];
    if (vowels.includes(letter)) {
      let slicedWord = word.slice(i);
      return `${slicedWord}-${starterLetter.join("")}ay`;
    } else {
      starterLetter.push(letter);
    }
  }
}

// Write your unit tests here
let r = encodeConsonantWord("latin");
console.assert(r === "atin-lay", {
  test: "encodeVowelWord on latin",
  expected: "atin-lay",
  r: r,
});
/*  --------------------------------------------------------
    encodeWord()

    Decide whether a given word starts with a vowel sound or consonant sound,
    and call encodeVowelWord(word) or encodeConsonantWord(word) when relevant.

    For example:
        "eat" becomes "eatyay" because it starts with a vowel "e"
        "omelet" becomes "omeletyay" because it starts with a vowel "o"
        "latin" becomes "atin-lay" because it starts with a consonant "l""
        "cheers" becomes "eers-chay" because it starts with a consonant cluster "ch"
        "you" becomes "ou-yay" because it starts with a consonant "y"
*/
function encodeWord(word) {
  if (vowels.includes(word[0])) {
    return encodeVowelWord(word);
  } else {
    return encodeConsonantWord(word);
  }
}

// Write your unit tests here
let end = encodeConsonantWord("latin");
console.assert(end === "atin-lay", {
  test: "encodeVowelWord on latin",
  expected: "atin-lay",
  end: end,
});
/*  --------------------------------------------------------
    encodeText()    

    Encode a full sentence or paragraph from english to pig latin.
*/
function encodeText(text) {
  let result = [];
  let myText = text.split("");
  for (let i = 0; i < myText.length; i += 1) {
    let word = myText[i];
    result += encodeWord(word) + " ";
  }
  return result.trim();
}

// Write your unit tests here
console.assert(
  encodeText("The quick brown fox jumps over the lazy dog") ===
    "e-thay uick-qay own-bray oxf-ay umps-jay over-yay e-thay azy-lay og-day",
  {
    test: encodeText("The quick brown fox jumps over the lazy dog"),
    expected:
      "e-thay uick-qay own-bray oxf-ay umps-jay over-yay e-thay azy-lay og-day",
    result: encodeText("The quick brown fox jumps over the lazy dog"),
  }
);
