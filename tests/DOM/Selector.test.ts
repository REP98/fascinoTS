import Selector from "../../src/DOM/Selector"
import { describe, it, expect, assert } from 'vitest'
import { window, document } from "../setup"

const d = document

describe("Selector", () => {

	it("Selección preload", () => {
		let isDoc = new Selector(() => {console.log("Start")})
		expect(isDoc.node[0]).toBe(document)
	})
	it("Selección de Elementos", () => {
		let n = new Selector(d.body)
		expect(n.node[0]).toEqual(d.body)
	})
	it("Selección de NodeList", () => {
		let s = new Selector("p", d)
		expect(s.length).toEqual(3)
	})
	it("Selección de HtmlColletion", () => {
		let p = d.body.children
		let s = new Selector(p, d)
		assert.isTrue(s.length > 0, "Tiene hijos")
	})
	it("Selección Anidada", () => {
		let p = new Selector(d.body.children, d)
		let s = new Selector(p, d)
		assert.isTrue(p == p)
	})
	it("Seleccionar Document", () => {
		let s = new Selector("window", d)
        expect(s.node[0]).toEqual(window)
	})
})
