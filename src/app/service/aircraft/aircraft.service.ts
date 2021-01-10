import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {SuperService} from '../super.service';
import {Observable} from 'rxjs';
import {IAircraftClass, IAircraftModel, IAircraftVersion} from '../models.interface';

const SOLITARY_TEST_AIRCRAFT_CLASS: IAircraftClass[] = [
  { id: 1, name: 'Longest rather than largest',  image: { id: 1, image: 'https://via.placeholder.com/150x300' }, },
  { id: 2, name: 'Largest rather than longest',  image: { id: 2, image: 'https://via.placeholder.com/300x150' }, },
  { id: 3, name: 'Squared',                      image: { id: 3, image: 'https://via.placeholder.com/150x150' }, },
  { id: 4, name: 'Huge but squared',             image: { id: 4, image: 'https://via.placeholder.com/2000x2000' }, },
  { id: 5, name: 'Huge but squared',             image: { id: 5, image: 'https://via.placeholder.com/2000x2000' }, },
  { id: 6, name: 'Huge but squared',             image: { id: 6, image: 'https://via.placeholder.com/2000x2000' }, },
  { id: 7, name: 'Small but squared',            image: { id: 7, image: 'https://via.placeholder.com/50x50' }, },
  { id: 8, name: 'Small but squared',            image: { id: 8, image: 'https://via.placeholder.com/50x50' }, },
  { id: 9, name: 'Small but squared',            image: { id: 9, image: 'https://via.placeholder.com/50x50' }, },
];

const SOLITARY_TEST_AIRCRAFT_MODELS: IAircraftModel[] = [
  // {id: 1, name: '', image: '', },
];

@Injectable({
  providedIn: 'root'
})
export class AircraftService extends SuperService
{
  /***
   * Aicraft classes
   */
  public getAircraftClasses(): IAircraftClass[]
  {
    if (!environment.production && environment.solitary_mode)
    {
      return SOLITARY_TEST_AIRCRAFT_CLASS;
    }

    return null;
  }

  public getAllAircraftClasses(): Observable<IAircraftClass[]>
  {
    return this.http.get<IAircraftClass[]>(this.generateRemoteAddressForApi(environment.aircraftClassRemoteRoute));
  }

  public getAircraftClassById(id: number): Observable<IAircraftClass>
  {
    return this.http.get<IAircraftClass>(this.generateRemoteAddressForApi(environment.aircraftClassRemoteRoute
      + '/' + id));
  }

  /***
   * Aircraft models
   */
  public getAircraftModelsByClass(aircraftClassId: number): Observable<IAircraftModel[]>
  {
    return this.http.get<IAircraftModel[]>(this.generateRemoteAddressForApi(environment.aircraftModelRemoteRoute)
      + '/' + aircraftClassId + '/' + environment.getAircraftModelsByClass);
  }

  public getAircraftModelById(aircraftModelId: number): Observable<IAircraftModel>
  {
    return this.http.get<IAircraftModel>(this.generateRemoteAddressForApi(environment.aircraftModelRemoteRoute)
      + '/' + aircraftModelId);
  }

  /***
   * Aircraft versions
   */
  public getAircraftVersionsByModel(aircraftModelId: number): Observable<IAircraftVersion[]>
  {
    return this.http.get<IAircraftVersion[]>(this.generateRemoteAddressForApi(environment.aircraftVersionRemoteRoute)
      + '/' + aircraftModelId + '/' + environment.getAircraftVersionsByModel);
  }

}
