import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Heore } from "../interfaces/heroe.interface";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HeroesService {
  heroesURL: string = "https://heroesapp-53d8c.firebaseio.com/heroes.json";
  heroeURL: string = "https://heroesapp-53d8c.firebaseio.com/heroes/";

  constructor(private http: HttpClient) {}

  nuevoHeroe(heroe: Heore): Observable<any> {
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

  getHeroe(id: string) {
    let url: string = `${this.heroeURL}/${id}.json`;
    return this.http.get(url).pipe(map(res => res));
  }

  getHeroes() {
    return this.http.get(this.heroesURL).pipe(map(res => res));
  }

  borrarHeroe(key$: string) {
    let url = `${this.heroeURL}/${key$}.json`;

    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.http.delete(url, { headers }).pipe(map(res => res));
  }
}
