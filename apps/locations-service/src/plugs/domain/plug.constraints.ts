import { Result } from "@libs/logic";
import { PlugProps } from "./plug";
import { PlugFormat } from "./plug.format";
import { PlugStandard } from "./plug.standard";
import { PowerType } from "./power.type";


type Constraints<P> = {
    [key in keyof P]: (value: any) => Result<true>
}

export const plugContraints: Constraints<PlugProps> = {
    format(value: any): Result<true> {
        if( value === undefined) 
            return Result.fail( new Error('format => required => Format is required'))
        
        if( typeof value !== 'string')
            return Result.fail( new Error('format => invalid_type => Format must be represent string'))

        if( value.trim().length == 0 )
            return Result.fail( new Error('format => empty => Format is empty'))

        if( !Object.values(PlugFormat).includes(<any>(value)))
            return Result.fail( new Error('format => invalid_type => ' +`Format is invalid, should be: ${Object.values(PlugFormat)}`))
        
        return Result.ok( true)
    },

    standard(value: any): Result<true> {
        if( value === undefined) 
            return Result.fail( new Error('standard => required => Standard is required'))

        if( typeof value !== 'string')
            return Result.fail( new Error('standard => invalid_type => Standard must be represent string'))

        if( value.trim().length == 0 )
            return Result.fail( new Error('standard => empty => Standard is empty'))

        if( !Object.values(PlugStandard).includes(<any>(value)))
            return Result.fail( new Error('standard => invalid_type => ' +`Standard is invalid, should be: ${Object.values(PlugStandard)}`))
        
        return Result.ok( true)
    },
    power_type(value: any): Result<true> {
        if( value === undefined) 
            return Result.fail( new Error('power_type => required => PowerType is required'))

        if( typeof value !== 'string')
            return Result.fail( new Error('power_type => invalid_type => PowerType must be represent string'))

        if( value.trim().length == 0 )
            return Result.fail( new Error('power_type => empty => PowerType is empty'))

        if( !Object.values(PowerType).includes(<any>(value)))
            return Result.fail( new Error('power_type => invalid_type => ' +`PowerType is invalid, should be: ${Object.values(PowerType)}`))
        
        return Result.ok( true)
    },
    max_amperage(value: any): Result<true> {
        return Result.ok( true)
    },
    max_voltage(value: any): Result<true> {
        return Result.ok( true)
    },
}