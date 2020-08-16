function solution(numbers, target) {
    var answer = 0;
    // 각 정수가 가질 수 있는 경우의 수 2가지(양수,음수) 전체 경우의 수 2의 numbers.length승
    // 전체에서 나올 수 있는 경우의 수의 합을 넣을 배열을 만들어 0으로 초기화 한다. 
    var sum = new Array(Math.pow(2, numbers.length));
    sum.fill(0);
    
    var cnt = sum.length/2; // 양수와 음수를 변경하는 크기
    var j = 0; // numbers 배열의 인덱스
    
    while(j<numbers.length){ // numbers가 끝날 때까지
        for(var i=0; i<sum.length; i++){ 
            if(Math.floor(i/cnt)%2 == 0){// i를 cnt로 나눌 때 몫이 홀수이면 음수 짝수이면 양수를 더한다. 
                sum[i] += numbers[j];
            } else {
                sum[i] -= numbers[j];
            }
        }  
        cnt = cnt/2;
        j++;
    }
    
    sum.forEach(function(num, idx){ // 타겟 넘버에 일치하는 숫자가 몇개인지 세어본다.
        if(num === target) answer++;
    });
    return answer;
}
