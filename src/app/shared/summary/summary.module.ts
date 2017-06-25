import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Http, HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from '@angular/router';
// import needed PrimeNG modules here
import {DataTableModule} from 'primeng/components/datatable/datatable';

import {SummaryComponent} from "./summary.component";
import {MissingTranslationHandler, MissingTranslationHandlerParams, TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

const routes: Routes = [
  {path: '', component: SummaryComponent}
];

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}

export function createSummaryTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, '../../../assets/i18n/summary/', '.json');
}


export class MyMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return "Translate me!";
  }
}

@NgModule({
  declarations: [
    SummaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createSummaryTranslateLoader,
        deps: [Http]
      },
      isolate: true
    }),

    DataTableModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [SummaryComponent]
})
export class SummaryModule {
}
