export default Object.freeze({
    // GET Request Schema
    get: {
        id: {
            string: true,
            exists: true,
            errorMessage: 'ID is required!',
            in: ['query']
        },
        role: {
            string: true,
            exists: true,
            errorMessage: 'Role is required!',
            in: ['query']
        }
    },
    // POST Request Schema
    create: {
        name: {
            string: true,
            exists: true,
            errorMessage: 'Name is required!',
            in: ['body']
        }
    },
    // PUT Request Schema
    update: {
        id: {
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
