/** @module DOM/Data */
import Utils from "../Utils";
/**
 * Identificador Único para los Atributos
 * @private
 * @type {Number}
 * @defaultvalue -1
 */
var DataUI: number = -1
/**
 * @classdesc Manejador de almacenamiento de datos en el Elemento
 * @class
 * @requires Utils
 */
export default class Data {
	/** @type {number} */
	ID: number = -1;
	/**
	 * Inicializador de Data
	 */
	constructor( 
		private _UID: string = "FSData"
		) {
		DataUI++
		this.ID = DataUI
	}
	/**
	 * Obtiene El Identificador.
	 * @return {string}
	 */
	get UID(): string {
		return this._UID
	}
	/**
	 * Establece el Identicador Único de Data
	 * @param {string} udName
	 */
	set UID(udName: string) {
		this._UID = udName
	}
	/**
	 * Verifica si el objeto dado es un Elemento
	 * @param  {Element} el El elemento
	 * @return {boolean}
	 */
	acceptData(el: Element): boolean {
		return el.nodeType === 1 || el.nodeType === 9 || !( +el.nodeType )
	}
	/**
	 * Valida si se puede establece o usar el Atributo DataSet del HTMLElement
	 * @param  {Element | HTMLElement} el El Elemento
	 * @return {boolean}
	 */
	acceptDataSet(el: Element | HTMLElement): boolean {
		return this.acceptData(el) && !Utils.isNil((el as HTMLElement).dataset);
	}
	/**
	 * Obtiene los datos Almacenados en el Elemento
	 * @param  {Element | HTMLElement}  el El elemento
	 * @param  {boolean} [config = true] Indica si el objeto sera configurable
	 * @return {ObjAny}
	 */
	storage(el: Element | HTMLElement, config: boolean = true): ObjAny {
		let val = el[this.UID]
		if (Utils.isNil(val)) {
			val = {}
			if (this.acceptData(el)) {
				if (el.nodeType) {
					el[this.UID] = val
				} else {
					Object.defineProperty(el, this.UID, {
						value: val,
						configurable: config
					})
				}
			}
		}

		return val
	}

