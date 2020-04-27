import { compute } from "./compute";

describe('compute' , () => {
    it('expect output to be 0' ,() => {
        const result = compute(-1);
        expect(result).toBe(0);
    })

    it('expect output to be 2' ,() => {
        const result = compute(1);
        expect(result).toBe(2);
    })

})