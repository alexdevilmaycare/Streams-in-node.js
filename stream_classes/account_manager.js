import {Writable} from "node:stream"; 

export class AccountManager extends Writable {
    constructor (options) {
        super (options); 
    }
    
    _write (chunk, encoding, callback) { 
        callback(); 
    }
}