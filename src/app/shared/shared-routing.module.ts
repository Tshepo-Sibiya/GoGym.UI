import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../user/Components/dashboard/dashboard.component';


const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
      },
      {
        path: 'user',
        // canActivate: [AuthGuard],
        loadChildren: () => import('../user/user.module').then(b => b.UserModule),
        
      },
      {
        path: 'go-gym',
        // canActivate: [AuthGuard],
        loadChildren: () => import('../go-gym/go-gym.module').then(b => b.GoGymModule),
        
      },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SharedRoutingModule { }