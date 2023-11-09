
import { Entity } from "@libs/ddd"
import { PlugFormat } from "./plug.format"
import { PlugStandard } from "./plug.standard"
import { PowerType } from "./power.type"

export type PlugProps = {
    format: PlugFormat
    standard: PlugStandard
    power_type: PowerType
    max_voltage: number
    max_amperage: number
}

export class Plug extends Entity<PlugProps> {
    constructor( props: PlugProps) {
        super( props)
    }

    get format(): PlugFormat {
        return this._props.format
    }

    get standard(): PlugStandard {
        return this._props.standard
    }

    get powerType(): PowerType {
        return this._props.power_type
    }

    get maxVoltage(): number {
        return this._props.max_voltage
    }

    get maxAmperage(): number {
        return this._props.max_amperage
    }

    static isProp( key: string): boolean {
        const props = ['format','standard','power_type','max_voltage','max_amperage']
        return props.includes( key)
    }
}