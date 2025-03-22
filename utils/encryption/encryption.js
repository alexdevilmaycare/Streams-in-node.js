import {encrypt, decrypt} from "node-encryption"; 

export const encryptString = key => text => encrypt(text, key);
export const decryptString = key => encrText => decrypt (encrText, key).toString(); 

export const encrypttObject = (key)=> (object)=> {
    const {name, email, password} = object;
    const encryptionFunc = encryptString(key); 
    const encryptedEmail = encryptionFunc(email); 
    const encryptedPass = encryptionFunc(password);
    return {
        meta: {
            source: "UI",
        },
        payload: {
            name, 
            email: encryptedEmail, 
            password: encryptedPass
        }
    }  
}

export const decryptObject = (key)=> (object)=> {
    const {payload} = object; 
    const {name, email, password} = payload; 
    const decryptFunct = decryptString(key); 
    const decryptedEmail = decryptFunct(email); 
    const decryptedPass = decryptFunct(password); 
    return {
        name, 
        email: decryptedEmail, 
        password: decryptedPass
    }
}