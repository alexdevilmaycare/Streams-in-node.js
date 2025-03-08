import Readable from "node:stream"; 

export class UI extends Readable {
        constructor (data, validator, options = {}) {
        super (options); 
        this.data = data; 
        this.validator = validator; 
        this.init(); 
    }
    init () {
        this.on ('data', (chunk)=>{ 
            this.validator.validate(chunk);  // Added validation  class has to be implemented  
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