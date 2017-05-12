import { Component } from '@angular/core';

import { LocalizationService } from './localization.service';

interface languageParams {
  name : string;
  iso : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() {
    
    for(let item of this.langs) {
      if(item.iso === LocalizationService.language) {
        this.selectedLang = item;
      }
    }
   }

  title = 'app works!';

  langs: Array<languageParams> = [
    {name : 'English', iso: 'en'},
    {name : '中文', iso: 'zh'}
  ];

   selectedLang: languageParams = this.langs[0];

   changeLang() {
     window.localStorage.setItem("lang", this.selectedLang.iso);
     window.location.reload();
   }
}
