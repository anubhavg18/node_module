import { HttpService } from "@nestjs/axios";
export declare class NetworkService {
    private readonly httpService;
    constructor(httpService: HttpService);
    get(url: string): Promise<any>;
    post<Type>(url: string, data: any, headers: any): Promise<Type>;
}
