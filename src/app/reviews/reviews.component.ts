import { Component, OnInit } from '@angular/core';
import { IReview } from '../service/models.interface';
import { ReviewsService } from '../service/reviews/reviews.service';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  loading: boolean = false;
  error: boolean = false;

  reviews: IReview[] = [];

  constructor(private reviewsService: ReviewsService)
  {

  }

  ngOnInit(): void
  {
    this.loading = true;
    this.error = false;

    this.reviewsService.getAllReviews().subscribe(
      data => {
        this.reviews = data;
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
        this.error = false;
      });
  }

}
