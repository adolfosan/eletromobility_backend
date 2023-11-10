import { Plug } from "../plug";

describe(Plug.name, ()=>{
    it("Should be a valid prop",()=>{
        expect(Plug.isProp('format')).toBe(true)
    })
})