export class BookedTrip {
  key!: string;
  tripId!: string;
  name!: string;
  quantity!: number;
  price!: number;
  public constructor(init?: Partial<BookedTrip>) {
    Object.assign(this, init);
}
}


