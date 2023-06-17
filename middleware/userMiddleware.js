
export const isAdmin = (user) => {
    if (user && user.roles && user.roles.includes('admin')) {
        return true;
    } else {
        return false;
    }
};

export const isOwner = (user, resourceId) => {
    if (user && user.resources && user.resources.includes(resourceId)) {
        return true;
    } else {
        return false;
    }
};