
export const responseSuccess = (data, message, code=200) => {
    return {
        status: 'success',
        statusCode: code,
        message: message,
        data: data
    };
};

export const responseError = (message = "Internal Server Error", statusCode = 500, stack = null) => {
    return {
        status: 'Error',
        statusCode: statusCode,
        message: message,
        stack: stack
    };
};