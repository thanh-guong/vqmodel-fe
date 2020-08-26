import { Component, OnInit } from '@angular/core';
import {AircraftClass, AircraftService} from '../service/aircraft/aircraft.service';
import {Review, ReviewsService} from '../service/reviews/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Review[];

  constructor(private reviewsService: ReviewsService)
  {

  }

  ngOnInit(): void
  {
    this.reviewsService.getAllReviews().subscribe(
      data => {
        this.reviews = data;
      },
      error => { console.log(error); });
  }

}
