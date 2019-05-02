import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Heore } from "../interfaces/heroe.interface";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HeroesService {
  heroesURL: string = "https://heroesapp-53d8c.firebaseio.com/heroes.json";
  heroeURL: string = "https://heroesapp-53d8c.firebaseio.com/heroes/";

  constructor(private http: HttpClient) {}

  nuevoHeroe(heroe: Heore) {
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.post(this.heroesURL, body, { headers }).pipe(
      map(res => {
        console.log(res);
        return res;
      })
    );
  }

  actualizarHeroe(heroe: Heore, key$: string) {
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    let url = `${this.heroeURL}/${key$}.json`;

    return this.http.put(url, body, { headers }).pipe(
      map(res => {
        console.log(res);
        return res;
      })
    );
  }
}
