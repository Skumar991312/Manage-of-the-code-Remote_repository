import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleComponent } from './style/style.component';
import { ClazzComponent } from './clazz/clazz.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgObjectComponent } from './ng-object/ng-object.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleComponent,
    ClazzComponent,
    IfelseComponent,
    NgForComponent,
    NgObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
