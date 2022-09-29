function bodyDataHas(propertyName) {
    return function (request, response, next) {
        const { data = {}} = request.body;
        if(data[propertyName]){
            return next();
        }
        next({
            status:400,
            message:`Request must contain a ${propertyName}.`,
        });
    }
}

module.exports = bodyDataHas;