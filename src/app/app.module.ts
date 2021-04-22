import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DatePipe} from '@angular/common';

// PrimeNG Components for demos
import {AccordionModule} from 'primeng/accordion';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BaumComponent } from './baum/baum.component';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    BaumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    DropdownModule,
    CalendarModule,
    ButtonModule,
    CardModule,
    TableModule,
    ToastModule
    
],
  providers: [DatePipe,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
