import { Component, OnInit } from "@angular/core";
import { Heroe } from "src/app/core/interfaces/response.interface";
import { HeroeService } from "src/app/core/services/logic/heroe.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
})
export class DetailPage implements OnInit {
  heroe: Heroe;

  constructor(private heroeService: HeroeService) {}

  ngOnInit() {
    this.heroeService.$heroe.subscribe((h: Heroe) => {
      this.heroe = h;
      console.log(h)
    });
  }
}
