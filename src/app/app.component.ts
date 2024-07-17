import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDialogServiceService } from './shared/Service/shared-dialog-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Worker.Global.UI';
  constructor(private router: Router,private dialogService: SharedDialogServiceService) { }
  Logout() {
    console.log("HELLO");
    // Navigate to the target component
    this.router.navigate(['/dashboard']);
  }

  goGym(val: string){}


  openDialog(): void {

    window.alert('Hello');
    // this.dialogService.openDialog({
    //   title: 'Dialog Title',
    //   message: 'This is a message from the dialog!'
    // });
  }

  
}
