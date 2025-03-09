import {Readable} from "node:stream"; 

export class UI extends Readable {
    constructor (data, validator, options = {}) {
    super (options); 
    this.data = data; 
    this.validator = validator
    this.init(); 
}

init () {
    this.on ('data', (chunk)=>{
        this.validator.validate(chunk);  
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


// export class UI extends Readable {
//         constructor (data, options, validator) {
//         super (options); 
//         this.data = data; 
//         this.validator = validator; 
//         this.init(); 
//     }

//     init () {
//         console.log("Within init function")
//         this.on ('data', (chunk)=>{ 
//             this.validator.validate(chunk); 
//             console.log("Within reader"); 
//             console.log(chunk) 
//         })
//     }

//     _read () {
//         const current = this.data.shift();
//         if (current === undefined) {
//             this.push(null)
//             return; 
//         } 
//         this.push(current); 
//     }
  
// }