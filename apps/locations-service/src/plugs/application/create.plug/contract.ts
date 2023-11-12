import { PromiseResult, UseCase } from "@libs/logic";
import { PlugProps } from "@locations-service/plugs/domain";

export type CreatePlugDTO = PlugProps
export interface ICreatePlugUseCase extends UseCase<CreatePlugDTO, PromiseResult<string>> {}