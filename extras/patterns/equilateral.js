const equilateral = (row) => {
    console.log("Print a triangle with rows", row);

    let s = "";
    
    for(let i = 1; i<=row; i++){
        
        for(let j=1; j <= row - i; j++){
            s+=" ";
        }
        
        for(let k=1; k <= i; k++){
            s+="* ";
        }
        s+="\n";
    }

    console.log(s);
}

// const process = require('process');
// var rows = process.argv[2] // this will give the 2nd index value from the array returned from command line arguments
// equilateral(rows);

export default equilateral; // exporting equilateral function