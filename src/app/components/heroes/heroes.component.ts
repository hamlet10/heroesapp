import { Component, OnInit } from "@angular/core";
import { HeroesService } from "src/app/services/heroes.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: any;

  constructor(private _heroeServices: HeroesService) {
    this._heroeServices.getHeroes().subscribe(data => {
      console.log(data);
      this.heroes = data;
    });
  }

  ngOnInit() {}

  borrarHeroe(key$: string) {
    this._heroeServices.borrarHeroe(key$).subscribe(res => {
      if (res) {
        console.error(res);
      } else {
        delete this.heroes[key$];
      }
    });
  }
}
