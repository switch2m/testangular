import { Component, OnInit } from '@angular/core';
import { CatalogueService } from './catalogue.service';
import { Router } from '@angular/router';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  categories : any;
  currentCategory : any;


  constructor(public catalogueService : CatalogueService,
              public router : Router){}

  
  ngOnInit(): void {
      this.getCategories();
  }

  private getCategories(){
      this.catalogueService.getResource("/categories")
      .subscribe(data => this.categories = data,
      error => {
        console.log(error);
      })
      
  }

  getProductsByCat(c : any){
    this.currentCategory = c;
    if (c.name =="Computers"){this.router.navigate(['/products/2/1']).then(() => {
      window.location.reload();
    });}
    if (c.name =="Printers"){this.router.navigateByUrl('/products/2/2').then(() => {
      window.location.reload();
    });}
    if (c.name =="Smartphones"){this.router.navigateByUrl('/products/2/3').then(() => {
      window.location.reload();
    });}


    
  }

  onSelectedProducts() {
      this.currentCategory = undefined;
      this.router.navigateByUrl('/products/1/0');
  }



}
