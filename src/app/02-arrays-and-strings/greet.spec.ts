import { greet } from "./greet"

describe('greet' , () => {
    it('expect to be harsha' , ()=> {
        expect(greet('harsha')).toContain('harsha');
    })
})