import { PlugsRepository } from "@locations-service/plugs/domain";
import { CreatePlugDTO, ICreatePlugUseCase } from "./contract";
import { PromiseResult, Result } from "@libs/logic";
import { MethodNotImplementedError } from "@libs/logic/errors";

export class CreatePlugUseCase implements ICreatePlugUseCase {
    constructor( private repository: PlugsRepository) {}

    async execute(dto: CreatePlugDTO): PromiseResult<string> {
        let result: Result<string> = Result.fail( new MethodNotImplementedError('CreatePlugUseCase'))
        try {
            
        } catch (error) {
            result = Result.fail( error as Error)
        } finally {
            return result
        }
    }
}