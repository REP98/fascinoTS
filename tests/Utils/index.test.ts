import Utils from "../../src/Utils/index";
import { Fascino } from "../../src/index";
import { describe, it, expect, assert } from "vitest";
import { document } from "../setup";

describe("Utils", () => {
    describe("Función parseHTML", () => {
        it("Convierte String en elemento HTML", () => {
            let p = Utils.parseHTML("<p>p1</p>")
            expect(p[0]).toEqual(document.body.children[0])
        })
        it("La función no permite algo distinto de string", () => {
            let p = Utils.parseHTML(document)
            expect(p.length).toEqual(0)
        })
        it("Uso de Templates", () => {
            let p = Utils.parseHTML(`
                <div id="app">
                <h1>Esto es un APP</h1>
                <button> Mi boton</button>
                </div>
            `)
            expect(p[0].id).toEqual("app")
        })
    })
    describe("Función createScript", () => {
        it("Crea un Script sin argumento", () => {
            assert.instanceOf(Utils.createScript(), Fascino)
            assert.instanceOf(Utils.script(), Fascino)
        })
      	it("Crea un Script con argumentos", () => {
            let so = Utils.createScript("<script>console.log('hola')</script>")
            assert.instanceOf(so.first, HTMLScriptElement)
            let s = Utils.parseHTML('<script src="./app.js"></scrpt>')[0]
            assert.exists(Utils.createScript(s).attr("src") === "app.js")
        })
        it("Extrar un Script", () => {
            let Info: Element = Utils.parseHTML(`
<section>
<div>
<span>Hola soy<span id="cam">Fascino</span>
</div>
<script id="myscript">
document.querySelector("#cam").innerHtml = "Fascino V2";
</script>
</section>
            `)
            assert.isTrue(Utils.script(Info).length > 0)
            assert.isFalse(Utils.script("<span>No script</span>"))
        })
    })
    describe("Funciones de Validación", () => {
        describe("isSelector", () => {
            it("Un selector Valido", () => {
                assert(Utils.isSelector("body") === true)
            })
            it("No es un selector Valido", () => {
                assert(Utils.isSelector(123) === false)
            })
        })
        describe("isVisible", () => {
            it("Elemento visible", () => {
                assert.isTrue(Utils.isVisible(document.querySelector("body")))
            })
            it("Elemento no Visible",() => {
                assert.isFalse(Utils.isVisible(document.querySelector("section")))
            })
        })
        describe("isHiden", () => {
            it("Elemento visible", () => {
                assert.isFalse(Utils.isHiden(document.querySelector("body")))
            })
            it("Elemento no Visible",() => {
                assert.isTrue(Utils.isHiden(document.querySelector("section")))
            })
        })
        describe("isFascinoElement", () => {
            it("Es un elemento Fascino", () => {
                let so = Utils.createScript("<script>console.log('hola')</script>")
                assert.isTrue(Utils.isFascinoElement(Utils.script(so.first)))
            })
        })
    })
    describe("Nomalización de Datos y Elementos", () => {
        describe("normalizeData", () => {
            it("Normaliza un Objecto", () => {
                var o = { "lider": "Gitf", "director": "Bands" }
                expect(Utils.normalizeData('{"lider":"Gitf","director":"Bands"}'))
                    .toEqual(o)
            })
            it("Retorno el paramatro cuando no es un objecto", () => {
                let str: string = "NCIS";
                expect(Utils.normalizeData(str))
                    .toEqual(str)
            })
        })
        describe("normalizeElements", () => {
            it("es un elemento por su cadena",() => {
                assert.isTrue(Utils.isFascinoElement(
                    Utils.normalizeElements("body")
                ))
            })
            it("Es elemento un elemento", () => {
                assert.isTrue(Utils.isArray(
                    Utils.normalizeElements(
                        document.body
                    )
                ))
            })
        })
    })
    describe("Conversiones", () => {
        describe("Función formatBytes", () => {
            it("Convierte bite a Mb", () => {
                expect(Utils.formatBytes(2400400))
                    .toEqual('2.29MB')
            })
            it("Convierte bite a MB con 3 decimales", () => {
                expect(Utils.formatBytes(2400400, 4))
                    .toEqual('2.2892MB')
            })
        })
        describe("Función obj2str", () => {
            it("Convierte Objecto", () => {
                let o = { "lider": "Gitf", "director": "Bands" };
                assert.isString(Utils.obj2str(o))
            })
        })
    })
})