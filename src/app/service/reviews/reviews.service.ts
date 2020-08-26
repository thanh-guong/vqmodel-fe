import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {SuperService} from '../super.service';

export interface Review
{
  magazine_name: string;
  image: string;
  file: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReviewsService extends SuperService
{
  public getAllReviews(): Observable<Review[]>
  {
    return this.http.get<Review[]>(this.generateRemoteAddressForApi(environment.reviewsRouteRemote));
  }
}
