class AppError extends Error {
    constructor(statusCode = 400, message) {
        super();
        this.message = { message };
        this.statusCode = statusCode;
    }
}

function errorHandler(error, request, response, next) {
    const { statusCode, message } = error;
    if (error instanceof AppError) {
        return response.status(statusCode).json(message);
    }

    return response.status(404).json({ message: "Internal server error." });
}

export { AppError, errorHandler };
