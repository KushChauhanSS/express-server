/**
 * Middleware to handle not found routes
 */
export default (req, res, next) => {
    next({ status: 404, error: 'Not Found' });
};
