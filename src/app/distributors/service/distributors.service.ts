import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';

export interface Distributor
{
  name: string;
  country: string;
  address: string;
  phone: string;
  web: string;
}

const SOLITARY_TEST_DISTRIBUTOR: Distributor[] = [
  {
    name: 'HQQ',
    country: 'Australia',
    address: '32/398 The Boulevarde Kirrawee NSW 2232 , AUSTRALIA',
    phone: '+61(02) 9545 1944',
    web: 'http://www.hhq.com.au/'
  },
  {
    name: 'Minimotores',
    country: 'Colombia',
    address: 'Carrera 45 # 45-13 ,Itagüí, Antioquia , Colombia , South America',
    phone: '+57 3104488854',
    web: 'http://www.minimotores.com.co/'
  },
  {
    name: 'RC - Netbutik',
    country: 'Denmark',
    address: 'Ambolten 8  , DK-2970 Horsholm , DENMARK',
    phone: '+45-42488010',
    web: 'http://www.rc-netbutik.dk'
  },
  {
    name: 'Topmodel',
    country: 'France',
    address: 'Le Jardin d\' entreprises de Sologne ,41300 SELLES SAINT-DENIS - FRANCE',
    phone: '+33 0254940101 ',
    web: 'http://www.topmodel.fr'
  },
  {
    name: 'Pichler',
    country: 'Germany',
    address: 'Lauterbachstrasse 19 ,84307 EGGENFELDEN , GERMANY',
    phone: '+49 08721-96900',
    web: 'http://www.pichler-modellbau.de'
  },
  {
    name: 'NEMHobby',
    country: 'Greece',
    address: '8 MALAKASI STREET ,PO11143 , ATHENS , GREECE',
    phone: '+30 210211 7335',
    web: 'http://www.nemhobby.com'
  },
  {
    name: 'Unknown',
    country: 'Indonesia',
    address: 'Mediteranian Garden Residences Twr A/GAG ,Jl. Tanjuang Duren Raya Kav 1 ,Jakarta 11470 , INDONESIA',
    phone: '',
    web: ''
  },
  {
    name: 'Piccole Ali',
    country: 'Italy',
    address: 'Via Barbariga, 7 ,30039 Stra (Venezia) , ITALIA',
    phone: '+39 0499800757',
    web: 'http://www.piccoleali.it'
  },
  {
    name: 'Fukuyama R/C Center',
    country: 'Japan',
    address: '3-17-12 Higashifukatsu-cho, Fukuyamashi. Hiroshima-pref., 721-0974 JAPAN',
    phone: '+81-84-921-7505',
    web: 'http://www.fukuyamarccenter.com'
  },
  {
    name: 'AeroRc.my',
    country: 'Malaysia',
    address: 'No.5 Jalan 3/2J ,43650 , Bandar Baru Bangi , Selangor , Malaysia ',
    phone: '+60 16 -4410195',
    web: 'http://AeroRC.my  ( facebook) '
  },
  {
    name: 'RC NZ',
    country: 'New Zeland',
    address: '811 Jones Road, Rolleston, Christchurch, NZL 7677',
    phone: '+64 03-347-4434',
    web: 'http://www.rcnz.com'
  },
  {
    name: 'EleFun',
    country: 'Norway',
    address: 'Morholt 09  , 4887 Grimstad , Norway ',
    phone: '+47 37 04 50 60',
    web: 'http://www.elefun.no'
  },
  {
    name: 'Unknown',
    country: 'Philippines',
    address: 'Km. 17 Aguinaldo Highway ,Panapaan IV, Bacoor, Cavite ,4102 Philippines',
    phone: '+63 (917)891-78-91',
    web: ''
  },
  {
    name: 'Unknown',
    country: 'South Korea',
    address: '202- HO , 679-13 , MOK-HYON - DONG ,GWANG-JU-SI, GYONG-GI-DO, S.KOREA',
    phone: '+82-10-9768-2588',
    web: 'https://vqmodel.modoo.at'
  },
  {
    name: 'Unknown',
    country: 'South Africa',
    address: '16 Aquaruis More Hill Glen ,Benoni , 1501 Gauteng, SOUTH AFRICA',
    phone: '+27 725723214',
    web: 'http://www.dcwarbirds.co.za'
  },
  {
    name: 'Jugue Tecnic',
    country: 'Spain',
    address: 'C/Calvet 63 ,08021 Barcelona , Spain ',
    phone: '+34 932094037',
    web: 'http://www.rctecnic.com'
  },
  {
    name: 'HEBU GmbH',
    country: 'Switzerland',
    address: 'RUSSACHER 19 ,6162 ENTLEBUCH ,SWITZERLAND',
    phone: '+41 41 480 07 07',
    web: 'http://www.hebu-gmbh.ch'
  },
  {
    name: 'Unknown',
    country: 'R.O.C.',
    address: 'NO,46.HSI MEI RD..TZU TUNG HSIANG, YUN LIN, TAIWAN, R.O.C.',
    phone: '+886-5-5841909',
    web: ''
  },
  {
    name: 'Mini RC Flying',
    country: 'Thailand',
    address: '399/9 Supalai prima villa , Thalang District , Bangkhan, Bangkok province , Thailand  zip code 10220',
    phone: '+66 82-6846846',
    web: 'http://www.minircflying.com'
  },
  {
    name: 'Motion RC',
    country: 'United Kingdom',
    address: 'Cordwallis Street, Maidenhead , Berkshire SL6 7GF , United Kingdom',
    phone: '+44 01628 760430',
    web: 'http://www.motionrc.com'
  },
  {
    name: 'Unknown',
    country: 'United States of America',
    address: '320 Cary Point Dr , Unit B, Cary , IL 60013, USA',
    phone: '+1 224-633-9090',
    web: ''
  },
  {
    name: 'VQModel',
    country: 'Vietnam',
    address: '024 P block, Thanh Da hotel, 27 Ward, Binh Thanh Districts , Ho Chi Minh City , Vietnam ',
    phone: '',
    web: 'http://www.vqmodel.com'
  },
  {
    name: 'Hobby Gulf',
    country: 'Lebanon',
    address: 'Lebanon, Jeita, Kesrwan, Lebanon',
    phone: '+9619231611',
    web: 'http://www.hobbygulf.com'
  },

];

@Injectable({
  providedIn: 'root'
})
export class DistributorsService {

  constructor()
  {

  }

  public getDistributors(): Distributor[]
  {
    if (!environment.production && environment.solitary_mode)
    {
      return SOLITARY_TEST_DISTRIBUTOR;
    }

    return this.remoteGetDistributors();
  }

  public remoteGetDistributors(): Distributor[]
  {
    return SOLITARY_TEST_DISTRIBUTOR;
  }
}
