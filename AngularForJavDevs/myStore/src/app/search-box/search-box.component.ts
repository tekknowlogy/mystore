import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  str: string;
  constructor(private router: Router) {}

  ngOnInit() {
    this.str = '';
  }
 public search(event) {
   this.router.navigate(['/'], { queryParams: { query: this.str }});
  }

}
