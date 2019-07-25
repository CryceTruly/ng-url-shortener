import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { forbiddenNameValidator } from './urlvalidator';
import { ShortenService } from 'src/app/services/shorten.service';
@Component({
  selector: 'app-shorten-form',
  templateUrl: './shorten-form.component.html',
  styleUrls: ['./shorten-form.component.scss']
})
export class ShortenFormComponent implements OnInit {
  hasShortened:boolean=false
  originalUrl:string="";
  shortUrl:string="";
  error:string;

  urlForm = this.fb.group({
    url: ['', Validators.required]
  }
   )


  constructor(private fb: FormBuilder,private linkService:ShortenService) { }

  ngOnInit() {

  }

  onSubmit(){
   const link={
     "original_url":this.urlForm.value.url

   }

   this.linkService.addLink(link).subscribe(data=>{
     this.hasShortened=true
     this.originalUrl=data['original_url']
     this.shortUrl=data['new_link']


   },err=>{
     setTimeout(() => {
    this.error=""
     }, 3000);
    this.error=(err['Error'])
    this.hasShortened=false


   })

  }
copied(){
alert("Saved to Clipboard")
}

}
