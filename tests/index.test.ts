import { describe, it, assert, expect } from 'vitest'
import Utils from "../src/Utils/index"
import FascinoTS from "../src/index"

describe("Utils", () => {
    it("Validar Exportación", () => {
        assert.isObject(FascinoTS, "FascinoTS es objecto")
        assert.equal(FascinoTS.U, Utils, "Fascino Exporta Utilidades")
    })
    describe("Valida funciones de Utilidades", () => {
        it("FascinoTs exporta Utilidades", () => {
            assert.equal(FascinoTS.U.compact, Utils.compact)
        })
        it("Funciona Funciones de FascinoTS", () => {
            expect(FascinoTS.U.compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3])
        })        
    })
})
