import {EventEmitter} from "node:events"; 


export class DataBase extends EventEmitter {
    #storage 
    constructor () {
        super(); 
        this.#storage = [];
        this.#initDB(); 
    }
    #initDB () {
       this.on ("data", (data)=> {
        console.log("Adding entry to the data base"); 
        this.#storage.push (data); 
       })
       this.on ("request", ()=> {
        console.log("Data was requested"); 
       })
    }
    addEntry (entry) {
        this.emit("data", entry); 
    }
    getData () {
        this.emit("request"); 
        return this.#storage; 
    } 
}


