
const permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
}

const hasPermission = (moduleName, role, permissionType) => {
    let flag = false;
    const module = permissions[moduleName];
    const roles = module[permissionType];

    if (roles.length === 0) {
        if (role === 'head-trainer' && permissionType === "delete") {
            flag = true;
            return flag;
        }
    }
    else {
        roles.forEach(element => {
            if (element === role) {
                flag = true;
                return flag;
            }
            else {
                if (role === 'head-trainer') {
                    flag = true;
                    return flag;
                }
            }
        });
    }
    // console.log(role, 'has', permissionType, 'permissions:', flag);
    return flag;

    // && (permissionType === "read" || permissionType === "write" || permissionType === "delete")
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
