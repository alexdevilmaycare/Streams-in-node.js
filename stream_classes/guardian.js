import {Transform} from "node:stream"; 

export class Guardian extends Transform {
    constructor (options) {
        super(options);
    } 
    _transform (chunk, encoding, callback) {
        console.log(chunk) 
        this.push(chunk); 
        callback(); 
    }
}
