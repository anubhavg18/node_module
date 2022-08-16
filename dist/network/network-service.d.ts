import { HttpService } from "@nestjs/axios";
import { ConfigService } from "lib/utils/config.service";
export declare class NetworkService {
    private readonly httpService;
    private readonly configservice;
    constructor(httpService: HttpService, configservice: ConfigService);
    get(url: string): Promise<any>;
    post<Type>(url: string, data: any, headers: any): Promise<Type>;
}
