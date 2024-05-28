import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Contact.Web';
  http = inject(HttpClient);
  
  contacts$ = this.getContactList();

  private getContactList():Observable<Contact[]> {
   return this.http.get<Contact[]>('https://localhost:7138/api/Contact/GellAllContact');
  }
}
