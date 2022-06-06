"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Result = {
    success: (res, data, status = 200) => {
        return res.status(status).json(data);
    },
    error: (res, error, status = 400) => {
        return res.status(status).json({
            status: 'failed',
            error,
        });
    },
};
exports.default = Result;
