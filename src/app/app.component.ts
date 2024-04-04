import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent {

  appPages = [];
  browserLang: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public translateService: TranslateService
  ) {
    this.initializeApp();

    this.appPages = [
            {
        title: 'menu.home',
        url: "/home",
        icon: "home",
      },
      {
        title: 'menu.list',
        url: "/list",
        icon: "list",
      }
    ];

    this.changeLanguage('es');
  }

  public changeLanguage(language: string): void {
    this.browserLang = this.translateService.getBrowserLang(); 
    this.browserLang = this.browserLang != 'es' && this.browserLang != 'en' ? 'es' : 'es';
    this.translateService.setDefaultLang(this.browserLang);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  changeLang(lang: string = "es") {
    this.translateService.use(lang);
  }
}
