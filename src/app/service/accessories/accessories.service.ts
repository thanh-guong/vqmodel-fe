import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IAircraftAccessory} from '../models.interface';
import {environment} from '../../../environments/environment';
import {SuperService} from '../super.service';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesService extends SuperService
{
  public getAllAccessories(): Observable<IAircraftAccessory[]>
  {
    return this.http.get<IAircraftAccessory[]>(this.generateRemoteAddressForApi(environment.aircraftAccessoriesRemote));
  }
}
