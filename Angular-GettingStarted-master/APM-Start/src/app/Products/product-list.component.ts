import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    products: IProduct[] = [
    {
        "productId" : 2,
        "productName" : "Garden cart",
        "productCode" : "GDN-0023",
        "releaseDate" : "March 24, 2019",
        "description" : "15 gallon capacity rolling garden",
        "price" : 32.99,
        "starRating" : 4.9,
        "imageUrl": "assets/images/garden_cart.png"
    },
    {
        "productId" : 5,
        "productName" : "Hammer",
        "productCode" : "TBX-0048",
        "releaseDate" : "May 05, 2019",
        "description" : "Curved claw steel hammer",
        "price" : 8.99,
        "starRating" : 3.5,
        "imageUrl": "assets/images/hammer.png"
    }
];

toggleImage(): void{
    console.log(this.showImage);
    this.showImage = !this.showImage;
}

ngOnInit(): void{
    console.log('In OnInit');
}
}