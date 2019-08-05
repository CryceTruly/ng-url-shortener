import { Component, OnInit } from '@angular/core';
import {FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ShortenService } from 'src/app/services/shorten.service';
import { ActivatedRoute } from '@angular/router';


function isValidURL(): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    console.log(c);

    if (c.value=='www.google.com') {
      return { 'url': true };
    }
    return null;
  };
}
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
    url: ['',isValidURL]
  }
   )


  constructor(private router:ActivatedRoute, private fb:FormBuilder, private linkService:ShortenService) { }

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
     if(err['type']==='error'){
       this.error='Something went wrong'
     }
    this.error=(err['Error'])
    this.hasShortened=false


   })
  }
copied(){
alert("Saved to Clipboard")
}

}
