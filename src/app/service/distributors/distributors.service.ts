import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {SuperService} from '../super.service';
import {Observable} from 'rxjs';
import {IDistributor, IImage} from '../models.interface';

const SOLITARY_TEST_DISTRIBUTOR_IMAGE: IImage = { id: 0, image: 'https://via.placeholder.com/1920x1080' };

const SOLITARY_TEST_DISTRIBUTOR: IDistributor[] = [
  {
    name: 'HQQ',
    country: 'Australia',
    address: '32/398 The Boulevarde Kirrawee NSW 2232 , AUSTRALIA',
    phone: '+61(02) 9545 1944',
    website: 'http://www.hhq.com.au/',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'Minimotores',
    country: 'Colombia',
    address: 'Carrera 45 # 45-13 ,Itagüí, Antioquia , Colombia , South America',
    phone: '+57 3104488854',
    website: 'http://www.minimotores.com.co/',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'RC - Netbutik',
    country: 'Denmark',
    address: 'Ambolten 8  , DK-2970 Horsholm , DENMARK',
    phone: '+45-42488010',
    website: 'http://www.rc-netbutik.dk',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'Topmodel',
    country: 'France',
    address: 'Le Jardin d\' entreprises de Sologne ,41300 SELLES SAINT-DENIS - FRANCE',
    phone: '+33 0254940101 ',
    website: 'http://www.topmodel.fr',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'Pichler',
    country: 'Germany',
    address: 'Lauterbachstrasse 19 ,84307 EGGENFELDEN , GERMANY',
    phone: '+49 08721-96900',
    website: 'http://www.pichler-modellbau.de',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'NEMHobby',
    country: 'Greece',
    address: '8 MALAKASI STREET ,PO11143 , ATHENS , GREECE',
    phone: '+30 210211 7335',
    website: 'http://www.nemhobby.com',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'Unknown',
    country: 'Indonesia',
    address: 'Mediteranian Garden Residences Twr A/GAG ,Jl. Tanjuang Duren Raya Kav 1 ,Jakarta 11470 , INDONESIA',
    phone: '',
    website: '',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'Piccole Ali',
    country: 'Italy',
    address: 'Via Barbariga, 7 ,30039 Stra (Venezia) , ITALIA',
    phone: '+39 0499800757',
    website: 'http://www.piccoleali.it',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'Fukuyama R/C Center',
    country: 'Japan',
    address: '3-17-12 Higashifukatsu-cho, Fukuyamashi. Hiroshima-pref., 721-0974 JAPAN',
    phone: '+81-84-921-7505',
    website: 'http://www.fukuyamarccenter.com',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'AeroRc.my',
    country: 'Malaysia',
    address: 'No.5 Jalan 3/2J ,43650 , Bandar Baru Bangi , Selangor , Malaysia ',
    phone: '+60 16 -4410195',
    website: 'http://AeroRC.my  ( facebook) ',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'RC NZ',
    country: 'New Zeland',
    address: '811 Jones Road, Rolleston, Christchurch, NZL 7677',
    phone: '+64 03-347-4434',
    website: 'http://www.rcnz.com',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'EleFun',
    country: 'Norway',
    address: 'Morholt 09  , 4887 Grimstad , Norway ',
    phone: '+47 37 04 50 60',
    website: 'http://www.elefun.no',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'Unknown',
    country: 'Philippines',
    address: 'Km. 17 Aguinaldo Highway ,Panapaan IV, Bacoor, Cavite ,4102 Philippines',
    phone: '+63 (917)891-78-91',
    website: '',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'Unknown',
    country: 'South Korea',
    address: '202- HO , 679-13 , MOK-HYON - DONG ,GWANG-JU-SI, GYONG-GI-DO, S.KOREA',
    phone: '+82-10-9768-2588',
    website: 'https://vqmodel.modoo.at',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'Unknown',
    country: 'South Africa',
    address: '16 Aquaruis More Hill Glen ,Benoni , 1501 Gauteng, SOUTH AFRICA',
    phone: '+27 725723214',
    website: 'http://www.dcwarbirds.co.za',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'Jugue Tecnic',
    country: 'Spain',
    address: 'C/Calvet 63 ,08021 Barcelona , Spain ',
    phone: '+34 932094037',
    website: 'http://www.rctecnic.com',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'HEBU GmbH',
    country: 'Switzerland',
    address: 'RUSSACHER 19 ,6162 ENTLEBUCH ,SWITZERLAND',
    phone: '+41 41 480 07 07',
    website: 'http://www.hebu-gmbh.ch',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'Unknown',
    country: 'R.O.C.',
    address: 'NO,46.HSI MEI RD..TZU TUNG HSIANG, YUN LIN, TAIWAN, R.O.C.',
    phone: '+886-5-5841909',
    website: '',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'Mini RC Flying',
    country: 'Thailand',
    address: '399/9 Supalai prima villa , Thalang District , Bangkhan, Bangkok province , Thailand  zip code 10220',
    phone: '+66 82-6846846',
    website: 'http://www.minircflying.com',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'Motion RC',
    country: 'United Kingdom',
    address: 'Cordwallis Street, Maidenhead , Berkshire SL6 7GF , United Kingdom',
    phone: '+44 01628 760430',
    website: 'http://www.motionrc.com',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'Unknown',
    country: 'United States of America',
    address: '320 Cary Point Dr , Unit B, Cary , IL 60013, USA',
    phone: '+1 224-633-9090',
    website: '',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'VQModel',
    country: 'Vietnam',
    address: '024 P block, Thanh Da hotel, 27 Ward, Binh Thanh Districts , Ho Chi Minh City , Vietnam ',
    phone: '',
    website: 'http://www.vqmodel.com',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },
  {
    name: 'Hobby Gulf',
    country: 'Lebanon',
    address: 'Lebanon, Jeita, Kesrwan, Lebanon',
    phone: '+9619231611',
    website: 'http://www.hobbygulf.com',
    image: SOLITARY_TEST_DISTRIBUTOR_IMAGE,
  },

];

@Injectable({
  providedIn: 'root'
})
export class DistributorsService  extends SuperService
{
  public getDistributors(): IDistributor[]
  {
    if (!environment.production && environment.solitary_mode)
    {
      return SOLITARY_TEST_DISTRIBUTOR;
    }

    return null;
  }

  public getAllDistributors(): Observable<IDistributor[]>
  {
    return this.http.get<IDistributor[]>(this.generateRemoteAddressForApi(environment.distributorsRoute));
  }
}
