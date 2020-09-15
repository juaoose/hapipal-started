'use strict';

const Joi = require('joi');

module.exports = {
    method: 'POST',
    path: '/riddle',
    options: {
        tags: ['api'],
        validate: {
            payload: Joi.object({
                slug: Joi.string().required(),
                question: Joi.string().required(),
                answer: Joi.string().required()
            })
        },
        handler: async (request, h) => {

            const { Riddles } = request.models();
            const riddle = request.payload;
            return await Riddles.query().insertAndFetch(riddle);
        }
    }
};
