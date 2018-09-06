import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormElementComponent } from './form-element/form-element.component';
import { FormComponent } from './form/form.component';
import { ModelService } from './services/ModelService';
import { TextElemComponent } from './form-elements/text-elem/text-elem.component';
import { DropdownElemComponent } from './form-elements/dropdown-elem/dropdown-elem.component';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
    align: 'right',
    allowNegative: false,
    decimal: ',',
    precision: 0,
    prefix: '',
    suffix: '',
    thousands: '.'
  };


@NgModule({
   declarations: [
      AppComponent,
      FormElementComponent,
      FormComponent,
      TextElemComponent,
      DropdownElemComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
      CurrencyMaskModule
   ],
   providers: [
       ModelService,
       { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
