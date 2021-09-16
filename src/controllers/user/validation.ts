export default Object.freeze({
    // GET Request Schema
    get: {
        originalId: {
            string: true,
            exists: true,
            errorMessage: 'ID is required!',
            in: ['query']
        },
    },
    // POST Request Schema
    create: {
        name: {
            string: true,
            exists: true,
            errorMessage: 'Name is required!',
            in: ['body']
        },
        email: {
            string: true,
            exists: true,
            errorMessage: 'Email is required!',
            in: ['body']
        },
        role: {
            string: true,
            exists: true,
            errorMessage: 'Role is required!',
            in: ['body']
        },
        password: {
            string: true,
            exists: true,
            errorMessage: 'Password is required!',
            in: ['body']
        }
    },
    // PUT Request Schema
    update: {
        originalId: {
            string: true,
            exists: true,
            errorMessage: 'ID is required!',
            in: ['body'],
        },
        name: {
            string: true,
            exists: true,
            errorMessage: 'Name is required!',
            in: ['body']
        }
    },
    // DELETE Request Schema
    delete: {
        id: {
            string: true,
            exists: true,
            errorMessage: 'ID is required!',
            in: ['params']
        }
    }
});
