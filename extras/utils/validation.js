users = [
    {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    },
    {
    traineeEmail: 'trainee2@gmail.com',
    reviewerEmail: 'reviewer2@successive.tech',
    },
]

const validateEmail =( email) => {

    const pattern = /^[(a-z|A-Z)0-9.!#$%&'*+/?^_`~-]+@successive.tech$/;
    const result = pattern.test(email);
    // console.log(result);
    return result;  

}

const validateUsers = (users) => {
    
    users.forEach(element => {
        
        const {traineeEmail} = element;
        const {reviewerEmail} = element;

        if(validateEmail(traineeEmail)){
            validUsers.push(traineeEmail);
        }
        else{
            invalidUsers.push(traineeEmail);
        }

        if(validateEmail(reviewerEmail)){
            validUsers.push(reviewerEmail);
        }
        else{
            invalidUsers.push(reviewerEmail);
        }
    });

}


const validUsers = [];
const invalidUsers = [];

validateUsers(users);

console.log("Valid Users :")
validUsers.forEach(element => {
    console.log(element);
});

console.log("No. of valid users: ", validUsers.length);

console.log();
console.log("-----------------------------\n");

console.log("Invalid Users :")
invalidUsers.forEach(element => {
    console.log(element);
});

console.log("No. of invalid users:", invalidUsers.length);