import { MenuBuilder } from "./MenuBuilder";
import { MenuDirector } from "./MenuDirector";

export class CreateMenu implements MenuDirector {
    private builder: MenuBuilder;
    constructor(builder: MenuBuilder){ 
        this.builder = builder;
    }
    public construct() {
        this.builder.shopTitle("ファミレスMenu");
        this.builder.addBreakfast("ご飯",100);
        this.builder.addBreakfast("干物定食",400);
        this.builder.addBreakfast("モーニングセット",350);
        this.builder.addLunch("牛丼",300);
        this.builder.addLunch("カレー",250);
        this.builder.addLunch("焼肉定食",500);
        this.builder.addDinner("鍋",800);
        this.builder.addDinner("すき焼き御膳",1000);
        this.builder.addDrink("お茶",100);
        this.builder.addDrink("オレンジジュース",100);
        this.builder.addDrink("お酒各種",200);
        this.builder.close();
    }
}
