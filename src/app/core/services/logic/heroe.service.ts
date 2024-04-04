import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Heroe } from "../../interfaces/response.interface";

@Injectable({
  providedIn: "root",
})
export class HeroeService {
  private heroe = new BehaviorSubject<Heroe | null>(null);
  $heroe = this.heroe.asObservable();

  constructor() {}

  public get getHeroe(){
    return this.$heroe;
  }

  setHeroe(heroe: Heroe){
    this.heroe.next(heroe);
  }
}
