import { Result } from "@libs/logic";
import { Plug, PlugsRepository } from "@locations-service/plugs";

import * as crypto from 'crypto'

export class MemoryPlugsRepository implements PlugsRepository{
    private plugs: Plug[] = []

    async add(entity: Plug): Promise<Result<Plug>> {
        let result:Result<Plug> = Result.fail( new Error('MemoryPlugsRepository => add not implemented'))
        try {
            this.plugs.push( entity)
            entity.id = crypto.randomUUID()
            result = Result.ok( entity)            
        } catch (error) {
            result = Result.fail( error as Error)
        } finally {
            return result
        }
    }

    async update(entity: Plug): Promise<Result<true>> {
        let result:Result<true> = Result.fail( new Error('MemoryPlugsRepository => update not implemented'))
        try {
            
        } catch (error) {
            
        } finally {
            return result
        }
    }
    
    async delete(identifier: any): Promise<Result<true>> {
        let result:Result<true> = Result.fail( new Error('MemoryPlugsRepository => delete not implemented'))
        try {
            
        } catch (error) {
            
        } finally {
            return result
        }
    }
}