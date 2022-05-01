import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularCurdListComponent } from './angular-curd-list/angular-curd-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';

const routes: Routes = [
  {path:"",component:ReactiveFormDemoComponent},
  {path:"userlist" ,component:AngularCurdListComponent},
  {path:"createuser" ,component:CreateUserComponent},
  {path:"edituser/:Id" ,component:CreateUserComponent},
  //{path:"createuser" ,component:ReactiveFormDemoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
