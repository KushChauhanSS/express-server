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

const process = require('process');
var rows = process.argv[2] // this will give the 2nd index value from the array returned 
equilateral(rows)