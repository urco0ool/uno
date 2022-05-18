
import { Component, OnInit } from '@angular/core';
import { KarteModel, Karten} from "../Model/karte-modules";
import {SpielModel} from "../Model/spiel-module";
import {SPIELER, SpielerModel} from "../Model/spieler-module";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
    spiel: SpielModel;
    karten: KarteModel[]=[];

    constructor() {
      this.spiel = new SpielModel("hallo");
      this.karten = this.spiel.erzeugekarten();
    }

    ngOnInit(): void{
      console.log(this.karten);
    }

}
