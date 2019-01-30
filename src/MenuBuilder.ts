export interface MenuBuilder {
    shopTitle(title: string): void;
    addBreakfast(breakfast: string, prime: number): void;
    addLunch(lunch: string, prime: number): void;
    addDinner(dinner: string, prime: number): void;
    addDrink(drink: string, prime: number): void;
    close(): void;
}