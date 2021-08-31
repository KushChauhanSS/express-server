import { permissions } from '../constants';
const hasPermission = (moduleName: string, role: string, permissionType: string): boolean => {

    // check wheather role has all permissions
    if (permissions[moduleName].all.includes(role)) {
        return true;
    }
    else {
        // check wheather role has permission among read, write or delete
        if (permissions[moduleName][permissionType].includes(role)) {
            return true;
        }
        return false;
    }
};

export default hasPermission;