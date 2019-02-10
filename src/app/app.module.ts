import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    CardModule,
    BrowserAnimationsModule,
    FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
