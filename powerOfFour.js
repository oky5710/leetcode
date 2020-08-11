/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    var x = Math.log(num) / Math.log(4);
    return x%1 === 0;
};
