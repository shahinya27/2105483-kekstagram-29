const nameFunctoin = (age,count) => {
    if (age >= count) {
        return true;
    }
    return false;
}

console.log (nameFunctoin ("shah", 4) );


function isPalindrome (age) {
    age = age.replaceAll('', '').toLowerCase();
    let reversedString ='';
    for( let i = age.length - 1; i >= 0; i--) {
        reversedString += age[i]
    }
}
