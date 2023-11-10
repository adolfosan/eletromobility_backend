
export interface EntityProps {
    [key: string]: any
}

export class Entity< E extends EntityProps, I = string>{
    private _id: I
    constructor( protected _props: E) {}

    get id(): I {
        return this._id
    }

    set id( value: I) {
        this._id = value
    }

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