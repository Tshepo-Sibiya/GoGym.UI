import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manu-items',
  templateUrl: './manu-items.component.html',
  styleUrls: ['./manu-items.component.css']
})
export class ManuItemsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(val: string) {
    this.router.navigate(['/user/' + val]);
  }

}
