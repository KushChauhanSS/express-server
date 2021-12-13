const equilateral = (row: number): string => {
    console.log('Print a triangle with rows', row);

    let s: string = '';

    for (let i = 1; i <= row; i++) {

        for (let j = 1; j <= row - i; j++) {
            s += ' ';
        }

        for (let k = 1; k <= i; k++) {
            s += '* ';
        }
        s += '\n';
    }

    console.log(s);
    return 'Triangle Printed!';
};

export default equilateral; // exporting equilateral function
