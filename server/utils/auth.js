const jwt = require('jsonwebtoken');


const expiration = '2h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, process.env.SECRET_JWT, { maxAge: expiration });
            req.user = data;
        } catch (error) {
            console.log(error)
        }

        return req;
    },
    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };
        return jwt.sign({ data: payload }, process.env.SECRET_JWT, { expiresIn: expiration });
    },
};
