export interface IImage
{
  id: number;
  image: string;
}

export interface IAircraftClass
{
  id: number;
  name: string;
  image: IImage;
}

export interface IAircraftModelAccessory
{
  id: number;
  name: string;
}

export interface IAircraftModelFeature
{
  id: number;
  name: string;
}

export interface IAircraftModel
{
  id: number;
  name: string;
  category: string;
  story: string;
  include_list: IAircraftModelAccessory[];
  does_not_include_list: IAircraftModelAccessory[];
  features_list: IAircraftModelFeature[];
  wingspan: number;
  weight: number;
  length: number;
  radio_req: string;
  engines: string;
  manual: string;
  image: IImage;
  versions: object;
}

export interface IAircraftVersion
{
  id: number;
  name: string;
  color: string;
  images: IImage[];
}

export interface IDistributor
{
  name: string;
  country: string;
  address: string;
  phone: string;
  website: string;
}

export interface IReview
{
  magazine_name: string;
  image: IImage;
  file: string;
}
