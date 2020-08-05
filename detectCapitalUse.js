var detectCapitalUse = function(word) {
    var firstIsCapital = word.charCodeAt(0) < 97;
    var secondIsCapital = word.charCodeAt(1) < 97;
    if(word.length < 2){
        return true;
    } else if (firstIsCapital === false && secondIsCapital === true){
        return false;
    } else {
        for(var i=2; i<word.length; i++){
           if(secondIsCapital !== (word.charCodeAt(i) < 97))
               return false;
        }
    }
    return true;
};