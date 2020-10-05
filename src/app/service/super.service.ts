import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuperService {

  constructor(protected http: HttpClient) { }

  protected generateRemoteAddressForApi(api: string): string
  {
    return 'http://' + environment.remoteHost + ':' + environment.remotePort + '/' + environment.remoteApiPrefix + '/' + api;
  }

  public generateUrlForImage(image: string): string
  {
    return 'http://' + environment.remoteHost + ':' + environment.remotePort + image;
  }
}
