"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const hello = async (event) => {
    const name = event.queryStringParameters?.name || 'World';
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `Hello, ${name}!`,
        }),
    };
};
exports.hello = hello;
