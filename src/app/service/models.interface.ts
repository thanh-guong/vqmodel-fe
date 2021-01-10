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

export interface IAircraftModel
{
  id: number;
  name: string;
  image: IImage;
  wingspan: number;
  weight: number;
  length: number;
  radio_req: string;
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
