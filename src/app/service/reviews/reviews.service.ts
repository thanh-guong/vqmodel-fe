import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {SuperService} from '../super.service';
import {IReview} from '../models.interface';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService extends SuperService
{
  public getAllReviews(): Observable<IReview[]>
  {
    return this.http.get<IReview[]>(this.generateRemoteAddressForApi(environment.reviewsRouteRemote));
  }
}
