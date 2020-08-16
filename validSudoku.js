var isValidSudoku = function(board) {
    var cnt = 0;
    board.some(function(arr, i){
        return arr.some(function(el, j){
            cnt++;
            return el !== '.' && arr.indexOf(el) !== arr.lastIndexOf(el); 
        });
    });
    if(cnt < 81) return false;
    
    for(var i=0; i<board.length; i++){
        var j;
        var colArr = [];
        for(j=0; j<board[i].length; j++){
            var el = board[j][i];
            if(el !== '.' && colArr.indexOf(el) > -1) {
                return false;
            } else if(el !== '.') {
                colArr.push(el);
            }
            
        }
        
        if(j < board[i].length) return false;
    }
    var isEnd = false;
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            var squareArr = [];
            for(var x=0; x<3; x++){
                for(var y=0; y<3; y++){
                    var el = board[i * 3 + x][j * 3 + y];
                    if(el !== '.' && squareArr.indexOf(el) > -1) {
                        isEnd = true;
                        return false;
                    } else if(el !== '.') {
                        squareArr.push(el);
                    }
                }
                if(isEnd) return false;
            }
            if(isEnd) return false;
        }
        if(isEnd) return false;
    }
    return true;
};
