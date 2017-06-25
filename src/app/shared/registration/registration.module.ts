import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Http, HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
// import needed PrimeNG modules here

import {GrowlModule} from 'primeng/components/growl/growl';
import {PanelModule} from 'primeng/components/panel/panel';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {ButtonModule} from 'primeng/components/button/button';

import {RegistrationComponent} from "./registration.component";
import {MissingTranslationHandler, MissingTranslationHandlerParams, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


const routes: Routes = [
  {path: '', component: RegistrationComponent}
];

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}


export function createRegistrationTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, '../../../assets/i18n/registration/', '.json');
}

export class MyMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return "Translate me!";
  }
}


@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createRegistrationTranslateLoader,
        deps: [Http]
      },
      //      missingTranslationHandler: {provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler},
      isolate: true
    }),
    GrowlModule,
    PanelModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [RegistrationComponent]
})
export class RegistrationModule {
}
