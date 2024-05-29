import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule, AsyncPipe,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Contact.Web';
  http = inject(HttpClient);

  contactsForm = new FormGroup({
    name : new FormControl<string>(''),
    email: new FormControl<string|null>(null),
    phone: new FormControl<string>(''),
    favorite: new FormControl<boolean|null>(false)
  });
  
  contacts$ = this.getContactList();

  onFormSubmit(){
    var addContactReq = {
      Name : this.contactsForm.value.name,
      Email : this.contactsForm.value.email,
      PhoneNumber : this.contactsForm.value.phone,
      Favorite : this.contactsForm.value.favorite,
    }

    //console.log(addContactReq);
    this.http.post('https://localhost:7138/api/Contact',addContactReq)
    .subscribe({
      next : (value) => {
        console.log(value);
        this.contacts$ = this.getContactList();
        this.contactsForm.reset();
      }
    });

  }

  private getContactList():Observable<Contact[]> {
   return this.http.get<Contact[]>('https://localhost:7138/api/Contact');
  }

  onDelete(id : string){
    this.http.delete(`https://localhost:7138/api/Contact/${id}`)
    .subscribe({
      next : value =>{
        this.contacts$ = this.getContactList();
      }
    })
  }
}
