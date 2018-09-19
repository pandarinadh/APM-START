import { Component } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
  })

export class ProductListComponent {
  title: string = 'Product List';
  showImage = false;
  listFilter = "cart";
   products= [
    {
      "productId":2,
      "ProductName": "Gardent Cart",
      "ProductCode": "001",
      "reelaseDate": "March 18, 2018",
      "description": "15 gallon capacity",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "https://openclipart.org/download/58471/garden-cart.svg"
    },
    {
      "productId":3,
      "ProductName": "Hammer",
      "ProductCode": "002",
      "reelaseDate": "March 19, 2018",
      "description": "Steel",
      "price": 3.99,
      "starRating": 4.8,
      "imageUrl": "https://openclipart.org/download/14358/mystica-Hammer.svg"
    }
  ];
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
