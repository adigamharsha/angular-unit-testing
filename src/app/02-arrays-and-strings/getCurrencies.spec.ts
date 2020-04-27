import { getCurrencies } from "./getCurrencies"

describe('', () => {
    it('should return supported currencis', () => {
        expect(getCurrencies()).toContain('AUD');
    })
})