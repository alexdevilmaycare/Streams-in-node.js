import { UI } from "./stream_classes/UI.js";
import { Validator } from "./validator/validator.js";
import { Guardian } from "./stream_classes/guardian.js";
import { InvaliObjects, validObjects } from "./objects/objects.js";

const properKeys = ['name', 'email', 'password']; 
const validator = new Validator (properKeys); 
const options = {
    objectMode: true, 
}

const testUI = (objectCollection)=> {
  try {
    console.log('Within test UI'); 
    const streamUI = new UI (objectCollection, validator, options); 
    const guardian = new Guardian ({objectMode: true});
    streamUI.pipe(guardian);
  } catch (e) {
     console.error(e); 
     throw e; 
  }
}

console.log('Start')

testUI(validObjects);
testUI(InvaliObjects); 

console.log('End')






