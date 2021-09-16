export default Object.freeze({
    // GET Request Schema
    get: {

    },
    // POST Request Schema
    create: {
        name: {
            exists: true,
            errorMessage: 'Name is required!',
            in: ['body']
        }
    },
    // PUT Request Schema
    update: {
        id: {
            exists: true,
            errorMessage: 'ID is required!',
            in: ['body'],
        },
        name: {
            exists: true,
            errorMessage: 'Name is required!',
            in: ['body']
        }
    },
    // DELETE Request Schema
    delete: {
        id: {
            exists: true,
            errorMessage: 'ID is required!',
            in: ['params']
        }
    }
});
