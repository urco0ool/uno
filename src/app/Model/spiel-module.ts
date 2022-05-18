import {KarteModel} from "./karte-modules";
import {SpielerModel, SPIELER} from "./spieler-module";

export class SpielModel{
  public karten: KarteModel[] = [];
  public spieler: SpielerModel[] = SPIELER;
  public aktuellerspieler: SpielerModel= SPIELER [0];//Wer gerade am Zug ist.

  constructor(zug:string){

  }

  erzeugekarten(): KarteModel[]{
    for(let i=0; i<6; i++){
      this.karten.push( new KarteModel( "rot",  i+1));

    }
    return this.karten;
  }
}
