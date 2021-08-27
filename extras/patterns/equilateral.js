const equilateral = (row)=>{
    var i,j,k;
    for(i = 1; i<=row; i++){
        var s = "";
        for(j=1; j <= row - i; j++){
            s+=" ";
        }
        for(k=1; k <= i; k++){
            s+="* ";
        }
        console.log(s)
    }
}

equilateral(5);