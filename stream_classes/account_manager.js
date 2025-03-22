import {Writable} from "node:stream"; 

export class AccountManager extends Writable {
    constructor (options) {
        super (options); 
    }
    init () {
        this.on ('finish', ()=> {
            console.log('Done writing'); 
        })        
    }
    _write (chunk, encoding, callback) {
        console.log("Within AccountManager based on Writable"); 
        console.log(chunk); 
        callback(); 
    }
}