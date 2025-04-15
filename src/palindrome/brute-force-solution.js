function normalizeString(str) {
    return str
        .toLowerCase()
        .replace(/[áàäâ]/g, 'a')
        .replace(/[éèëê]/g, 'e')
        .replace(/[íìïî]/g, 'i')
        .replace(/[óòöô]/g, 'o')
        .replace(/[úùüû]/g, 'u')
        .replace(/[^a-z0-9ñ]/g, ''); 
}

function isPalindrome(str) {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) {
            return false;
        }
    }
    return true;
}

function isPalindromeBruteForce(input){
    const normalizedInput = normalizeString(input);
    let longestPalindrome = '';

    for(let i=0; i< normalizedInput.length; i++){
        for(let j=i+1; j<=normalizedInput.length; j++){
 
            const substring = normalizedInput.slice(i, j);
            if(isPalindrome(substring) && substring.length > longestPalindrome.length){
                longestPalindrome = substring;
            }
        }
    }
    return longestPalindrome;
}

module.exports = {
    isPalindromeBruteForce,
};
