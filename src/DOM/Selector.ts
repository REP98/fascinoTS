/** @module DOM/Selector */
import Utils from "../Utils";
/**
 * Clase personalizada para manejar errores relacionados con el selector.
 * @class
 * @extends Error
 */
export class SelectorError extends Error {
    /**
     * Crea una instancia de SelectorError.
     * @param {...any} params - Parámetros opcionales para personalizar el mensaje de error.
     */
    constructor(...params: any[]) {
        super(...params)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, SelectorError)
        }

        this.name = 'SelectorError'
    }
}
/**
 * Esta Clase se encarga del tratamiento de los Selectores
 * @class
 * @requires Utils
 * @example
 * ```typescript
 * let div: Selector = new Selector('div.miclassdiv') // Obtiene todos los div con la clase miclassdiv
 * console.log(div.node) // Muestra la lista de elementos `div` cuya clase es `.miclassdiv`
 * ```
 */
export default class Selector {
    /**
     * @private
     * lista de nodos seleccionados
     * @type {Element[]}
     */
    private _node: Element[] = []
    /**
     * Enumaración de elementos
     * @enum
     * @private
     * @type {ElementSelector}
     */
    private _typeElem: ElementSelector = {
        'window': window,
        'document': document,
        'body': document.body,
        'html': document.documentElement,
        ':root': document.documentElement,
        'doctype': document.doctype
    }
    /**
     * Longitud de la colección de elementos seleccionados.
     * @type {number}
     */
    public length: number = 0
    /**
     * Crea una instancia de Selector.
     * @param {ArgSel} [selector] - Selector para buscar elementos en el DOM.
     * @param {ParentNode} [ctx = document] - Contexto opcional para la búsqueda de elementos.
     */
    constructor(
        selector?: ArgSel, 
        public ctx: ParentNode = document
    ) {
        if (this.ctx !== document) {
            let d: Document = this.ctx as Document;
            this._typeElem = {
                'window': window,
                'document': d,
                'body': d.body,
                'html': d.documentElement,
                ':root': d.documentElement,
                'doctype': d.doctype
            }
        }
        if (Utils.isNil(selector)) {
            return this
        }
        if (Utils.isString(selector)) {
            selector = (selector as string).trim()
        }
        this._query_selector(selector as ArgSel)
    }
    /**
     * Obtiene los elementos seleccionados por el selector.
     * @type {Element[]}
     */
    get node(): Element[] { return this._node }
    /**
     * Establece los elementos a seleccionar por el selector
     * @param {string | Document[] | Element | Element[]}
     */
    set node(element: string | Document[] | Element | Element[]) {
        if (Utils.isString(element)) {
            element = this._query(element as string)
        }
        this._node = Utils.concat(
            this._node, 
            Utils.isArrayLike(element) ? element : [element]
            ) as Element[]
        this.length = this._node.length
    }
    /**
     * Convierte una colección de elementos en un array de elementos o HTMLElements.
     * @protected
     * @param {any[]} element - Colección de elementos a convertir.
     * @returns {Document[] | Element[] | HTMLElement[]} - Array de elementos o HTMLElements.
     */
    protected _toElement(element: any[]): Document[] | Element[] | HTMLElement[] {
        const result: (Element | HTMLElement)[] = [];

        for (const tag of element) {
            if (Utils.isString(tag)) {
                const elements = Utils.has(this._typeElem, tag) ?
                    [this._typeElem[tag]] :
                    this._query(tag);
                for (const el of elements) {
                    result.push(el);
                }
            } else {
                result.push(tag)
            }            
        }

        return result;
    }
    /**
     * Realiza una búsqueda de elementos utilizando el selector especificado y actualiza la colección de elementos.
     * @protected
     * @param {ArgSel} selector - Selector para buscar elementos en el DOM.
     * @returns {Selector} - Instancia actualizada de Selector.
     */
    protected _query_selector(selector: ArgSel) {
        if (Utils.isFunction(selector)) {
            document.addEventListener("DOMContentLoaded", (selector as ListenerFunction), false)
            this.node = [document]
            return this;
        }
        if (Utils.isElement(selector)) {
            this.node = selector as Element
            return this
        }
        if (selector instanceof NodeList) {
            this.node = Array.from(selector) as Element[]
            return this
        }
        if (selector instanceof HTMLCollection) {
            this.node = Array.from(selector)
            return this
        }
        if ( (Utils.isObject(selector) && Utils.has(selector, "node")) 
            || selector instanceof Selector
            ) {
            this.node = (selector as unknown as Selector).node as Element[]
            return this
        }
        if (Utils.has(this._typeElem, selector)) {
            selector = this._typeElem[selector as string]
        }
        if (selector && ((selector as Element).nodeType || (selector as any).self === window)) {
            this.node = selector as Element
            return this;
        }
        if (Utils.isArray(selector)) {
            this.node = this._toElement(selector as Element[])
            return this
        }
        if (!Utils.isString(selector) &&  (selector && (selector as any).self !== window)) {
            return this;
        }
        const pHtml = Utils.parseHTML(selector as string)
        if (pHtml.length === 1 && (pHtml[0] as Element).nodeType === 3) {
            try {
                const el = this._query(selector)
                if (el.length == 0) { return this; }
                this.node = el
            } catch {
                throw new SelectorError(`\nFascino:\n ${selector} is not a valid selector`)
            }
        } else if (pHtml.length > 0) {
            this.node = pHtml
        } else {
            this.node = selector as Element[]
        }
        return this
    }
    /**
     * Realiza una búsqueda de elementos utilizando el selector especificado.
     * @protected
     * @param {ArgSel} sel - Selector para buscar elementos en el DOM.
     * @returns {Element[]} - Array de elementos encontrados por la funcion `querySelectorAll`.
     */
    protected _query(sel: ArgSel): Element[] {
        var d = this.ctx.querySelectorAll(sel as string)
        return d.length > 1 ? Array.from(d) : 
        Utils.isEmpty(d) ? [] : [d[0]]; 
    }
}