import 'jest-expect-message';
import { Result } from "../result";

describe(Result.name, ()=>{
    
    test('Should be a successfull result', ()=>{
        const {success, value, error}: Result<number> = Result.ok(25)
        expect( success && (value != (null || undefined)) && error == undefined).toBe(true)
    })

    test('Should be a failed result', ()=>{
        const {success, value, error}: Result<number> = Result.fail( new Error(''))
        expect( success == false && value == undefined && (error instanceof Error)).toBe( true)
    })
})