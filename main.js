import { UI } from "./stream_classes/UI.js";
import { Validator } from "./validator/validator.js";
import { Guardian } from "./stream_classes/guardian.js";
import { Logger } from "./stream_classes/logger.js";
import { AccountManager } from "./stream_classes/account_manager.js";
import { validObjects } from "./objects/objects.js";
import { encrypttObject } from "./utils/encryption/encryption.js";
import { DataBase } from "./database/database.js";
import { insertToDB } from "./db_inserter/inserter.js";


const DB = new DataBase(); 
const KEY = process.env.ENC_KEY; 
const enryptFunc = encrypttObject(KEY); 
const properKeys = ['name', 'email', 'password']; 
const validator = new Validator (properKeys); 
const options = {
    objectMode: true, 
}


const testUI = async (objectCollection)=> {
  try {
    const streamUI = new UI (objectCollection, validator, options); 
    const guardian = new Guardian ({objectMode: true}, enryptFunc);; 
    const acc_manager = new AccountManager({objectMode: true});
    const logger = new Logger({objectMode: true}, DB);  
    streamUI.pipe(guardian).pipe(logger).pipe(acc_manager) 
  } catch (e) {
     console.error(e); 
     throw e; 
  }
}


testUI(validObjects); 















