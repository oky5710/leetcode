# 합병정렬

var findMedianSortedArrays = function(nums1, nums2) {
    var joinArr = [];
    var len = nums1.length + nums2.length;
    var mIdx = Math.floor(len/2);
    while(joinArr.length <= mIdx+1){
        var x;
        if(nums1.length>0 && nums2.length>0) {
            if(nums1[0] > nums2[0]) {
                x = nums2.shift();
            } else {
                x = nums1.shift();
            }
            joinArr.push(x);
        } else {
            if(nums1.length > 0){
               joinArr = joinArr.concat(nums1);
            } else {
               joinArr = joinArr.concat(nums2);
            }
            break;
        }
        
    }
    return (len%2 !==0)? joinArr[mIdx] : (joinArr[mIdx-1]+joinArr[mIdx])/2;
};


# 내장 함수

var findMedianSortedArrays = function(nums1, nums2) {
    var union = nums1.concat(nums2);
    union.sort(function(a,b){return a-b});
    var len = nums1.length + nums2.length;
    var mIdx = Math.floor(len/2);
    return (len%2 !== 0)? union[mIdx] : (union[mIdx-1]+union[mIdx])/2;
};
