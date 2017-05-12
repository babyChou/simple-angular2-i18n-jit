import { Injectable, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';
 
@Injectable()
export class LocalizationService {
  static language: string;
 
  static init() {
    var lang = window.localStorage.getItem("lang");
    if (lang) {
      console.log("Saved language found.");
      this.language = lang;
    }
    else {
      var anyNavigator = navigator as any;
      var language: string = anyNavigator.languages && anyNavigator.languages[0] || // Chrome / Firefox
        anyNavigator.language ||   // All browsers
        anyNavigator.userLanguage; // IE <= 10
      lang = language.substring(0, 2);
      this.language = lang;
    }
  }
 
  static getTranslationProviders(): Promise<Object[]> {
    this.init();
    // Get the locale id from the global
    const locale = this.language;
    // return no providers if fail to get translation file for locale
    const noProviders: Object[] = [];
    // No locale or U.S. English: no translation providers
    if (!locale || locale === 'en') {
      return Promise.resolve(noProviders);
    }
    // Ex: 'locale/messages.es.xlf`
    const translationFile = `./locale/messages.${locale}.xlf`;
    return this.getTranslations(translationFile)
      .then((translations: string) => [
        { provide: TRANSLATIONS, useValue: translations },
        { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
        { provide: LOCALE_ID, useValue: locale }
      ])
      .catch(() => noProviders); // ignore if file not found
  }
 
  static getTranslations(file: string): Promise<string> {
    return (window as any).fetch(file).then((response) => {
      return response.text();
    });
  }
}