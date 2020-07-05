import { Injectable } from '@angular/core';

export interface Distributor
{
  country: string;
  address: string;
  phone: string;
  web: string;
}

const SOLITARY_TEST_DISTRIBUTOR: Distributor[] = [
  { country: 'Australia',
    address: '32/398 The Boulevarde Kirrawee NSW 2232 , AUSTRALIA',
    phone: '+61(02) 9545 1944',
    web: 'www.hhq.com.au'
  },
  {
    country: 'Colombia',
    address: 'Carrera 45 # 45-13 ,Itagüí, Antioquia , Colombia , South America',
    phone: '+57 3104488854',
    web: 'www.minimotores.com.co'
  },
  { country: 'Denmark',
    address: 'Ambolten 8  , DK-2970 Horsholm , DENMARK',
    phone: '+45-42488010',
    web: 'www.rc-netbutik.dk'
  },
  { country: 'France',
    address: 'Le Jardin d\' entreprises de Sologne ,41300 SELLES SAINT-DENIS - FRANCE',
    phone: '+33 0254940101 ',
    web: 'www.topmodel.fr'
  },
  { country: 'Germany',
    address: 'Lauterbachstrasse 19 ,84307 EGGENFELDEN , GERMANY',
    phone: '+49 08721-96900',
    web: 'www.pichler-modellbau.de'
  },
  { country: 'Greece',
    address: '8 MALAKASI STREET ,PO11143 , ATHENS , GREECE',
    phone: '+30 210211 7335',
    web: 'www.nemhobby.com'
  },
  { country: 'Indonesia',
    address: 'Mediteranian Garden Residences Twr A/GAG ,Jl. Tanjuang Duren Raya Kav 1 ,Jakarta 11470 , INDONESIA',
    phone: '',
    web: ''
  },
  { country: 'Italy',
    address: 'Via Barbariga, 7 ,30039 Stra (Venezia) , ITALIA',
    phone: '+39 0499800757',
    web: 'www.piccoleali.it'
  },
  { country: 'Japan',
    address: '3-17-12 Higashifukatsu-cho, Fukuyamashi. Hiroshima-pref., 721-0974 JAPAN',
    phone: '+81-84-921-7505',
    web: 'www.fukuyamarccenter.com'
  },
  { country: 'Malaysia',
    address: 'No.5 Jalan 3/2J ,43650 , Bandar Baru Bangi , Selangor , Malaysia ',
    phone: '+60 16 -4410195',
    web: 'AeroRC.my  ( facebook) '
  },
  { country: 'New Zeland',
    address: '811 Jones Road, Rolleston, Christchurch, NZL 7677',
    phone: '+64 03-347-4434',
    web: 'www.rcnz.com'
  },
  { country: 'Norway',
    address: 'Morholt 09  , 4887 Grimstad , Norway ',
    phone: '+47 37 04 50 60',
    web: 'www.elefun.no'
  },
  { country: 'Philippines',
    address: 'Km. 17 Aguinaldo Highway ,Panapaan IV, Bacoor, Cavite ,4102 Philippines',
    phone: '+63 (917)891-78-91',
    web: ''
  },
  { country: 'South Korea',
    address: '202- HO , 679-13 , MOK-HYON - DONG ,GWANG-JU-SI, GYONG-GI-DO, S.KOREA',
    phone: '+82-10-9768-2588',
    web: 'https://vqmodel.modoo.at'
  },
  { country: 'South Africa',
    address: '16 Aquaruis More Hill Glen ,Benoni , 1501 Gauteng, SOUTH AFRICA',
    phone: '+27 725723214',
    web: 'www.dcwarbirds.co.za'
  },
  { country: 'Spain',
    address: 'C/Calvet 63 ,08021 Barcelona , Spain ',
    phone: '+34 932094037',
    web: 'www.rctecnic.com'
  },
  { country: 'Switzerland',
    address: 'RUSSACHER 19 ,6162 ENTLEBUCH ,SWITZERLAND',
    phone: '+41 41 480 07 07',
    web: 'www.hebu-gmbh.ch'
  },
  { country: 'R.O.C.',
    address: 'NO,46.HSI MEI RD..TZU TUNG HSIANG, YUN LIN, TAIWAN, R.O.C.',
    phone: '+886-5-5841909',
    web: ''
  },
  { country: 'Thailand',
    address: '399/9 Supalai prima villa , Thalang District , Bangkhan, Bangkok province , Thailand  zip code 10220',
    phone: '+66 82-6846846',
    web: 'www.minircflying.com'
  },
  { country: 'United Kingdom',
    address: 'Cordwallis Street, Maidenhead , Berkshire SL6 7GF , United Kingdom',
    phone: '+44 01628 760430',
    web: 'www.motionrc.com '
  },
  { country: 'United States of America',
    address: '320 Cary Point Dr , Unit B, Cary , IL 60013, USA',
    phone: '+1 224-633-9090',
    web: ''
  },
  { country: 'Vietnam',
    address: '024 P block, Thanh Da hotel, 27 Ward, Binh Thanh Districts , Ho Chi Minh City , Vietnam ',
    phone: '',
    web: 'www.vqmodel.com'
  },
  { country: 'Lebanon',
    address: 'Lebanon, Jeita, Kesrwan, Lebanon',
    phone: '+9619231611',
    web: 'www.hobbygulf.com'
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
    return SOLITARY_TEST_DISTRIBUTOR;
  }
}
