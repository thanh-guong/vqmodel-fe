import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {ContactUsService} from '../service/contact-us/contact-us.service';
import {environment} from '../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent
{
  error = false;
  loading = false;

  email = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  message = new FormControl('', [
    Validators.required,
  ]);

  constructor(private contactUsService: ContactUsService, private snackBar: MatSnackBar)
  {

  }

  openSnackBar(message: string, action: string): void
  {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: 'primary'
    });
  }

  openErrorSnackBar(message: string, action: string): void
  {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: 'warning'
    });
  }

  public submitForm(): void
  {
    this.error = false;
    this.loading = true;

    let messageValue: string = this.message.value === null ? this.message.toString() : "";
    let emailValue: string = this.email.value === null ? this.message.toString() : "";

    this.contactUsService.postEmail('contact-us', messageValue, emailValue).subscribe(
      data => {
        this.loading = false;
        this.openErrorSnackBar('Email sent', '');
      },
      (error: HttpErrorResponse) => {
        if (!environment.production)
        {
          this.loading = false;
          this.error = true;

          if (error.status === +429)
          {
            // {"detail": "Request was throttled. Expected available in 57 seconds."}
            const m = 'Available in ' + error.error.detail.substring(45, error.message.length - 3);
            this.openErrorSnackBar(m, '');
            return;
          }
          this.openErrorSnackBar('Error', '');
        }
      }
    );
  }

}
