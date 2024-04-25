/**
 * Modulo de Utilidades de Fascino J{T}S
 * @module Utils
 */
/**
 * @module Utils/Lodash
 * Carga funciones de Lodash
 * @see [Lodash](https://lodash.com)
 */
import _ from "lodash";
/**
 * @module Utils/MarkdownIt
 * Carga funciones de Markdown
 * @see [MarkdownIt](https://markdown-it.github.io)
 */
import markdownit from 'markdown-it';
/**
 * @module Utils/Colorsea
 * Carga funciones de ColorSea
 * @see [Colorsea](https://colorsea.js.org)
 */
import colorsea from 'colorsea';

import { _$, Fascino } from "../DOM";
import { session, local } from "./Storage";

/**
 * Analiza una cadena de datos HTML y devuelve uno o más elementos HTML.
 * @param  {string} data el texto HTML
 * @return {Element[] | Element | HTMLCollection}  El nuevo objeto o una matriz
 */
function parseHTML(data: string): Element | Element[] | HTMLCollection {
	const result: Element[] | HTMLCollection = [] 
	const regexpSingleTag: RegExp = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // eslint-disable-line

	if (typeof data !== "string") {
		return []
	}

	data = data.trim()

	var ctx: Document = document.implementation.createHTMLDocument("")
	var base: HTMLBaseElement = ctx.createElement("base")
	base.href = document.location.href
	ctx.head.appendChild(base)
	var _context: HTMLElement = ctx.body

	var singleTag = regexpSingleTag.exec(data)

	if (singleTag) {
		result.push(
			document.createElement(singleTag[1])
			)
	} else {
		_context.innerHTML = data
		for (let i = 0; i < _context.childNodes.length; i++) {
			result.push(_context.childNodes[i] as Element)
		}
	}

	return result
}

/**
 * Formatea bytes en una cadena legible (por ejemplo, “1.23 MB”).
 * @param  {number} bytes    Bytes a dar formato
 * @param  {number} [decimals=2] Cantidad de decimales a mostrar
 * @return {string}
 */
function formatBytes(bytes: number, decimals: number = 2): string {
	if (bytes === 0) return "0 Bytes";

	const k: 1024 = 1024;
	const dm: number = decimals < 0 ? 0 : decimals;
	const sizes: string[] = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

	const i: number = Math.floor(Math.log(bytes) / Math.log(k));

	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + "" + sizes[i];
}
/**
 * Verifica si un valor es un selector válido.
 * @param  {any}  selector
 * @return {boolean}  Verdadero si es un selector
 */
function isSelector(selector: any): boolean {
	if (!Utils.isString(selector)) {
		return false
	}
	try {
		document.querySelector(selector)
	} catch (error) {
		return false
	}

	return true
}
/**
 * Normaliza una cadena de datos en un objeto
 * @param  {string} data
 * @return {ObjAny | any} El objeto JSON
 */
function normalizeData(data: string): ObjAny | any {
	try {
		return JSON.parse(data)
	} catch (e) {
		return data
	}
}
/**
 * Convierte un objeto en una cadena o devuelve el objeto original.
 * @param  {ObjAny}  data Objecto
 * @return {string | ObjAny}
 */
function obj2str<ObjAny>(data: ObjAny): string | ObjAny {
	try{
		return JSON.stringify(data)
	} catch (e) {
		return data;
	}
}
/**
 * Crea un elemento script a partir de una cadena, un elemento o un array de datos.
 * @param  {string | Element | Array<any>} [script]
 * @return {Fascino | Element}  El nuevo Script
 */
function createScript(script?: string | Element | Array<any>): Fascino | Element {
    let s: HTMLScriptElement = parseHTML('<script/>')[0] as HTMLScriptElement
	s.type = "text/javascript";
    if (Utils.isNil(script)) return _$(s as Element) as unknown as Fascino
    let _s: HTMLScriptElement = _$(script).first as HTMLScriptElement
	if (!Utils.isNil(_s.src)) {
		s.src = _s.src
	} else {
		s.textContent = _s.innerText
	}
	document.body.appendChild(s)
	if (_s.parentNode) _s.parentNode.removeChild(_s)
    return _$(s) as unknown as Fascino
}
/**
 * Intenta crear, extraer o ejecutar un script
 * @param  {Element | null} el Elemento Script
 * @return {Fascino | Element | null | HTMLScriptElement[]}
 */
function script(el: Element | null): Fascino | Element | null | HTMLScriptElement[] {
	if (Utils.isNil(el)) return createScript()
	const _el: Element = _$(el as Element).first as Element
	if(_el.tagName && _el.tagName === "SCRIPT") {
		return createScript(_el)
	} else {
        let scripts = _$(_el).find("script");
        if (scripts !== false) {
            let res: HTMLScriptElement[] = [];
            (scripts as unknown as Fascino).each((s) => {
                res.push(createScript(s) as HTMLScriptElement)
            })
            return res;
        }
	}
    return null;
}
/**
 * Obtiene el valor calculado de una propiedad de estilo CSS.
 * @param  {Element} el El Elemento
 * @param  {string | string[]} [prop] La Propiedad
 * @param  {string | null | undefined} [pseudoElt=""] PseudoElt
 * @return {any}
 */
