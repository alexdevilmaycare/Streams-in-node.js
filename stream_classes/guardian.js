import {Transform} from "node:stream"; 
 

export class Guardian extends Transform {
    constructor (options, transform) {
        super(options);
        this.transform = transform; 
    } 
    _transform (chunk, encoding, callback) {
        console.log("Within guardian"); 
        const transFormedValue = this.transform(chunk);  
        this.push(transFormedValue); 
        callback(); 
    }
}
