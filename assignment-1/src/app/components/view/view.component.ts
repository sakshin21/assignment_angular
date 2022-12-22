import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  proData:any;
  id:any;
  constructor(private pser:ProductService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe(par=>{
      this.id=par['id'];
      this.pser.getProductById(this.id)
      .subscribe((res:any)=>{
        console.log(res);
        this.proData=res;
      })
    })
  }
}
