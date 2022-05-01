import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularCurdListComponent } from './angular-curd-list/angular-curd-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowSuccessMessageComponent } from './show-success-message/show-success-message.component';
import { ShowErrorMessageComponent } from './show-error-message/show-error-message.component';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularCurdListComponent,
    CreateUserComponent,
    ShowSuccessMessageComponent,
    ShowErrorMessageComponent,
    DeletePopupComponent,
    ReactiveFormDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
