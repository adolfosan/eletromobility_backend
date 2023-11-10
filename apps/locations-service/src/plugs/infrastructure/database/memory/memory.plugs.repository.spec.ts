import { Plug, PlugFormat, PlugProps, PlugStandard, PowerType } from "../../../domain";
import { MemoryPlugsRepository } from "./memory.plugs.repository";


const errorMessage = ( err: Error)=> {
    return ( err === undefined)? '': err.message
}

describe( MemoryPlugsRepository.name, ()=>{
    let repository = new MemoryPlugsRepository()

    test(' Should be defined', async ()=>{
        expect( repository).toBeDefined()
    })

    describe('Add a plug', ()=>{
        const plug = new Plug({
            standard: PlugStandard.CHADEMO,
            format: PlugFormat.CABLE,
            power_type: PowerType.DC,
            max_voltage: 10,
            max_amperage: 15
        })
        
        test('execute', async ()=>{
            const { success, error} = await repository.add( plug)
            expect(success, errorMessage( error)).toBe( true)
        })
    })

    describe('Update a plug', ()=>{
        const plug = new Plug({
            standard: PlugStandard.CHADEMO,
            format: PlugFormat.CABLE,
        } as PlugProps)
        
        test('execute', async ()=>{
            const { success, value, error} = await repository.update( plug)
            expect(success, errorMessage( error)).toBe( true)
        })
    })

    describe('Delete a plug', ()=>{
        test('execute', async ()=>{
            const { success, value, error} = await repository.delete('a')
            expect(success, errorMessage( error)).toBe( true)
        })
    })
})