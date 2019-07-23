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
  isLoading:boolean=false
  originalUrl:string="";
  shortUrl:string="";

  urlForm = this.fb.group({
    url: ['', Validators.required]
  }
   )


  constructor(private fb: FormBuilder,private linkService:ShortenService) { }

  ngOnInit() {

  }

  onSubmit(){
    this.isLoading=true
   const link={
     "original_url":this.urlForm.value

   }

   this.linkService.addLink(link).subscribe(data=>{
     console.log(data);
     this.originalUrl=data['original_url']
     this.shortUrl=data['new_link']
     this.isLoading=false

   })

  }
copied(){
alert("Saved to Clipboard")
}

}
