export class Trip {
  key!: string;
  name!: string;
  destination!: string;
  startDate!: string;
  endDate!: string;
  price!: number;
  stars!: number;
  maxPlaces!: number;
  freePlaces!: number;
  description!: string;
  image!: string;

  public constructor(init?: Partial<Trip>) {
    Object.assign(this, init);
}
}
