export default Object.freeze({
    // GET One User Request Schema
    getOne: {
        originalId: {
            in: ['query'],
            exists: true,
            errorMessage: 'OriginalId is required!'
        },
    },
    // POST Request Schema
    create: {
        name: {
            in: ['body'],
            exists: true,
            errorMessage: 'Name is required!'
        },
        email: {
            in: ['body'],
            exists: true,
            errorMessage: 'Email is required!'
        },
        role: {
            in: ['body'],
            exists: true,
            errorMessage: 'Role is required!'
        },
        password: {
            in: ['body'],
            exists: true,
            errorMessage: 'Password is required!'
        }
    },
    // PUT Request Schema
    update: {
        originalId: {
            in: ['body'],
            exists: true,
            errorMessage: 'OriginalId is required!'
        }
    },
    // DELETE Request Schema
    delete: {
        originalId: {
            in: ['params'],
            exists: true,
            errorMessage: 'OriginalId is required!'
        }
    },
});
