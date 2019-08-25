import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { ShortenService } from 'src/app/services/shorten.service';
import { ActivatedRoute } from '@angular/router';
import {isValidURL} from './urlvalidator';

@Component({
  selector: 'app-shorten-form',
  templateUrl: './shorten-form.component.html',
  styleUrls: ['./shorten-form.component.scss']
})


export class ShortenFormComponent implements OnInit {
  hasShortened = false;
  originalUrl = '';
  shortUrl = '';
  error: string;

  urlForm = this.fb.group({
    url: ['', [Validators.required, isValidURL]]
  }
   );


  constructor(private router: ActivatedRoute, private fb: FormBuilder, private linkService: ShortenService) { }

  ngOnInit() {

  }
  onSubmit() {
   const link = {
     original_url: this.urlForm.value.url

   };

   this.linkService.addLink(link).subscribe(data => {
     this.hasShortened = true;
     this.originalUrl = data.original_url;
     this.shortUrl = data['new_link'];


   }, err => {

     setTimeout(() => {
    this.error = '';
     }, 3000);
     if (err.type === 'error') {
       this.error = 'Something went wrong';
     }
     this.error = (err.Error);
     this.hasShortened = false;
   });
  }
copied() {
alert('Saved to Clipboard');
}

}
