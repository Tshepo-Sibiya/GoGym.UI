import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Worker.Global.UI';
  constructor(private router: Router) { }
  Logout() {
    console.log("HELLO");
    // Navigate to the target component
    this.router.navigate(['/dashboard']);
  }
}
