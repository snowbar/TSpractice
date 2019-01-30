import {JapaneseStyleMenuBuilder} from "./JapaneseStyleMenuBuilder";
import {AmericanStyleMenuBuilder} from "./AmericanStyleMenuBuilder";
import {CreateMenu} from "./CreateMenu";
import { MenuBuilder } from "./MenuBuilder";
export class Adapter {
    constructor() {
    }
    public getJapaneseMenu(): string {
        let builder: JapaneseStyleMenuBuilder = new JapaneseStyleMenuBuilder();
        this.create(builder);
        return builder.getResult();
    }
    public getAmericanMenu(): string {
        let builder: AmericanStyleMenuBuilder = new AmericanStyleMenuBuilder();
        this.create(builder);
        return builder.getResult();
    }
    private create(builder: MenuBuilder): void{
        let director: CreateMenu = new CreateMenu(builder);
        director.construct();
    }
}