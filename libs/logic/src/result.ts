
export class Result<T, E extends Error = Error> {
    private _value: T
    private _error: E
    private _success: boolean

    private constructor( success: boolean) {
        this._success = success        
    }
    get value(): T { 
        return this._value
    }

    get error(): E {
        return this._error
    }

    get success(): boolean {
        return this._success
    }

    static ok<T, E extends Error = Error>( value: T): Result<T,E> {
        let result = new Result<T,E>( true)
        result._value = value
        return result;
    }

    static fail<T, E extends Error = Error>( error: E): Result<T, E> {
        let result = new Result<T,E>( false)
        result._error = error
        return result;
    }
}

export type PromiseResult< T, E extends Error = Error> = Promise< Result<T, E>>