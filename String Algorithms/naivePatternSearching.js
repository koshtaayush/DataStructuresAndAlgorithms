function naiveSearch(text, pattern){
    var m = text.length;
    var n = pattern.length;

    for(var i=0; i<m-n;i++){
        for(var j=0;j<n;j++){
            if(text.charAt(i+j) != pattern.charAt(j)){
                break;
            }
        }
        if(j == n){
            console.log("Pattern present at "+i);
        }
    }
}

naiveSearch("AABAACAADAABAAABAA", "AABA");
