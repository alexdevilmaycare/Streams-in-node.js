import { InvalidNumberOfFieldsError, 
         OneOfRequiredFieldsMissingError, 
         KeyIsNotStringError } from "../errors/errors";


export class Validator {
    constructor  (fields) {
        this.fields = fields;
    }

    #isNumberOfFieldsCorrect (data) {
        const keys = Object.keys(data); 
        const length  = keys.length; 
        const isValidNumber = length === 3;  
        if (isValidNumber === false) {
            const message = `Expected 3 fields but recieved ${length} \n Current fields: ${keys.join(' ')}`; 
            throw new InvalidNumberOfFieldsError (message)
        }
    }
    #areReqiredFieldsIncluded (data) {
        const currentKeys = Object.keys(data); 
        this.fields.forEach (required => {
            const isIncluded = currentKeys.includes(required); 
            if (isIncluded === false) {
               throw new OneOfRequiredFieldsMissingError (`Missing the key: ${required}`)
            }
        })
    }

    #isAllKeysStrings (data) {
        const currentKeys = Object.keys(data); 
        currentKeys.forEach(key => {
            const type = typeof key; 
            if (type !== "string") {
                throw new KeyIsNotStringError(`One of the keys is not a string: ${key}: ${type}`)
            }
        })
    }

    validate (data) {
        this.#isNumberOfFieldsCorrect(data); 
        this.#areReqiredFieldsIncluded(data); 
        this.#isAllKeysStrings(data); 
    }
}