import { Result } from "@libs/logic";
import { Entity, EntityProps } from "./entity";

export interface MutableRepository< E extends Entity<EntityProps>> {
    add( entity: E): Promise< Result<E>>
    update( entity: E): Promise< Result<true>>
    delete(identifier: any)
}

