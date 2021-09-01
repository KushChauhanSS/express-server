import { diamond, equilateral } from './patterns';
import { hasPermission } from './utils';
import { validateUsers } from './utils/validation';

export const users: IUser[] = [
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
    },
    {
        traineeEmail: 'trainee2@gmail.com',
        reviewerEmail: 'reviewer2@successive.tech',
    },
];

diamond(3);      // diamond with row 3
equilateral(5);  // triangle with row 5
diamond(5);      // diamond with row 5
equilateral(10); // traingle with row 10

console.log('1- Trainee has read permission:', hasPermission('getUsers', 'trainee', 'read'));   // true
console.log('2- Trainer has write permission:', hasPermission('getUsers', 'trainer', 'write')); // true
console.log('3- Trainee has delete permission:', hasPermission('getUsers', 'trainee', 'delete')); // false
console.log('4- Head-Trainer has all permission:', hasPermission('getUsers', 'head-trainer', 'all')); // true

console.log('\n');
console.log('\n');
validateUsers(users);