	/**
	 * Establece el nuevo valor de la propiedad
	 * @param  {Element | HTMLElement} el El elemento
	 * @param  {string | ObjAny} key  La clave
	 * @param  {*} [data] El valor a establecer
	 * @return {string | ObjAny} El nuevo valor establecido
	 */
	set(el: Element | HTMLElement, key: string | ObjAny, data?: any): string | ObjAny {
		let store = this.storage(el)
		if (Utils.isString(key)) {
			store[Utils.camelCase(key)] = data
		} else {
			for (let prop in (key as ObjAny)) {
				if (Utils.has(key, prop)) {
					store[Utils.camelCase(prop)] = key[prop]
				}
			}
		}
		return store
	}
	/**
	 * Obtiene el valor del Atributo o todos
	 * @param  {Element} el El elemento
	 * @param  {String} [key] La clave a buscar si se omite se buscaran todos los atributos
	 * @return {ObjAny | String | Boolean}
	 */
	get(el: Element, key?: string): ObjAny | string | boolean {
		if (Utils.isNil(key)) {
			return this.storage(el)
		}
		return el[this.UID] && el[this.UID][key] ? el[this.UID][key] : false
	}
	/**
	 * Obtiene o Establece el atributo
	 * @param  {Element | HTMLElement} el El elemento
	 * @param  {string} key  La clave
	 * @param  {string | ObjAny} data El valor
	 * @return {any}      El valor obtenido o establecido
	 */
	access(el: Element | HTMLElement, key: string, data: string | ObjAny): any {
		if (Utils.isNil(key) || ((key && Utils.isString(key)) && Utils.isNil(data))) {
			return this.get(el, key)
		}

		this.set(el, key, data)
		return Utils.isNil(data) ? key : data
	}
	/**
	 * Verifica si el elemento tiene la clave dada
	 * @param  {Element | HTMLElement}  el El elemento
	 * @param  {string}  key La clave
	 * @return {boolean}
	 */
	has(el:Element | HTMLElement, key: string): boolean {
		if (Utils.isNil(key)) {
			let c = this.storage(el)
			return !Utils.isNil(c)
		} else {
			return this.get(el, key) !== false ? true :
				(Utils.has(el, "hasAttribute") && el.hasAttribute(`data-${key}`))
		}
	}
	/**
	 * Remueve una clave dada
	 * @param  {Element | HTMLElement} el El elemento
	 * @param  {any} key La clave
	 * @return {void| boolean}
	 */
	remove(el: Element | HTMLElement, key: any): void | boolean {
		let i, store = el[this.UID]
		if (Utils.isNil(store)) {
			let ds = this.data(el)
			if (Utils.isNil(ds)) return;

			this.remove(el, key)
			if(this.acceptDataSet(el)) {
				let attrs = el.attributes
				i = attrs.length
				while (i--) {
					if (attrs[i]) {
						let name = attrs[i].name
						if (name.indexOf("data-") === 0) {
							el.removeAttribute(name)
						}
					}
				}
			}
            return;
		}

		if (!Utils.isNil(key)) {
			if (Utils.isArray(key)) {
				key = (key as any[]).map(Utils.camelCase)
			} else {
				key = Utils.camelCase(key)
				key = key in store ? [key] : (key.match( /[^\x20\t\r\n\f]+/g ) || [])
			}
			i = key.length

			while (i--) {
				delete store[key[i]]
			}
		}

		if (Utils.isNil(key) && Utils.isNil(store)) {
			if (el.nodeType) {
				el[this.UID] = undefined
			} else {
				delete el[this.UID]
			}
		}

		return true
	}
	/**
	 * Limpia el Objecto Data del Elemento
	 * @param  {Element} el El Elemento
	 * @return {boolean}
	 */
	clean(el: Element): boolean {
		if (!Utils.isNil(el[this.UID])) {
            el[this.UID] = undefined;
		}
        return Utils.isNil(el[this.UID]);
	}
	/**
	 * Establece los atributos `data` de un elemento
	 * @param  {Element | HTMLElement} elem Elemento a manipular
	 * @param  {ObjAny | string | string[]} key  La clave del atributo data ejemplo data-valor; key = valor
	 * @param  {any} [data] El resultado del atributo data
	 * @return {any}  El resultado del atributo data obtenido
	 */
	attrToStorage(elem: Element | HTMLElement, key: ObjAny | string | string[], data?: any): any {
		let name

		if (Utils.isNil(data) && elem.nodeType === 1) {
			name = "data-" + (key as string).replace(/[A-Z]/g, "-$&").toLowerCase()
			data = elem.getAttribute(name)

			if (typeof data === "string") {
				data = Utils.normalizeData(data)
				this.set(elem, key, data)
			} else {
				data = undefined
			}
		}

		return data
	}
	/**
	 * Establece u Obtiene los atributos de Data
	 * @param  {NodeList | Element | HTMLElement | HTMLElement[]}    els  El o los Elementos
	 * @param  {any[]} args Cualquier argumento según su accion hasta 2 maximo
	 * @return {*}
	 */
	data(els: NodeList | Element | HTMLElement | HTMLElement[], ...args: any[]): any {
		let ds,
			attrs, 
			i: number,
			el: NodeList | Element | HTMLElement | HTMLElement[]

		if(Utils.isNil((els as NodeList).length)) {
			el = els 
			els = [els as HTMLElement]
		} else {
			el = els[0]
		}

		if(args.length === 0) {
			ds = this.get(el as Element)
			if(this.acceptDataSet(el as Element)) {
				attrs = (el as HTMLElement).attributes
				i = attrs.length
				while (i--) {
					if (attrs[i]) {
						let name = attrs[i].name
						if (name.indexOf("data-") === 0) {
							name = Utils.camelCase(name.slice( 5 ))
							this.attrToStorage(el as HTMLElement, name, ds[name])
						}
					}
				}
			}
			return ds
		}
		
		if (args.length === 1) {
			if (Utils.isArray(args[0])) {
				let res = {},
					i = 0
				Utils.each(els, (elem) => {
					let id = elem.getAttribute("id"),
						prefix = !Utils.isNil(id) ? id : (el as Element).tagName+i
					args[0].forEach( (d) => {
						res[prefix] = res[prefix] || {}
						let re = this.get(elem, d)
                        if (Utils.isNil(re)) {
							if (elem.nodeType === 1) {
								re = elem.hasAttributes(`data-${d}`) ? elem.getAttribute(`data-${d}`) : re
								re = Utils.normalizeData(re)
							}
						}
						res[prefix][d] = re
					})
					i++
				})
				return res
			} else if (Utils.isObject(args[0])) {
                return Utils.each(els, (elem) => {
					for (let key in args[0]) {
                        if (Utils.has(args[0], key)) {
                            let value = Utils.normalizeData(args[0][key])
							this.set(elem, key, value)
						}
					}
				})
            } else if (Utils.isString(args[0])) {
				let res = this.get(el as Element, args[0])
				
                if (!res || Utils.isNil(res)) {
					if ((el as Element).nodeType === 1) {
						res = (el as Element).hasAttribute(`data-${args[0]}`) ? (el as Element).getAttribute(`data-${args[0]}`) as string : res
                        res = Utils.normalizeData(res)
					}
				}
				return res
			}
		}
		
        return Utils.each(els, (elem) => {
			this.set(elem, args[0], args[1])
		})
	}
}