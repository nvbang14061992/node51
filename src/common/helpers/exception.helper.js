import { statusCodes } from "./status-code.helper";

export class BadRequestException extends Error{
    constructor(message = "BadRequestException") {
        super(message);
        this.code = statusCodes.BAD_REQUEST;
    }
}

export class ForbiddenException extends Error{
    constructor(message = "ForbiddenException") {
        super(message);
        this.code = statusCodes.FORBIDDEN;
    }
}

export class UnauthrozedException extends Error{
    constructor(message = "UnauthrozedException") {
        super(message);
        this.code = statusCodes.UNAUTHORIZED;
    }
}