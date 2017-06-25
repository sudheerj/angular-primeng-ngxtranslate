import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Http, HttpModule} from "@angular/http";
import {RouterModule, Routes} from '@angular/router';
// import needed PrimeNG modules here


//import {RegistrationModule} from "./shared/registration/registration.module";
//import {EmployeeService} from "./shared/summary/service/employee.service";

import {AppComponent} from "./app.component";
// import {RegistrationComponent} from "./shared/registration/registration.component";
// mport {SummaryComponent} from "./shared/summary/summary.component";
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'registration'},
  {path: 'registration', loadChildren: 'app/shared/registration/registration.module#RegistrationModule'},
  {path: 'summary', loadChildren: 'app/shared/summary/summary.module#SummaryModule'}
];

export function createHomeTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
   // RegistrationModule,
    // SummaryModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createHomeTranslateLoader,
        deps: [Http]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
