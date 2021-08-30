const permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
}
const hasPermission = (moduleName, role, permission_type) => {

    //check wheather role has all permissions
    if (permissions[moduleName]["all"].includes(role)) {
        return true;
    } 
    else {
        //Check wheather role has permission among read, write or delete
        if (permissions[moduleName][permission_type].includes(role)) {
            return true;
        }
        return false;
    }
}


console.log("1- Trainee has read permission:", hasPermission('getUsers', 'trainee', 'read')); // first test case - true
console.log("2- Trainer has read permission:", hasPermission('getUsers', 'trainer', 'read')); // second test case - true
console.log("3- Trainee has write permission:", hasPermission('getUsers', 'trainee', 'write')); // third test case - false
console.log("4- Trainer has write permission:", hasPermission('getUsers', 'trainer', 'write')); // fourth test case - true
console.log("5- Trainee has delete permission:", hasPermission('getUsers', 'trainee', 'delete')); // fifth test case - false
console.log("6- Trainer has delete permission:", hasPermission('getUsers', 'trainer', 'delete')); // sixth test case - false
console.log("7- Head-Trainer has read permission:", hasPermission('getUsers', 'head-trainer', 'read')); // seventh test case - true
console.log("8- Head-Trainer has write permission:", hasPermission('getUsers', 'head-trainer', 'write')); // eight test case - true
console.log("9- Head-Trainer has delete permission:", hasPermission('getUsers', 'head-trainer', 'delete')); // ninth test case - true
console.log("10- Head-Trainer has all permission:", hasPermission('getUsers', 'head-trainer', 'all')); // tenth test case - true