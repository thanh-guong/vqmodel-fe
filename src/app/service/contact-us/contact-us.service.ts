import { Injectable } from '@angular/core';
import { SuperService } from '../super.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface IEmail
{
  subject: string;
  message: string;
  from_email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactUsService extends SuperService
{
  public postEmail(subject: string, message: string, fromEmail: string): Observable<IEmail>
  {
    let body: IEmail;

    // tslint:disable-next-line:object-literal-shorthand
    body = {subject: subject, message: message, from_email: fromEmail};

    return this.http.post<IEmail>(this.generateRemoteAddressForApi(environment.contactUs), body);
  }
}
