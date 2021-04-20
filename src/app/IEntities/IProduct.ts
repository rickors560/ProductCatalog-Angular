import { ICategory } from "./ICategory";

export interface IProduct{
    ID: number,
    Name: string,
    Manufacturer: string,
    ShortCode: string,
    Categories: string,
    Description: string,
    SellingPrice: number
}