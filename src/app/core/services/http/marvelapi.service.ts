import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class httpMarvelApi {
  constructor(private http: HttpClient) {}

  //Generate MD5
  //https://www.md5hashgenerator.com/
  //TS+PRIVATE+PUBLIC

  get(path: string) {

    return this.http.get(
      `${environment.marvelApi}${path}?ts=1&apikey=${environment.marvelPublicKey}&hash=${environment.marvelHash}`
    );
  }
}
