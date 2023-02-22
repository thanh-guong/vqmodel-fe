import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent implements OnInit {

  @Input()
  public name: string = "";

  @Input()
  public image: string = "";

  @Input()
  public download: string = "";

  public imageLoaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onImageLoad(): void
  {
    this.imageLoaded = true;
  }

}
