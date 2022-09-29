const methodNotAllowed = (request, response, next) => {
    next({
        status:405,
        message: `${request.method} is not allowed for ${request.originalUrl}.`,
    });
}

module.exports = methodNotAllowed;