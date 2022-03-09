import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarriageRegistryComponent } from './marriage-registry/marriage-registry.component';
import { MarriageRegistryFormComponent } from './marriage-registry-form/marriage-registry-form.component';

import {MarriageRegistryListComponent} from './marriage-registry-list/marriage-registry-list.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule} from '@angular/material/core'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule} from '@angular/material/input'

import { MAT_DATE_FORMATS } from '@angular/material/core';
import { CUSTOM_DATE_FORMATS } from './shared/custom-date-formats';
import { MomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [
    AppComponent,
    MarriageRegistryComponent,
    MarriageRegistryFormComponent,
    MarriageRegistryListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MomentDateModule
  ],
  providers: [{provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS}],
  bootstrap: [AppComponent]
})
export class AppModule { }
