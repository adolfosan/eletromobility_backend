
export interface EntityProps {
    [key: string]: any
}

export class Entity< E extends EntityProps>{
    constructor( protected _props: E) {}

    get props(): EntityProps {
        return Object.freeze( this._props)
    }

    get( prop: keyof E): E[typeof prop] {
        return this._props[prop]
    }

    set( prop: keyof E, value: E[typeof prop]) {
        this._props[prop] = value
    }
}