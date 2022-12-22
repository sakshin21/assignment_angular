import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  myData={name:'',price:'',quantity:'',category:'',description:'',img:''}
  myForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]+')]),
    price:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
    quantity:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
    category:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]+')]),
    description:new FormControl('',[Validators.required]),
    img:new FormControl('',[Validators.required])
  })

  constructor(private pser:ProductService,private router:Router){}

  get fdata(){
    return this.myForm.controls;
  }

  ngOnInit(): void {}
  postdata(){
    this.pser.postData(this.myData)
    .subscribe(res=>{
      if(res){
        alert("Data Added");
        this.router.navigate(['/']);
      }
    })
  }
}
