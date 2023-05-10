function isPangram (texts: string) {
    let strArr = texts.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("Public junk dwarves hug my beloved pillow"));
console.log(isPangram("Jim quickly realized that the beautiful gowns are expensive"));
