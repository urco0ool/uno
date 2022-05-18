export class KarteModel{
  public farbe: string;
  public nummer: number;

  constructor(farbe: string, nummer: number) {
    this.farbe = farbe;
    this.nummer = nummer;
  }

}


export const Karten: KarteModel[] = [

  new KarteModel("rot", 1),
  new KarteModel("rot", 2),
  new KarteModel("rot", 3)
]
