// authMiddleware.js
const requireAuth = (req, res, next) => {
    // Check if the user is authenticated (session exists)
    if (!req.session.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // The user is authenticated, continue to the next middleware or route handler
    next();
};

export { requireAuth };
