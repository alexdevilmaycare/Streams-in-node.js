import {Transform} from "node:stream"; 


export class Logger extends Transform {
    constructor (options, dataBase) {
        super(options);
        this.DB = dataBase;   
        this.#init();   
    } 
    #init () {
        this.on("finish", ()=> {
            console.log("Current DB state"); 
            console.log(this.DB.getData()); 
        })
    }
    _transform (chunk, encoding, callback) {
        console.log("Within Logger"); 
        this.DB.addEntry(chunk);   //  
        this.push (chunk);  
        callback(); 
    }
}
