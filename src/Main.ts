import { Adapter } from "./Adapter";
declare let process: any;
class Main {
    private readonly adapter: Adapter = new Adapter();
    private style: string;
    constructor(style: string) {
        this.style = style;
    } 
    judge() {
        if(this.style == "ja") {
            this.japanClick();
        }
        else if(this.style == "en"){
            this.usaClick();
        }    
    }
    private japanClick(): void {
        console.log(this.adapter.getJapaneseMenu());
    }
    private usaClick(): void {
        console.log(this.adapter.getAmericanMenu());
    }
}

if(process.argv.length == 3) {
    const main = new Main(process.argv[2]);
    main.judge();
}
else {
    console.log("usage: node Main.js ja");
    console.log("usage: node Main.js en");
}
