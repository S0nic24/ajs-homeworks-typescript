import Buyable from './Buyable';

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly originalName: string,
    readonly format: string,
    readonly year: number,
    readonly country: string,
    readonly motto: string,
    readonly genres: string[],
    readonly time: string,
    readonly price: number,
  ) {}
}