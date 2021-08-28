permissions = {
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    }
}

const hasPermission = (moduleName, role, permissionType) => {
    let flag = false;
    const permdic = permissions[moduleName];
    // console.log(permdic);
    const rolesArr = permdic[permissionType];
    // console.log(rolesArr);
    rolesArr.forEach(element => {
        if(element == role){
            flag = true
            return flag;
        }
    });
    return flag;
}

console.log(hasPermission('getUsers', 'trainee', 'read')); // first test case
console.log(hasPermission('getUsers', 'trainee', 'write')); // second test case
console.log(hasPermission('getUsers', 'trainer', 'write')); // third test case