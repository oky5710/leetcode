**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var pattern = /[^a-zA-Z0-9]/gi;
     
    if(pattern.test(s)){
        s = s.replace(pattern,'');
    }
    s = s.toLowerCase();
    var half = Math.floor( s.length/2);
    var s1 = s.substring(0, half);
    if(s.length%2 !== 0) half += 1; 
    var s2 = s.substring(half, s.length).split('').reverse().join('');
    return s1 === s2;
};
