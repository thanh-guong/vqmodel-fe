import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface AircraftClass
{
  name: string;
  image: string;
}

const SOLITARY_TEST_AIRCRAFT_CLASS: AircraftClass[] = [
  { name: 'Longest rather than largest',  image: 'https://via.placeholder.com/150x300', },
  { name: 'Largest rather than longest',  image: 'https://via.placeholder.com/300x150', },
  { name: 'Squared',                      image: 'https://via.placeholder.com/150x150', },
  { name: 'Huge but squared',             image: 'https://via.placeholder.com/2000x2000', },
  { name: 'Huge but squared',             image: 'https://via.placeholder.com/2000x2000', },
  { name: 'Huge but squared',             image: 'https://via.placeholder.com/2000x2000', },
  { name: 'Small but squared',            image: 'https://via.placeholder.com/50x50', },
  { name: 'Small but squared',            image: 'https://via.placeholder.com/50x50', },
  { name: 'Small but squared',            image: 'https://via.placeholder.com/50x50', },
];

@Injectable({
  providedIn: 'root'
})
export class AircraftsService
{
  constructor()
  {

  }

  public getAircraftClasses(): AircraftClass[]
  {
    if (!environment.production && environment.solitary_mode)
    {
      return SOLITARY_TEST_AIRCRAFT_CLASS;
    }

    return this.getRemoteAircraftClasses();
  }

  public getRemoteAircraftClasses(): AircraftClass[]
  {
    return SOLITARY_TEST_AIRCRAFT_CLASS;
  }

}
