import {Transform} from "node:stream"; 


export class Guardian extends Transform {
    constructor (options, eventAction) {
        super(options);
        this.eventAction = eventAction;  
    } 
    _transform (chunk, encoding, callback) {
        console.log("Within Logger"); 
        this.eventAction(); 
        this.push (chunk);  
        callback(); 
    }
}
