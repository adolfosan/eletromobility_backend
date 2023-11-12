export class PropertyError extends Error {
    constructor( private _target: string, private  _code: string, message: string) {
        super( message)   
        this.name = PropertyError.name
    }
    
    get target(): string {
        return this._target
    }

    get code(): string {
        return this._code
    }
}