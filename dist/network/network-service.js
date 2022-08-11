"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let NetworkService = class NetworkService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async get(url) {
        const observable = await this.httpService.get('url').pipe((0, rxjs_1.map)((res) => res.data));
        return await (0, rxjs_1.lastValueFrom)(observable);
    }
    async post(url, data, headers) {
        let headersObject = {
            'Authorization': headers.authorization,
            'Content-Type': 'application/json'
        };
        const observable = await this.httpService.post(url, JSON.stringify(data), { headers: headersObject }).pipe((0, rxjs_1.map)((res) => res.data));
        return await (0, rxjs_1.lastValueFrom)(observable);
    }
};
NetworkService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], NetworkService);
exports.NetworkService = NetworkService;
//# sourceMappingURL=network-service.js.map