import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {SuperService} from '../super.service';
import {Observable} from 'rxjs';

export interface AircraftClass
{
  id: number;
  name: string;
  image: string;
}

const SOLITARY_TEST_AIRCRAFT_CLASS: AircraftClass[] = [
  { id: 1, name: 'Longest rather than largest',  image: 'https://via.placeholder.com/150x300', },
  { id: 2, name: 'Largest rather than longest',  image: 'https://via.placeholder.com/300x150', },
  { id: 3, name: 'Squared',                      image: 'https://via.placeholder.com/150x150', },
  { id: 4, name: 'Huge but squared',             image: 'https://via.placeholder.com/2000x2000', },
  { id: 5, name: 'Huge but squared',             image: 'https://via.placeholder.com/2000x2000', },
  { id: 6, name: 'Huge but squared',             image: 'https://via.placeholder.com/2000x2000', },
  { id: 7, name: 'Small but squared',            image: 'https://via.placeholder.com/50x50', },
  { id: 8, name: 'Small but squared',            image: 'https://via.placeholder.com/50x50', },
  { id: 9, name: 'Small but squared',            image: 'https://via.placeholder.com/50x50', },
];

export interface AircraftModel
{
  id: number;
  name: string;
  image: string;
  wingspan: number;
  weight: number;
  length: number;
  radio_req: string;
  versions: object;
}

const SOLITARY_TEST_AIRCRAFT_MODELS: AircraftModel[] = [
  // {id: 1, name: '', image: '', },
];

export interface AircraftVersion
{
  id: number;
  name: string;
  color: string;
  images: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AircraftService extends SuperService
{
  /***
   * Aicraft classes
   */
  public getAircraftClasses(): AircraftClass[]
  {
    if (!environment.production && environment.solitary_mode)
    {
      return SOLITARY_TEST_AIRCRAFT_CLASS;
    }

    return null;
  }

  public getAllAircraftClasses(): Observable<AircraftClass[]>
  {
    return this.http.get<AircraftClass[]>(this.generateRemoteAddressForApi(environment.aircraftClassRemoteRoute));
  }

  /***
   * Aircraft models
   */
  public getAircraftModelsByClass(aircraftClassId: number): Observable<AircraftModel[]>
  {
    return this.http.get<AircraftModel[]>(this.generateRemoteAddressForApi(environment.aircraftModelRemoteRoute)
      + '/' + aircraftClassId + '/' + environment.getAircraftModelsByClass);
  }

  public getAircraftModelById(aircraftModelId: number): Observable<AircraftModel>
  {
    return this.http.get<AircraftModel>(this.generateRemoteAddressForApi(environment.aircraftModelRemoteRoute)
      + '/' + aircraftModelId);
  }

  /***
   * Aircraft versions
   */
  public getAircraftVersionsByModel(aircraftModelId: number): Observable<AircraftVersion[]>
  {
    return this.http.get<AircraftVersion[]>(this.generateRemoteAddressForApi(environment.aircraftVersionRemoteRoute)
      + '/' + aircraftModelId + '/' + environment.getAircraftVersionsByModel);
  }

}
