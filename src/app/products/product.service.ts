import { IProduct } from "./product";
import { Injector, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PorductService{

    getProducts(): IProduct[] {
        return[
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
            },
            {
                "productId":4,
                "ProductName": "screw driver",
                "ProductCode": "003-temp3",
                "reelaseDate": "March 19, 2018",
                "description": "Steel",
                "price": 4.99,
                "starRating": 5,
                "imageUrl": "https://openclipart.org/download/14358/mystica-Hammer.svg"
              },
            {
                "productId":5,
                "ProductName": "Wrench",
                "ProductCode": "004-temp4",
                "reelaseDate": "March 19, 2018",
                "description": "Steel",
                "price": 10.99,
                "starRating": 1,
                "imageUrl": "https://openclipart.org/download/14358/mystica-Hammer.svg"
              }
          ];
    }
}