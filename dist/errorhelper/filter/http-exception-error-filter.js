"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionErrorFilter = void 0;
const common_1 = require("@nestjs/common");
const base_exception_filter_1 = require("./base-exception-filter");
let HttpExceptionErrorFilter = class HttpExceptionErrorFilter extends base_exception_filter_1.BaseExceptionFilter {
    catch(exception, host) {
        const context = host.switchToHttp();
        const response = context.getResponse();
        const request = context.getRequest();
        const status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        response.status(status).json({
            "status": status,
            "error": {
                "error": {
                    "code": "30001",
                    "message": exception.message,
                    "target": request.url
                }
            }
        });
    }
};
HttpExceptionErrorFilter = __decorate([
    (0, common_1.Catch)()
], HttpExceptionErrorFilter);
exports.HttpExceptionErrorFilter = HttpExceptionErrorFilter;
//# sourceMappingURL=http-exception-error-filter.js.map