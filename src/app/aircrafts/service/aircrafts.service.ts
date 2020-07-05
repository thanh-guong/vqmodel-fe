import { Injectable } from '@angular/core';

export interface AircraftClass
{
  name: string;
  image: string;
}

const SOLITARY_TEST_AIRCRAFT_CLASS: AircraftClass[] = [
  { name: '20 size EP', image: 'http://www.vqmodel.com/NewVQModel_20sizeEP/images/DO27/Do-27_20size_EP_x_index.jpg', },
  { name: '25/35 size EP/GP', image: 'http://www.vqmodel.com/NewVQModel_25-32size-EP-GP/images/Index/VQA157US_index.jpg', },
  { name: '20cc - 30cc size EP/GP', image: 'http://www.vqmodel.com/NewVQModel_20-30cc/images/Index/Super_Cub_x_index.jpg', },
  { name: '46 size EP/GP', image: 'http://www.vqmodel.com/NewVQModel_46size/images/Index/Kawasaki.jpg', },
  { name: '60-90 size EP/GP', image: 'http://www.vqmodel.com/NewVQModel_60-90size/images/Index/Ki-61_x_index.jpg', },
  { name: 'EDF 70mm size', image: 'http://www.vqmodel.com/NewVQModel_EDF_70mm_size/images/Sonex_EDF_70mm/Sonex_EDF_70mm_Red_x_page.jpg', },
  { name: 'Glider', image: 'http://www.vqmodel.com/NewVQModel_Glider/images/Index/Swallow_x_index.jpg', },
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
    return SOLITARY_TEST_AIRCRAFT_CLASS;
  }

}
