import {Component, OnInit} from '@angular/core';
import {Product} from '../shared/product';
import {ProductService} from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[];
  query: string;
  constructor(private productService: ProductService, private route: ActivatedRoute) {
  console.log('Called Constructor');
    this.route.queryParams.subscribe(params => {
        this.query = params['query'];
        this.updateQuery();
    });
  }

  ngOnInit() {
    this.updateQuery();
  }
  updateQuery() {
    if (this.query) {
      this.products = this.productService.getProductsSearch(this.query);
    } else {
      this.products = this.productService.getProducts();
    }
  }
}
