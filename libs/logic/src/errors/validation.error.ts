
export class ValidationError extends Error {
    private target: Record<string, string> = {}
    constructor( public readonly context: string) {
        super('ValidationError')
        this.name = ValidationError.name
    }
    
    addConstraint( code: string, message: string) {
        this.target[code] = message
    }
    
    hasConstraints(): boolean {
        return Object.keys( this.target).length  !== 0
    }
    getTargets() {
        return this.target
    }
}