function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    var onWeight = truck_weights[0];
    var result = [truck_weights[0]];

    var i = 1; 
    while(i < truck_weights.length){
        if(onWeight + truck_weights[i] <= weight){
            onWeight += truck_weights[i];
            result.push(truck_weights[i]);
            i++;
        } else {
            result.push(0);
        }
        
        if(result.length - bridge_length >= 0) onWeight -= result[result.length - bridge_length];
    }
    console.log(result)
    return result.length + bridge_length;
}
