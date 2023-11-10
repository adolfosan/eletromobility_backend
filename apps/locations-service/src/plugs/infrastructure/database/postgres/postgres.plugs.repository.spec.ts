import { PrismaClient } from "@prisma/client";
import { Plug, PlugFormat, PlugProps, PlugStandard, PowerType } from "@locations-service/plugs";
import { PostgresPlugsRepository } from "./postgres.plugs.repository";

const errorMessage = ( err: Error)=> {
    return ( err === undefined)? '': err.message
}

describe( PostgresPlugsRepository.name, ()=>{
    let prisma = new PrismaClient({
        datasourceUrl: "postgresql://postgres:postgres@localhost:5432/locations?schema=public"
    })

    let repository: PostgresPlugsRepository
    beforeAll( async ()=>{
        try {
            await prisma.$connect()
            repository = new PostgresPlugsRepository( prisma)
        } catch (error) {
            throw error
        }
    })

    afterAll( async ()=>{
        try {
            await prisma.$disconnect()
        } catch (error) {
            console.log( error)
        }
    })

    test(' Should be defined', async ()=>{
        if( repository === undefined)
            throw new Error('not defined!!!')
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
            max_amperage: 28
        } as PlugProps)

        plug.id ='2ec8421c-6b1d-476b-b77f-6947edbaaf2b'
        
        test('execute', async ()=>{
            const { success, value, error} = await repository.update( plug)
            //expect(success, errorMessage( error)).toBe( true)
        })
    })

    describe('Delete a plug', ()=>{
        test('execute', async ()=>{
            const { success, value, error} = await repository.delete('a')
            expect(success, errorMessage( error)).toBe( true)
        })
    })
})