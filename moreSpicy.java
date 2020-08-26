import java.util.*;
class Solution {
    public int solution(int[] scoville, int K) {
        int answer = 0;
        PriorityQueue<Integer> heap = new PriorityQueue<>();
        for(int num: scoville){
            heap.add(num);
        }
        while(heap.size() > 1){
            int first = heap.poll();
            if(first >= K) return answer;
            int second = heap.poll();
            int sco = first + second * 2;
            heap.add(sco);
            answer++;
        }
        
        return (heap.poll() >= K)? answer : -1;
    }
        
}
