export const validateEmail = (email: string): boolean => {

    const pattern = /^[(a-z|A-Z)0-9.!#$%&'*+/?^_`~-]+@successive.tech$/;
    const result = pattern.test(email);
    return result;

};
