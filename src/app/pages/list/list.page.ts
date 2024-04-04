import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ETypeRequest } from "src/app/core/enum/api.enum";

import {
  Data,
  Heroe,
  MainResponse,
} from "src/app/core/interfaces/response.interface";
import { httpMarvelApi } from "src/app/core/services/http/marvelapi.service";
import { HeroeService } from "src/app/core/services/logic/heroe.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.page.html",
})
export class ListPage implements OnInit, OnDestroy {
  list: Data;
  heroes: Heroe[];
  loading: boolean = true;
  error: boolean = false;
  $request: any = [];

  constructor(
    private httpMarvelApi: httpMarvelApi,
    private heroeService: HeroeService,
    private router: Router
  ) {}

  async ngOnInit() {
    const request = this.httpMarvelApi.get(ETypeRequest.CHARACTERS).subscribe(
      (resp: MainResponse) => {
        this.list = resp.data;
        this.heroes = resp.data.results;
        this.loading = false;
      },
      (err) => {
        this.error = true;
        this.loading = false;
      }
    );

    this.$request.push(request);
  }

  goOpenHeroe(heroe: Heroe) {
    this.heroeService.setHeroe(heroe);
    this.router.navigate(["/detail"]);
  }

  ngOnDestroy(): void {
    this.$request.forEach((e: any) => e.unsubscribe());
  }
}
