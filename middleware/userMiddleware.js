export const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'User is not an admin' });
    }
};

export const isOwner = async (req, res, next) => {
    const resourceId = req.params.id; // Or wherever the ID of the resource is located in your request

    if (req.user && req.user.resources && req.user.resources.includes(resourceId)) {
        next();
    } else {
        res.status(403).json({ message: 'User does not have permission' });
    }
};
