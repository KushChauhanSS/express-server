import { permissions } from "../constants";
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

export default hasPermission;