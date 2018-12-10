import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { PorductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']  
  })

export class ProductListComponent implements OnInit{
      products: IProduct[];
      filterProducts: any;
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

          constructor(private productService: PorductService){
          }

          performFilter(filterBy: string): IProduct[] {
          filterBy = filterBy.toLocaleLowerCase();
          return this.products.filter(
              (product: IProduct) => product.ProductName.toLocaleLowerCase().indexOf(filterBy) !== -1
            );
          }
          ngOnInit(): void {
            this.products = this.productService.getProducts();
            this.filterProducts = this.products;
            console.log('init called');
          }
          toggleImage(): void {
            this.showImage = !this.showImage;
          }

          onRatingClicked(message: string): void {
            this. title = message;
          }
}
