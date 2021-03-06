import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  param: any = {value: '3'};
  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "es", "de"]);
    translate.setDefaultLang('en');

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es|de/) ? browserLang : 'en');
  }

}
