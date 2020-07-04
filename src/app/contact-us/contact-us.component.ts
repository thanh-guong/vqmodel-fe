import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent
{

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public submitForm(event): void
  {
    console.log('Submit');
  }

}
