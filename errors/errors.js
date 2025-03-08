export class InvalidNumberOfFieldsError extends Error {
    constructor (message) {
        super (message); 
        this.name = 'InvalidNumberOfFieldsError'; 
    }
}

export class OneOfRequiredFieldsMissingError extends Error {
    constructor(message) {
        super (message); 
        this.name = 'OneOfRequiredFieldsMissingError';  
    }
}

export class KeyIsNotStringError extends Error {
    constructor (message) {
        super (message); 
        this.name = 'KeyIsNotStringError'; 
    }
}