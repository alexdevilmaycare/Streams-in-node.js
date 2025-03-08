import Readable from "node:stream"; 

export class UI extends Readable {
        constructor (data, options = {}) {
        super (options); 
        this.data = data; 
        this.init(); 
    }
    init () {
        this.on ('data', (chunk)=>{ 
            console.log("Within reader"); 
            console.log(chunk) 
        })
    }
    _read () {
        
        const current = this.data.shift();
        if (current === undefined) {
            this.push(null)
            return; 
        } 
        this.push(current); 
    }
}