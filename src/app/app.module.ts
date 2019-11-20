import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './Awesome/view/view.component';
import { EditComponent } from './Awesome/edit/edit.component';
import { DeleteComponent } from './Awesome/delete/delete.component';
import { HomeComponent } from './Awesome/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateComponent } from './Awesome/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    EditComponent,
    DeleteComponent,
    HomeComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
