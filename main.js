import { UI } from "./stream_classes/UI.js";
import { Validator } from "./validator/validator.js";
import { Guardian } from "./stream_classes/guardian.js";
import { AccountManager } from "./stream_classes/account_manager.js";
import { InvaliObjects, validObjects } from "./objects/objects.js";
import { encrypttObject, decryptObject } from "./utils/encryption/encryption.js";

const KEY = process.env.ENC_KEY; 

const enryptFunc = encrypttObject(KEY); 



const properKeys = ['name', 'email', 'password']; 
const validator = new Validator (properKeys); 
const options = {
    objectMode: true, 
}

const testUI = (objectCollection)=> {
  try {
    console.log('Within test UI'); 
    const streamUI = new UI (objectCollection, validator, options); 
    const guardian = new Guardian ({objectMode: true}, enryptFunc);; 
    const acc_manager = new AccountManager({objectMode: true}); 
    streamUI.pipe(guardian).pipe(acc_manager); 
  } catch (e) {
     console.error(e); 
     throw e; 
  }
}

console.log('Start')

testUI(validObjects);
// testUI(InvaliObjects); 

console.log('End')