function getStyleComputed(el: Element, prop?: string | string[], pseudoElt: string | null | undefined = ""): any {
	if (Utils.isNil(el) || !Utils.isElement(el)) {
		return
	}

	if (!Utils.isNil(prop) && (prop as string).indexOf(":") === 0) {
		pseudoElt = prop as string
		prop = undefined
	}

	if (Utils.isNil(prop)) {
		return window.getComputedStyle(el, pseudoElt)
	}

	if (Utils.isArray(prop)) {
        let ListProperty = {};
		let propertys: CSSStyleDeclaration = window.getComputedStyle(el, pseudoElt);
		(prop as string[]).forEach((property) => {
			ListProperty[property] = propertys[property]
		})
		return ListProperty
	}
	let propertyStyle = window.getComputedStyle(el, pseudoElt)
	return propertyStyle[prop as string]
}
/**
 * Verifica si un elemento es visible en la página.
 * @param  {string | Element}  el
 * @return {boolean}    Verdadero si es visible
 */
function isVisible(el: string | Element): boolean {
	if (Utils.isNil(el)) return false
	let elm: ParentNode | Element | null = !Utils.isElement(el) ? null :
		isSelector(el) ? document.querySelector(el as string) : el as Element
	if (Utils.isNil(elm)) return false;

	let Body = document.querySelector("body"),
		Html = document.querySelector("html");

	while(elm && elm != Body && elm != Html) {
        let property = getStyleComputed(elm as Element, ["display", "opacity", "visibility"])
		if (property.display === "none" || 
			_.toString(property.opacity) === "0" ||
			property.visibility === "hidden") {
			return false;
		}
		elm = elm.parentNode as ParentNode
	}
	return true
} 
/**
 * Verifica si un elemento está oculto en la página.
 * @param  {string | Element}  el
 * @return {boolean}    Verdadero si esta oculto
 */
function isHiden(el: string | Element): boolean {
	return (el as HTMLElement).hidden || !isVisible(el)
}
/**
 * Verifica si un elemento es de tipo {@link Fascino}.
 * @param  {*}  el
 * @return {boolean}    Verdadero si es un elemento de Fascino o _$
 */
function isFascinoElement(el: any): boolean {
    if (Utils.isNil(el)) {
        return false
    }
    if (el.constructor && el.constructor.name.toUpperCase() === "FASCINO") {
        return true
    }

    return Utils.has(el, "node")
}
/**
 * Normaliza elementos HTML o de tipo {@link DOM.Fascino}.
 * @param  {string | Element | Element[] | Fascino} s
 * @return {Fascino}   El elemento en su expresión para su uso
 */
function normalizeElements(s: string | Element | Element[] | Fascino): Fascino {
    let result
    if (Utils.isString(s)) {
        result = isSelector(s) ? _$(s).node : parseHTML(s as string)
    } else if (Utils.isElement(s)) {
        result = [s]
    } else if (isFascinoElement(s)) {
        result = (s as Fascino).node
    } else if (Utils.isArray(s)) {
        result = s
    }

    return _$(result)
}
/**
 * Normaliza un nombre.
 * @param  {string} [name] El nobre
 * @return {string | undefined}  el nombre normalizado o indefinido
 */
function normName(name?: string): string | undefined {
    return typeof name !== "string" ? undefined : name.replace(/-/g, "").toLowerCase()
}
/**
 * Crea una uri a partir de un String
 * 
 * @example
 * ```typescript
 * _$.createURI('mifile.php')
 * // return --> https://domain.ext/path/mifile.php
 * ```
 * @param  {string} u Dirección o path a convertir
 * @return {string}   URI bien formateada
 */
function createURI(u: string): string {
    var a: HTMLAnchorElement = document.createElement('a')
    a.href = u

    return !_.isNil(a.href) && isURL(a.href) ? a.href : u
}
/**
 * Verifica si una variable es una URL valida
 * @param  {string | URL}  u URI a validar
 * @return {boolean}
 */
function isURL(u: string | URL): boolean {
    return u instanceof URL || /(http|https|ftp):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(u)
}
/**
 * Construye una URL valida para la API fetch o XMLHttpRequest
 * @param  {string} urlBase URL
 * @param  {ObjKSt} [params = {}]  Conjunto de parametros de URLSearchParams
 * @return {URL}         API URL
 */
function url(urlBase: string, params: ObjKSt = {}): URL {
    if (!isURL(urlBase)) {
        urlBase = createURI(urlBase)
    }
    var url = new URL(urlBase);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    return url
}
/**
 * Renderiza texto Markdown en un elemento HTML.
 * @param {string} text El texto Markdown
 * @returns {HTMLElement}
 */
function md_render(text: string): HTMLElement {
    const md = markdownit({
        html: true,
        breaks: true,
        linkify: true
    })
    return md.render(text)
}
/** 
 * Objecto que contiene todas las funciones de Utilidades
 * @type {ObjAny}
 */
const Utils: ObjAny = {
    ..._,
    LODASH_VERSION: _.VERSION,
    colorsea,
    createScript,
    createURI,
    formatBytes,
    getStyleComputed,
    isFascinoElement,
    isHiden,
    isSelector,
    isURL,
    isVisible,
    local,
    md_render,
    normalizeData,
    normalizeElements,
    normName,
    obj2str,
    parseHTML,
    session,
    script,
    url
}

delete Utils.VERSION;
delete Utils._;

export default Utils;