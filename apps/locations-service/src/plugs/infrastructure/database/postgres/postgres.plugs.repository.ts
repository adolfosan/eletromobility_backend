import { Result } from "@libs/logic";
import { Plug, PlugsRepository } from "@locations-service/plugs";
import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export class PostgresPlugsRepository implements PlugsRepository{
    constructor( private prisma: PrismaClient) {}

    async add(plug: Plug): Promise<Result<Plug>> {
        let result:Result<Plug> = Result.fail( new Error('PostgresPlugsRepository => add not implemented'))
        try {
           const r = await this.prisma.plugEntity.create({
                data: {
                    format: plug.format,
                    standard: plug.standard,
                    power_type: plug.powerType,
                    max_amperage: plug.maxAmperage,
                    max_voltage: plug.maxVoltage
                }
            })
            plug.id = r.id
            result = Result.ok(plug)
        } catch (error) {
            result = Result.fail( error as Error)
        } finally {
            return result
        }
    }

    async update(plug: Plug): Promise<Result<true>> {
        let result:Result<true> = Result.fail( new Error('PostgresPlugsRepository => update not implemented'))
        try {
            const data: Record< string, any> = {}

            for( const prop in plug.props) {
                data[prop] = plug.props[prop]
            }

            const update = await this.prisma.plugEntity.update({
                where:{
                    id: plug.id
                },
                data: data
            })
            result = Result.ok( true)
        } catch (error) {
            if( error instanceof PrismaClientKnownRequestError) {
                const prismaError = (<PrismaClientKnownRequestError>error)
                if( prismaError.code === 'P2025') {
                    result = Result.fail( new Error(`Can't update user id: ${plug.id} because not found`))
                }
            } 
            else 
                result = Result.fail( error as Error)
        } finally {
            return result
        }
    }
    
    async delete(identifier: any): Promise<Result<true>> {
        let result:Result<true> = Result.fail( new Error('PostgresPlugsRepository => delete not implemented'))
        try {
            result = Result.ok(true)
        } catch (error) {
            
        } finally {
            return result
        }
    }
}