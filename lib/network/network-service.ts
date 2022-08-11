import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { lastValueFrom, map } from "rxjs";

@Injectable()
export class NetworkService {
  constructor(private readonly httpService: HttpService) { }
  // It will call the all request from 3rd party apis

  async get(url: string) {
    const observable = await this.httpService.get('url').pipe(map((res) => res.data));
    // you can use the data object now !!
    return await lastValueFrom(observable);
  }

  async post<Type>(url: string, data: any, headers: any): Promise<Type> {
    let headersObject = {
      'Authorization': headers.authorization,
      'Content-Type': 'application/json'
    }
    const observable = await this.httpService.post(url, JSON.stringify(data), { headers: headersObject }).pipe(map((res) => res.data));
    // you can use the data object now !!
    return await lastValueFrom(observable);
  }
}