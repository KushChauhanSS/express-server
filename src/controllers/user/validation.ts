export default Object.freeze({
    // GET One User Request Schema
    getOne: {
        originalId: {
            exists: true,
            errorMessage: 'ID is required!',
            in: ['query']
        },
    },
    // POST Request Schema
    create: {
        name: {
            exists: true,
            errorMessage: 'Name is required!',
            in: ['body']
        },
        email: {
            exists: true,
            errorMessage: 'Email is required!',
            in: ['body']
        },
        role: {
            exists: true,
            errorMessage: 'Role is required!',
            in: ['body']
        },
        password: {
            exists: true,
            errorMessage: 'Password is required!',
            in: ['body']
        }
    },
    // PUT Request Schema
    update: {
        originalId: {
            exists: true,
            errorMessage: 'ID is required!',
            in: ['body'],
        }
    },
    // DELETE Request Schema
    delete: {
        originalId: {
            exists: true,
            errorMessage: 'ID is required!',
            in: ['params']
        }
    }
});
