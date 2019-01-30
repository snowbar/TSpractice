import { MenuBuilder } from "./MenuBuilder";

export class AmericanStyleMenuBuilder implements MenuBuilder{
    private readonly rate: number = 0.01;
    private item: string = "*";
    private output: string = "";
    private breakfast: string = "";
    private lunch: string = "";
    private dinner: string = "";
    private drink: string = "";
    constructor() {
    }
    public shopTitle(title: string): void {
        this.output += "======"+ title + "======" + "\n";
    }
    public addBreakfast(breakfast: string, price: number): void {
        this.breakfast += this.item + breakfast + this.makePrice(price) + "\n";
    }
    public addLunch(lunch: string, price: number): void {
        this.lunch += this.item + lunch + this.makePrice(price) + "\n";
    }
    public addDinner(dinner: string, price: number): void {
        this.dinner += this.dinner + dinner + this.makePrice(price) + "\n";
    }
    public addDrink(drink: string, price: number): void {
        this.drink += this.item + drink + this.makePrice(price) + "\n";
    } 
    public close(): void {
        this.output += "* Morning *\n\n";
        this.output += this.breakfast + "\n";
        this.output += "・ Lunch ・\n\n";
        this.output += this.lunch + "\n";
        this.output += "[] Dinner []\n\n";
        this.output += this.dinner + "\n";
        this.output += "+ Drink +\n\n";
        this.output += this.drink + "\n";
    }
    public getResult(): string {
        return this.output;
    }
    private makePrice(price: number): string {
        return this.makeBlank() + this.convertPrice(price);
    }
    private convertPrice(price: number) :string {
        price *= this.rate;
        return "$" + price;
    }
    private makeBlank(): string {
        return(" : ");
    }

}