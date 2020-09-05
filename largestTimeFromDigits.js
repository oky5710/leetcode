//https://leetcode.com/problems/largest-time-for-given-digits

function getMaxIdx(arr, start, end){
    for(var i=end; i>=start; i--){
        var idxi = arr.indexOf(i);
        if(idxi > -1) {
            return idxi;
        }
    }
    return -1; 
}
var largestTimeFromDigits = function(arr, isSec) {
    arr.sort(function(a,b){ return b-a; });
    var answer = new Array(4);
    var end = (isSec)? 1: 2;
    var idx0 = getMaxIdx(arr, 0, end);
    if(idx0 < 0) return '';
    answer[0] = arr[idx0];
    arr.splice(idx0,1);

    if(answer[0] == 2){
        var idx1 = getMaxIdx(arr, 0, 3);
        if(idx1 < 0) return ''; 
        else {
            answer[1] = arr[idx1];
            arr.splice(idx1,1); 
        }
    } else {
        answer[1] = arr[0];      
        arr.shift();
    }

    var idx2 = getMaxIdx(arr, 0, 5);
    console.log(idx2)
    if(idx2 < 0) {
        if (isSec) {
            return ''; 
        } else {
            return largestTimeFromDigits(arr.concat(answer), true);
        }
        
    } else{
        answer[2] = arr[idx2];
        arr.splice(idx2,1);
        answer[3] = arr[0];
    }
    
    return '' + answer[0] + answer[1] + ':' + answer[2] + answer[3];
};
