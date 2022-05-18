export class SpielerModel{
  public id: number;
  public name: string;

  constructor(name: string, id:number) {
      this.id = id;
      this.name = name;
  }
}
export const SPIELER: SpielerModel[] = [
  new SpielerModel("User",  1),
  new SpielerModel("User",  2)
]
