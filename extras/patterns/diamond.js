const diamond = (row)=>{
    var i, j, k, l;
    for (i = 0; i < row; i++) {
        var s = "";
        for(j = row; j > i; j--){
           s += " "; 
        }
        for(k = 0; k <= i; k++){
            s += "*";
        }
        for(l = 1; l <= i; l++){
            s += "*";
        }
        console.log(s);
    }

    for (i = row; i >= 0; i--) {
        var s = "";
        for(j = row; j > i; j--){
           s += " "; 
        }
        for(k = 0; k <= i; k++){
            s += "*";
        }
        for(l = 1; l <= i; l++){
            s += "*";
        }
        console.log(s);
    }
    
}

diamond(5);