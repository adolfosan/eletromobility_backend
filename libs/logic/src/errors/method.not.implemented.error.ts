
export class MethodNotImplementedError extends Error{
    constructor( msg: string) {
        super(`${msg} not implemented`)
        this.name =MethodNotImplementedError.name
    }
}