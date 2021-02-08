import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {ContactUsService} from '../service/contact-us/contact-us.service';
import {environment} from "../../environments/environment";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent
{
  error = false;

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

    this.contactUsService.postEmail('contact-us', this.message.value.email, this.email.value).subscribe(
      data => {
        this.openErrorSnackBar('Email sent', '');
      },
      error => {
        if (!environment.production)
        {
          this.error = true;
          this.openErrorSnackBar('Error', '');
        }
      }
    );
  }

}
