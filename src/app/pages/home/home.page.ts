import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
})
export class HomePage {
  translate: string = this.translateService.currentLang; // 2

  constructor(public translateService: TranslateService) {
  }
}
