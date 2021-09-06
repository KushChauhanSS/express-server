/**
 * Middleware
 */
export default (req, res, next) => {
    next({ status: 404, error: 'Not Found' });
};