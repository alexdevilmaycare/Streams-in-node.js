import {Transform} from "node:stream"; 
 

export class Guardian extends Transform {
    constructor (options, transform) {
        super(options);
        this.transform = transform; 
    } 
    _transform (chunk, encoding, callback) {
        const transFormedValue = this.transform(chunk);  
        this.push(transFormedValue); 
        callback(); 
    }
}
