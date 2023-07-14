const compare = (name,count) => {
  const nameCount = name.lenght;
    if (name.lenght >= count) {
        return true;
    }
    return false;
}

console.log (compare ("shah", 4) );


// function isPalindrome (name) {
//     name = name.replaceAll('', '').toLowerCase();
//     let reversedString ='';
//     for( let i = name.length - 1; i >= 0; i--) {
//         reversedString += name[i]
//     }
// }

