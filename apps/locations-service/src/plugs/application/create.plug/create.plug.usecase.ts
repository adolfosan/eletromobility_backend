import { PromiseResult, Result } from "@libs/logic";
import { CreatePlugDTO, ICreatePlugUseCase } from "./contract";
import { PlugsRepository } from "@locations-service/plugs/domain";

export class CreatePlugUseCase implements ICreatePlugUseCase {
    constructor( private repository: PlugsRepository) {}
    
    async execute(dto: CreatePlugDTO): PromiseResult<true> {
        let result: Result<true> = Result.fail( new Error('CreatePlugUseCase => execute not implemented')) 
        try {
            
        } catch (error) {
            result = Result.fail( error as Error)
        } finally {
            return result
        }
    }
}