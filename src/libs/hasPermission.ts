import { permissions } from './constants';

const hasPermission = (moduleName: string, role: string, permissionType: string): boolean => {

    if (!permissions[moduleName] || !permissions[moduleName][permissionType]) {
        console.log(`\n${role} do not have permission to ${permissionType} permission for the module ${moduleName}`);
        return false;
    }
    else {
        if (permissions[moduleName][permissionType].includes(role)) {
            console.log(`\n${role} have permission to ${permissionType} permission for the module ${moduleName}`);
            return true;
        }
        console.log(`\n${role} do not have permission to ${permissionType} permission for the module ${moduleName}`);
        return false;
    }
};

export default hasPermission;
