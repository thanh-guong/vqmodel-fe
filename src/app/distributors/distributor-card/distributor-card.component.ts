import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-distributor-card',
  templateUrl: './distributor-card.component.html',
  styleUrls: ['./distributor-card.component.css']
})
export class DistributorCardComponent implements OnInit {

  @Input()
  public name: string = "";

  @Input()
  public image: string = "";

  @Input()
  public website: string = "";

  @Input()
  public phone: string = "";

  @Input()
  public address: string = "";

  @Input()
  public country: string = "";

  @Output()
  public copiedToClipboard = new EventEmitter<boolean>();

  public imageLoaded: boolean = false;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void
  {
    this.copiedToClipboard.emit(false);
  }

  openSnackBar(message: string, action: string): void
  {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  copyToClipboard(): void
  {
    this.openSnackBar('Copied to clipboard', '');
  }

  onImageLoad(): void
  {
    this.imageLoaded = true;
  }

}
