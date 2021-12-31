module.exports = {
    errors: require('./error'),

    responseJsonHandler: (error, data, expressResponse) => {
        let obj = { error: error, data: data };
        if (obj.error) {
            expressResponse.json(obj.error);
        } else {
            expressResponse.json(obj.data);
        }
    }

};