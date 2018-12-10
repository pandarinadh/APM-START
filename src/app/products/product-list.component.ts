import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']  
  })

export class ProductListComponent implements OnInit{
  constructor(){
    this.filterProducts = this.products;
    this.listFilter = "";
  }

  performFilter(filterBy: string): IProduct[] {
   filterBy = filterBy.toLocaleLowerCase();
   return this.products.filter(
      (product: IProduct) => product.ProductName.toLocaleLowerCase().indexOf(filterBy) !== -1
     );
  }
  filterProducts: any;

  ngOnInit(): void {
    console.log('init called');
  }
  title: string = 'Product List';
  showImage = false;
  
  _listFilter: string;

  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    this.filterProducts = this.listFilter ? this.performFilter(this.listFilter) : this. products
  }

   products : IProduct[]= [
    {
      "productId":2,
      "ProductName": "Gardent Cart",
      "ProductCode": "001-temp1",
      "reelaseDate": "March 18, 2018",
      "description": "15 gallon capacity",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "https://openclipart.org/download/58471/garden-cart.svg"
    },
    {
      "productId":3,
      "ProductName": "Hammer",
      "ProductCode": "002-temp2",
      "reelaseDate": "March 19, 2018",
      "description": "Steel",
      "price": 3.99,
      "starRating": 2.8,
      "imageUrl": "https://openclipart.org/download/14358/mystica-Hammer.svg"
    }
  ];
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this. title = message;
  }
}
