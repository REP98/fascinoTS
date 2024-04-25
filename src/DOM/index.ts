/**
 * Funciones para manipular el DOM
 * @module DOM
 *
 * @requires Utils
 * @requires DOM/Selector
 * @requires DOM/Data
 * @requires DOM/Event.FsEvent
 * @requires package.json
 */
import Utils from "../Utils";
import Selector from "./Selector";
import Data from "./Data"
import FsEvent from "./Event";
import pkm from "../../package.json"
/** 
 * Nombre del Framework 
 * @const {string}
 */
export const NAME_FRAMEWORK = "FascinoJ{T}S"
/**
 * Función Fascino para el Acceso del Navegador
 * @global
 * @see {@link Fascino}
 * @param {ArgSel} [sel]
 * @param {ParentNode} [ctx=document]
 * @return {Fascino}
 */
export function _$(sel?: ArgSel, ctx: ParentNode = document): Fascino {
	return new Fascino(sel, ctx)
}
/**
 * @class 
 * @classdesc Clase Inical del Framework
 * @extends {@link DOM/Selector}
 */
export class Fascino extends Selector {
	/** 
	 * Version de Fascino
	 * @type {string}
	 */
	version: string
	/** 
	 * Nomre del Paquete
	 * @type {string}
	 */
	name: string
	/** 
	 * @private
	 * @type {Data} 
	 */
	private _ds : Data
	/**
	 * @private
	 * @type {FsEvent} 
	 */
	private _ev: FsEvent
	/**
	 * @param {ArgSel} [sel] Selector de elementos o null
	 * @param {ParentNode} [ctx = document] Padre del elemento a seleccionar
	 */
	constructor(sel?: ArgSel, ctx: ParentNode = document) {
		super(sel, ctx)
		this.name = NAME_FRAMEWORK
		this.version = pkm.version
		this._ds = new Data()
		this._ev = new FsEvent()
	}
	/**
	 * Busca verifica si un elemnto es checkd 
	 * @protected
	 * @param {string} prop 
	 */ 
	protected _is(prop: string): boolean {
		let res: boolean = false
		this.each((el) => { res = el[prop]; });
		return res;
	}
	/**
	 * Obtiene o establece una propiedad de un elemento
	 * @protected
	 * @param  {string} name  El nombre de la propiedad
	 * @param  {any}    [value] El valor a establecer o undefined si solo se quiere obtener
	 * @return {any}
	 */
	protected _prop(name: string, value?: any): any {
		if ( this.length === 0 ) return false;
		if ( arguments.length === 1 ) return name in this.node[0] ?
			this.node[0][name] : undefined
		if (Utils.isNil(value)) value = "";
		return this.each((el) => {
			el[name] = value;
			if (name === 'innerHTML') Utils.script(el);
		})
	}
	/**
	 * Método privado que ayuda a establecer opciones a un elemento dado.
	 * @protected
	 * @param {Element | NodeList}  node Nodo
	 * @param {ObjKSt}     options Opciones
	 * @return {void}
	 */
	protected _setOptions(node: Element | NodeList, options: ObjKSt): void {
		if (!Utils.isNil(node)) {
			Utils.each(options, (value, key) => {
				let nEl: Fascino = _$(node)
				if (Utils.has(options, key) && Utils.has(nEl, key)) {
					nEl[key].apply(this, value)
				}
			})
		}
	}
	/**
	 * Tamaño Externo del elemento
	 * @protected
	 * @param  {string} prop La propiedad
	 * @param  {string | number | boolean} [val] el valor o undefined si solo se quiere obtener
	 * @return {(String|Number)}
	 */
	protected _sizeOut(prop: string, val?: string | number | boolean): Fascino | number {
		if (this.length === 0)  return this;

		if (!Utils.isNil(val) && typeof val !== 'boolean') {
			return this.each((el) => {
				if (!Utils.isElement(el)) return
				let style = Utils.getStyleComputed(el),
					bs: number = prop === 'width' ? parseInt(style['border-left-width']) + parseInt(style['border-right-width']) : parseInt(style['border-top-width']) + parseInt(style['border-bottom-width']),
					pa: number = prop === 'width' ? parseInt(style['padding-left']) + parseInt(style['padding-right']) : parseInt(style['padding-top']) + parseInt(style['padding-bottom']);

				(el as HTMLElement).style[prop] = (_$(el)[prop](val)[prop]() - bs - pa) + 'px'
			})
		}

		let el: Element = this.first as HTMLElement
		let size: number = el[prop === 'width' ? 'offsetWidth' : 'offsetHeight']
		let style: ObjAny = Utils.getStyleComputed(el)
		let result: number = size + parseInt(style[prop === 'width' ? 'margin-left' : 'margin-top']) + parseInt(style[prop === 'width' ? 'margin-right' : 'margin-bottom'])
		return val === true ? result : size
	}
	/**
	 * Tamano real del elemento
	 * @protected
	 * @param  {string} prop La propiedad
	 * @param  {string | number | boolean} [val] el valor a asinar o undefined si solo se quiere obtener
	 * @return {Fascino | number | string}
	 */
	protected _size(prop: string, val?: string | number | boolean): Fascino | number | string {
		if (this.length === 0) return NaN

		if (Utils.isNil(val)) {
			let el = this.first
			if (prop === 'height') {
				return el === window ? window.innerHeight : el === document ? el.body.clientHeight : parseInt(getComputedStyle(el as Element).height)
			} else if (prop === 'width') {
				return el === window ? window.innerWidth : el === document ? el.body.clientWidth : parseInt(getComputedStyle(el as Element).width)
			}
		}

		return this.each((el) => {
			if (!Utils.isElement(el)) return
			(el as HTMLElement).style[prop] = isNaN(val as number) ? val : val + 'px'
		})
	}
	// Parametros
	/**
	 * Primer elemento seleccionado
	 * @public
	 * @types {Element | null}
	 */
	get first(): Element | Document | Window & typeof globalThis | null {
		if (this.length > 0){
			return this.length == 1 ?
				this.node[0] :
				Utils.first(this.node)
		}
		return null
	}
	/**
	 * Ultimo elemento
	 * @public
	 * @types {Element | null}
	 */
	get last(): any {
		return this.length == 1 ?
			this.node[0] : 
			Utils.last(this.node)
	}
	// UTILS
	/**
	 * Primer elemento, envuelto en new Fascino
	 * @return {Fascino}
	 */
	getfirst(): Fascino {
		return new Fascino(this.first, this.ctx)
	}
	/**
	 * Ultimo elemento, envuelto en new Fascino
	 * @return {Fascino}
	 */
	getlast(): Fascino {
		return new Fascino(this.last, this.ctx)
	}
	/**
	 * Obtiene el elemento dado por su index o todos los elemetos
	 * @param  {number | null} [ix = null] Index a buscar
	 * @return {Element[]}   Lista de elementos encotrados
	 */
	get(ix: number | null = null): Element[] | Element {
		if (Utils.isNull(ix)) {
			return this.node
		}
		var i: number = ix as number
		if (i < 0) {
			if (Utils.isNil(Utils.nth(this.node, i + this.length))) {
				return this.last
			}
			return this.node[i + this.length]
		}
		return this.node[i]
	}
	/**
	 * Busca, valida y obtiene el elemento dado por su posición dentro de la matriz de elementos
	 * @param  {number} i posición del elemento
	 * @return {Fascino}
	 */
	eq(i: number): Fascino {
		return !isNaN(i) && this.length > 0 ?
		_$(this.get(i)) :
		this
	}
	/**
	 * Añade funciones a Fascino
	 * @static
	 *
	 * @example
	 * ```typescript
	 * Fascino.addMethod("saludar", (n: string) => {
	 * 	// Nos aseguramos de afectar solo el primer elemento
	 * 	let first = this.first
	 * 	let txt = first.text() // Obtenemos el Texto
	 * 	// Establecemos el texto
	 * 	first.text(txt + " " + n)
	 * })
	 * ```
	 * uso
	 * ```Javascript
	 * _$("p").saludar("añado esto a texto")
	 * ```
	 * 
	 * @param {string} name Nombre de la función
	 * @param {FascinoFN} callback Función a asignar
	 * @return {Fascino}
	 */
	static addMethod(name: string, callback: FascinoFN): Fascino {
		if (Fascino.prototype.hasOwnProperty(name)) {
			Fascino.prototype[name] = callback
		}

		return Fascino.prototype
	}
	/**
	 * Recorre los elementos
	 * @param  {FNElements} callback Argumentos
	 * @return {Fascino}
	 */
	
	each(callback: FNElements): Fascino {
		this.node.forEach(callback)
		return this;
	}
	/**
	 * Verifica si el elemento es seleccionable por el Selector
	 * @param  {string} selector Selector CSS
	 * @return {Element[]}
	 */
	matches(selector: string): Element[] {
		const Elm: Element[] = []
		this.each((el) => {
			if(el.matches(selector)) {
				Elm.push(el)
			}
		})
		return Elm
	}
	/**
	 * Crea una nueva matriz de elementos a través de la función dada
	 * @param  {MapFns} callbackFn Función
	 * @return {Fascino}
	 */
	map(callbackFn: MapFns): Fascino {
		this.node.map(callbackFn, this)
		return this
	}
	/**
	 * Combina Elementos
	 * @param  {ArgSel} elements Matriz de elementos nueva
	 * @return {Fascino}
	 */
	merge(elements: ArgSel): Fascino {
		const el = new Fascino(elements)
		this.node = Utils.concat(this.node, el.node)
		return this
	}
	/**
	 * Obtiene la posición del elemento dentro de su padre
	 * @param  {string}     [selector] selector
	 * @param  {ParentNode} [parent]   padre
	 * @return {number} 
	 */
	index(selector?: string, parent?: ParentNode): number {
		let El: Element = this.first as Element,
			ix: number = -1,
			child
		if (Utils.isNil(parent)) { parent = El.parentNode as ParentNode }
		
		if (Utils.isNil(selector)) {
			child = _$(parent).children()
		} else {
			child = _$(parent).find(selector as string)
		}
		child.each((elem, i) => {
			if(elem === El) {
				ix = i
			}
		})

		return ix
	}
	/**
	 * Crea una nueva selección de elemento que cumplan con la condición dada en la función
	 * @param  {string | Function}  fn Funcion o selector
	 * @return {Fascino[]}
	 */
	filter(fn: string | Function): Fascino[] {
		if (Utils.isString(fn)) {
			let s = fn
			fn = (el) => {return el.matches(s)}
		}
		return Utils.concat(
			_$().node, 
			Utils.filter(this.node, fn)
			)
	}

	/**
	 * Busca un elemento hijo por su selector CSS
	 * @param  {ArgSel} sel Selector CSS valido
	 * @return {Fascino | boolean}
	 */
	find(sel: ArgSel): Fascino | boolean {
		let rEl: Element[] = []
		this.node.forEach((el) => {
			rEl.concat(...Element.prototype.querySelectorAll.call(el, sel as string)) as Element[]
		})
		return rEl.length === 0 ? false : _$(rEl)
	}
	/**
	 * Verifica si el elemento es hijo del Elemento seleccionado
	 * @param  {string} s Selector CSS
	 * @return {boolean}
	 */
	contains(s: string): boolean {
		let i = this.find(s)
		return i != false && (i as Fascino).length > 0;
	}
	/**
	 * Obtiene los hijos de un elemento
	 * @param  {string | Element} [sel = null] Selector o elemento hijo a buscar
	 * @return {Element[]} Lista de hijos
	 */
	children(sel: string | null = null): Element[] {
		let childs: Element[] = [...(this.first as Element).children]
		if (Utils.isNil(sel)) {
			return childs
		}
		return childs.filter( child => child.matches(sel as string) )
	}
	/**
	 * Verifica de que tipo es el selector
	 * @param  {any}  s
	 * @return {Boolean}
	 */
	is(s: any): boolean {
		let result: boolean = false
		let hasClass = (el: Element, className: string): boolean => el.classList.contains(className)
		if (this.length == 0) return result
		if (s && Utils.has(s, "node")) {
			this.each((el) => {
				s.each((o) => { 
					if (el === o) result = true; return true;
				})
			})
		}
		if (Utils.isString(s)) {
			s = Utils.replace(s, ":", "")
			if (s === "selected" || s === "checked") {
				return this._is(s)
			}
			else if (s === "visible") this.each((el) => { if (Utils.isVisible(el)) result = true  })
			else if (s === "hidden") {
				this.each((el) => {
					if (el.getAttribute("type") === 'hidden' || Utils.isHide(el)) result = true
				})
			} else if (["disabled", "readonly"].indexOf(s) > -1) {
				this.each((el) => {
					if (el[s] || el.getAttribute(s) || hasClass(el, s)) {
						result = true
					}
				})
			} else {
				this.each((el) => {
					if (el.matches(s) || Element.prototype.matches.call(el, s)) {
						result = true
					}
				})
			}
		} else if(Utils.isArray(s)) {
			this.each((el) => {
				s.forEach((sel) => {
					if (el == sel) result = true
				})
			})
		} else if (Utils.has(s, "nodeType") && s.nodeType === 1) {
			this.each((el) => { if (el == s) result = true })
		}
		return result
	}
	/**
	 * Método público de Fascino._prop
	 * @param  {string} name  Nombre de la propiedad
	 * @param  {any}    [value] Valor de la propiedad o undefined
	 * @return {any}
	 */
	prop(name: string, value?: any):any {
		return this._prop(name, value);
	}
	/**
	 * Agrega un elemento al padre seleccionado
	 * @param  {HTMLElement} childNode Nodo Hijo
	 * @param  {ObjAny}      [options]   Opciones
	 * @return {Fascino | boolean}
	 */
	append(childNode: HTMLElement, options?: ObjAny): Fascino | boolean {
        if (this.length == 0) { return false;  }

        let chilNodeNormal = Utils.normalizeElements(childNode);

		this._setOptions(chilNodeNormal, options as ObjKSt);

		return this.each((parent) => {
			_$(chilNodeNormal).each((nw, i) => {
				if (nw === parent) return;
				let child = i === 0 ? nw : nw.cloneNode(true);
				Utils.script(child)
				if ((child as Element).tagName && (child as Element).tagName !== "SCRIPT") {
                    parent.append(child)
				}
			})
		})
	}
	/**
	 * Agrega el elemento seleccionado al nuevo padre
	 * @param  {HTMLElement | Element | Fascino} parentNode Nodo Padre
	 * @param  {ObjAny}  [options] Opciones
	 * @return {Fascino | boolean}
	 */
	appendTo(parentNode: HTMLElement | Element | Fascino, options?: ObjAny): Fascino | boolean {
		if (this.length == 0) return false;
		let parent = Utils.normalizeElements(parentNode);
        this._setOptions(parent, options as ObjKSt);
		return this.each((child) => {
			_$(parent).each((p, i) => {
				if (p == child) return;
				p.append(
					i === 0 ? child : child.cloneNode(true)
				)
			})
		})
	}
	/**
	 * Agrega un nuevo elemento al principio del padre seleccionado
	 * @param  {HTMLElement | Element | Fascino} childNode Nodo Hijo
	 * @param  {ObjAny}         [options] Opciones
	 * @return {Fascino} 
	 */
	prepend(childNode: HTMLElement | Element | Fascino, options?: ObjAny): Fascino | boolean {
		if (this.length == 0) return false;
		let childNodeNormal = Utils.normalizeElements(childNode)
		this._setOptions(childNodeNormal, options as ObjKSt)
		return this.each((el, ix) => {
			_$(childNodeNormal).each((nw) => {
				if (el === nw) return;
				let c = ix === 0 ? nw : nw.cloneNode(true)
				Utils.script(c)
				if ((c as HTMLElement).tagName && (c as HTMLElement).tagName !== "SCRIPT") el.prepend(c)
			})
		})
	}
	/**
	 * Agrega el elemento seleccionado al nuevo padre
	 * @param  {HTMLElement | Element | Fascino} parent  Nodo Parent
	 * @param  {ObjAny}         [options] Opciones
	 * @return {Fascino | boolean}
	 */
	prependTo(parent: HTMLElement | Element | Fascino, options?: ObjAny): Fascino | boolean {
		if (this.length == 0) return false;
		let parentNode = Utils.normalizeElements(parent);
        this._setOptions(parentNode, options as ObjKSt);
		return this.each((el) => {
			_$(parentNode).each((p, pI) => {
				if (el === p) return;
				_$(p).prepend(pI == 0 ? (p as Element) : (p.cloneNode(true) as Element))
			})
		})
	}
	/**
	 * Clona el elemento seleccionado
	 * @param  {boolean}  [deep = false] Indica si se clona todas sus hijos
	 * @return {Fascino}
	 */
	clone(deep: boolean = false): Fascino {
		let res: Element[] = []
		this.each((el) => { res.push((el as Element).cloneNode(deep) as Element) })
		return Utils.concat(_$().node, res);
	}
	/**
	 * Crea una copia de un nodo desde un documento externo
	 * @param  {boolean}  [deep = true]  Indica si se copian sus hijos
	 * @return {Fascino}
	 */
	import(deep: boolean = true): Fascino {
		let res: Element[] = []
		this.each((el) => { res.push(document.importNode(el, deep)) })
		return Utils.concat(_$().node, res)
	}
	/**
	 * Transfiere un node desde otro document al documento del método
	 * @return {Fascino}
	 */
	adopt(): Fascino {
		let res: Element[] = []
		this.each((el) => { res.push(document.adoptNode(el)) })
		return Utils.concat(_$().node, res)
	}
	/**
	 * Obtiene el contenido de un Iframe o Template
	 * @return {Fascino} 
	 */
	contents(): Fascino {
		if (this.length == 0) return this;
		let res: Element[] = []
		this.each((el) => {
			let content
			if (el.nodeName === 'IFRAME') { 
				content = (el as unknown as HTMLIFrameElement ).contentDocument
			} else if (el.nodeName === 'TEMPLATE') {
				content = (el as unknown as HTMLTemplateElement).content
			}
			res.push(content)
		})
		return Utils.concat(_$().node, res)
	}
	/**
	 * Obtiene el o los padres de un elemento
	 * @param  {string}  [selectorParent] Selector padre
	 * @return {Fascino} 
	 */
	parents(selectorParent?: string): Fascino {
		const parent: Element[] = []
		this.each((el) => {
			let ancestor: Element = el.parentNode as Element
			while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE) {
				if (!Utils.isNil(selectorParent) && ancestor.matches(selectorParent as string)) parent.push(ancestor)
				ancestor = ancestor.parentNode as Element
			}
		})
		return _$(parent)
	}
	/**
	 * Padre del Elemento
	 * @return {Fascino}
	 */
	parent(): Fascino {
		const parents: ParentNode[] = []
		this.each((el) => parents.push(el.parentNode as ParentNode)) 
		return _$(parents as Element[])
	}
	/**
	 * Obtiene o busca el hermano anterior
	 * @param  {string}     [selector] El Selector
	 * @return {Array<any>}          [description]
	 */
	prev(selector?: string): Array<any> | Fascino {
		let previous: Element = (this.first as Element).previousElementSibling as Element
		if (Utils.isNil(selector)) return _$(previous)
		while(previous) {
			if (previous.matches(selector as string)) return _$(previous)
			previous = previous.previousElementSibling as Element
		}
		return []
	}
	/**
	 * Obtiene o busca el hermano siguiente
	 * @param  {string}     [selector] El Selector
	 * @return {Array<any>}
	 */
	next(selector?: string): Array<any> | Fascino {
        let next: Element = (this.first as Element).nextElementSibling as Element
		if (Utils.isNil(selector)) return _$(next)
		while (next) {
			if (next.matches(selector as string)) return _$(next)
			next = next.nextElementSibling as Element
		}
		return []
	}
	/**
	 * Busca el ascendiente más cercano al elemento seleccionado
	 * @param  {string}    [selector]  El Selector
	 * @return {Element[] | Fascino}
	 */
	closest(selector?: string): Element[] | Fascino {
		if (this.length == 0) return this;
		if (Utils.isNil(selector)) return this.parent()
		const res: Element[] = []
		this.each((el) => {
			if ("closest" in el) { res.push(el.closest(selector as string) as Element) }
			else {
				while(el) {
					if (!el) break;
					if (el.matches(selector as string)) {
						res.push(el); 
						return;
					}
					el = el.parentElement as Element
				}
			}
		})
		return res;
	}
	/**
	 * Inserta un elemento antes del elemento seleccionado
	 * @param  {string | Element}     elements Los Elementos
	 * @return {Fascino}
	 */
	insertBefore(elements: string | Element): Fascino {
		let _el = _$(elements)
		return this.each((el) => {
			_el.each((_e, i) => {
				if (_e === el) return;
				let p = _e.parentNode
				if(p) {
					p.insertBefore(
						i === 0 ? el : el.cloneNode(true),
						_e
					)
				}
			})
		})
	}
	/**
	 * Inserta un elemento después del elemento seleccionado
	 * @param  {string | Element}  elements Elementos a insertar
	 * @return {Fascino}
	 */
    insertAfter(elements: string | Element): Fascino {
		let _el = _$(elements)
		return this.each((el) => {
			_el.each((_e, i) => {
				if (_e === el) return;
				let p = _e.parentNode
				if (p) {
					p.insertBefore(
						i === 0 ? el : el.cloneNode(true),
						_e.nextSibling
					)
				}
			})
		})
	}
	/**
	 * Encierra un elemento
	 * @param  {Element | ParentNode    | string} parent El padre
	 * @return {Fascino} 
	 */
	wrap(parent: Element | ParentNode | string): Fascino {
		if (this.length == 0) return this;
		const parentNode = _$(Utils.normalizeElements(parent))
		if (!parentNode.length || parentNode.length == 0) return this;
		let res: Element[] = []
		this.each((el) => {
			let _wrapper = _$(parentNode.clone(true) as unknown as ArgSel)
			_wrapper.insertBefore(el)
			let _target = _wrapper
			while(_target.children().length) {
				_target = _$(_target.children()).getfirst()
			}
			_target.append(el as HTMLElement)
			res.push(..._$(_wrapper.first).node)
		})
        return Utils.assignIn(_$().node, res)
	}
	/**
	 * Busca y encierra todos los elemento del tipo dado
	 * @param  {HTMLElement | Element | string} el El Elemento
	 * @return {Fascino}
	 */
	wrapAll(el: HTMLElement | Element | string): Fascino {
		if (this.length == 0) return this;
		let wrapper = _$(Utils.normalizeElements(el));
		if (!wrapper.length || wrapper.length == 0) return this;
		let _wrapper = _$(wrapper.clone(true) as unknown as ArgSel)
		_wrapper.insertBefore(this.first as Element)
		let _target = _wrapper
		while (_target.children().length) {
			_target = _$(_target.children()).getfirst()
		}
		this.each((e) => {  _target.append(e as HTMLElement) })
		return _wrapper
	}
	/**
	 *  Desencierra los elemento
	 * @return {Fascino}
	 */
	unwrap(): Fascino {
		return this.each((el) => {
			let p: ParentNode = el.parentNode as ParentNode
			while (el.firstChild) {
				p?.insertBefore(el.firstChild, el)
			}
			p?.removeChild(el)
		})
	}
	/**
	 * Elimina uno o todos los elementos del DOM
	 * @param  {string}  [selector] el selector a buscar para eliminar
	 * @return {Fascino}
	 */
	remove(selector?: string): Fascino {
		let out: Element[] = Utils.isNil(selector) ?
			this.node.filter(el => el.matches(selector as string)) :
			this.node;
		let res: Element[] = []
		out.forEach((el) => {
			res.push(
				(el.parentNode as ParentNode).removeChild(el) as Element
			)
		})
		return _$([...this.node, ...res])
	}
	/**
	 * Agrega un elemento o etiquetas HTML después del elemento dado
	 * @param  {string | Element | HTMLElement} html El Elemento o Etiqueta HTML
	 * @param  {InsertPosition} [position = 'afterbegin'] Posición a insertar
	 * @return {Fascino} 
	 */
	after(html: string | Element | HTMLElement, position: InsertPosition = 'afterbegin'): Fascino {
		return this.each((el) => {
			if (Utils.isString(html)) {
				el.insertAdjacentHTML(position, html as string)
			} else {
				_$(html).insertAfter(el)
			}
		})
	}
	/**
	 * Agrega un elemento o HTML antes del elemento dado
	 * @param  {string | Element | HTMLElement} html La etiqueta HTML o element
	 * @param  {InsertPosition} [position = 'beforebegin'] Posición de elemento
	 * @return {Fascino} 
	 */
	before(html: string | Element | HTMLElement, position: InsertPosition = 'beforebegin'): Fascino {
		return this.each((el) => {
			if (Utils.isString(html)) {
				el.insertAdjacentHTML(position, html as string)
			} else {
				_$(html).insertBefore(el)
			}
		})
	}
	/**
	 * Obtiene o Establece el texto al elemento seleccionado
	 * @param  {string} [txt] El texto a establecer o undefined para obtener
	 * @return {string | Fascio} el texto del elemento
	 */
	text(txt?: string): string | Fascino {
		if (Utils.isNil(txt)) return this._prop("textContent")
		return this._prop("textContent", txt)
	}
	/**
	 * Obtiene o Establece el contenido HTML del elemento seleccionado
	 * @param  {string | Element | Fascino | any[]} [txt] El texto 
	 * @return {string}
	 */
	html(txt?: string | Element | Fascino | any[]): string | Fascino {
		if (this.length == 0) return this;
		let value: any[] = []
		if (Utils.isNil(txt)) return this._prop("innerHTML")
		if (Utils.isEmpty(txt) || txt === "" || txt === '') return this._prop("innerHTML", '')
		if (Utils.isArray(txt)) {
			value = [...value, ...txt as any]
		} else if(Utils.isElement(txt) || Utils.isFascinoElement(txt)) {
			let res: string[] = [],
				h: Fascino = Utils.isFascinoElement(txt as Fascino) ? txt as Fascino : _$(txt as Element);
			h.each((v) => {
				res.push(_$(v).outerHTML() as string)
			})
			value = [...value, ...txt as any]
		} else {
			value.push(txt)
		}
		this._prop("innerHTML", 
			value.length === 1 && Utils.isEmpty(value[0]) ? '' : value.join('\n')
		)
		return this;
	}
	/**
	 * Obtiene o Establece el valor de un elemento dado
	 * @param  {string}  [value]  El valor a asignar
	 * @return {Fascino | string}
	 */
	val(value?: string): Fascino | string {
		if (this.length == 0) return this;
		if (Utils.isNil(value)) return this._prop('value');
		return this.each((el) => {
			if (Utils.isNil((el as HTMLInputElement).value)) {
				(el as HTMLInputElement).value = value as string
			} else {
				_$(el).html(value)
			}
		})
	}
	/**
	 * Obtiene el HTML o envoltura del elemento dado
	 * @param  {boolean}       [withElement = false] Indica si se retorna como elemento
	 * @return {Fascino | string}
	 */
	outerHTML(withElement: boolean = false): Fascino | string {
		let out = this._prop("outerHTML")
		return withElement ? _$(out) : out
	}
	/**
	 * Agrega clases al elemento dado
	 * 
	 * @example
	 * ```Javascript
	 * _$(mi-elem).addClass('miclass')
	 * _$(mi-elem).addClass('miclass1', 'miclass2' /*...*\)
	 * ```
	 * 
	 * @param {...String} arg Lista de clases separadas por coma(,)
	 * @return {Fascino}
	 */
	addClass(...arg: string[]): Fascino {
		return this.each((e) => {
			e.classList.add(...arg)
		})
	}
	/**
	 * Elimina Clases del elemento seleccionado
	 * @param  {...String} args
	 * @return {Fascino}
	 */
	removeClass(...args: string[]): Fascino {
		return this.each((e) => {
			e.classList.remove(...args)
		})
	}
	/**
	 * Intercambia clases del elemento dado
	 * @param  {...String} args Lista de Clases a cambiar
	 * @return {Fascino}
	 */
	toggleClass(...args: string[]): Fascino {
		return this.each((e) => {
			Utils.each(args, (a) => e.classList.toggle(a))
		})
	}
	/**
	 * Reemplaza una clase por otra
	 * 
	 * @example
	 * ```Javascript
	 * _$("#miElement").replaceClass('oldClass', 'NewClass')
	 * ```
	 * 
	 * @param  {string} oldClass Clase vieja 
	 * @param  {string} newClass Clase nueva
	 * @return {Fascino}
	 */
	replaceClass(oldClass: string, newClass: string): Fascino {
		return this.each((e) => {
			e.classList.replace(oldClass, newClass)
		})
	}
	/**
	 * Verifica si el elemento posee una clase
	 * @param  {String}  className Nombre de la clase
	 * @return {Boolean} Verdadero si existe
	 */
	hasClass(className: string): boolean {
		return (this.first as Element).classList.contains(className)
	}
	/**
	 * Agrega u Obtiene estilos CSS a los Elementos
	 *
	 * @example
	 * ```Javascript
	 * let miElement = _$("#myEl")
	 * miElement.style('display', 'none') // establece la propiedad CSS a display none
	 * miElement.style({
	 *   border: '1px solid #ff0' // Establece un border Amarillo
	 *   color: '#000' // y un color de texto Negro
	 * })
	 * miElement.style('display') // retorna none
	 * miElement.style() // Retorna todos los Estilos establecidos(CSSStyleDeclaration)
	 * miElement.style([
	 *   'border', 'color' // Retorna un Objecto {IDfromMiElem: {border: '1px solid #ff0', color: '#000'}}
	 * ]) // Importante: si el elemento no tiene ID se le creara uno aleatorio
	 * ```
	 * 
	 * @param  {...any} [arg]
	 * @return {Fascino | Object | string | any[]}
	 */
	style(...arg: any): Fascino | Object | string | any[] {
		if (this.length === 0) return this

		if (arg.length === 0) return Utils.getStyleComputed(this.first)

		if (arg.length === 1) {
			if (Utils.isArray(arg[0])) {
				let getStyle: ObjAny = {}, 
					i: number = 0
				this.each((el) => {
					let id: any = el.getAttribute('id'),
						prefix = !Utils.isNil(id) ? id : el.tagName + i
					getStyle[prefix] = {}
					arg[0].forEach( (nameStyle) => {
						getStyle[prefix][nameStyle] = (el as HTMLElement).style[nameStyle]
					})
					i++
				})
				return getStyle
			} else if (Utils.isObject(arg[0])) {
				return this.each((el) => {
					Utils.each(arg[0] as ObjAny, (value, key) => {
						(el as HTMLElement).style.setProperty(key, value)
					})
				})
			} else if (arg[0].indexOf(':') === 0) {
				return Utils.getStyleComputed(this.first, undefined, arg[0])
			} else if (arg[0] === '*' || arg[0] === 'all') {
				return Utils.getStyleComputed(this.first)
			} else {
				let st = Utils.getStyleComputed(this.first)
				return arg[0] in st ? st[arg[0]] : ''
			}
		}

		if (arg.length === 2 || arg.length === 3) {
			return this.each((el) => {
				(el as HTMLElement).style.setProperty(arg[0], arg[1], arg[2] || undefined)
			})
		}

		return this
	}
	/**
	 * Remueve todos o los estilos establecidos
	 * 
	 * @example
	 * ```Javascript
	 * _$("#miElement").removeStyle('border', 'color') // Removerá los estilos del border y el color
	 * ```
	 * 
	 * @param  {...string} name Lista de Estilo
	 * @return {Fascino}
	 */
	removeStyle(...name: string[]): Fascino {
		if (Utils.isNil(name) || this.length === 0) return this;

		return this.each((el) => {
			name.forEach((n) => {
				(el as HTMLElement).style.removeProperty(n)
			})
		})
	}
	/**
	 * Obtiene o estable el valor de la barra de desplazamiento vertical
	 * @param  {string| number} [val] El valor del Scroll
	 * @return {string | number | Fascino}
	 */
	scrollTop(val?: string | number): string | number | Fascino {
		if (this.length === 0) return this;

		if (Utils.isNil(val)) {
			return this.first === window ? 
				window.pageYOffset : 
				(this.first as Element).scrollTop
		}

		return this.each((el) => {
			el.scrollTop = val as number
		})
	}
	/**
	 * Obtiene o estable el valor de la barra de desplazamiento Horizontal
	 * @param  {string| number} [val] El Valor del scroll
	 * @return {string| number| Fascino}
	 */
	scrollLeft(val?: string | number): string | number | Fascino {
		if (this.length === 0) return this;

		if (Utils.isNil(val)) {
			return this.first === window ? 
			window.pageXOffset : 
			(this.first as Element).scrollLeft
		}

		return this.each((el) => {
			el.scrollLeft = val as number
		})
	}
	/**
	 * Obtiene o Establece el Ancho total del elemento
	 * @param  {string | number} [val] Ancho del Elemento
	 * @return {string | number| Fascino}
	 */
	outerWidth(val?: string | number): string | number | Fascino {
		return this._sizeOut('width', val)
	}
	/**
	 * Obtiene o Establece la Altura total del elemento
	 * @param  {string | number} [val]
	 * @return {string | number| Fascino)}
	 */
	outerHeight(val?: string | number): string | number | Fascino {
		return this._sizeOut('height', val)
	}
	/**
	 * Obtiene o Establece la posición del Elemento
	 * @param  {OffSetObj} [val] Objeto {top,left}
	 * @return {OffSetObj | Fascino}
	 */
	offset(val?: OffSetObj): OffSetObj  | Fascino {
		if (this.length === 0) return this

		if (Utils.isNil(val)) {
			const rect = (this.first as Element).getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop
			return {
				top: rect.top + scrollTop,
				left: rect.left + scrollLeft
			}
		}

		return this.each((el) => {
			let offset = _$(el).offset() as OffSetObj,
				top: number = (val as OffSetObj).top as number,
				left: number = (val as OffSetObj).left as number,
				position = Utils.getStyleComputed(el).position

			if (position === 'static') {
				_$(el).style('position', 'relative')
			}

			if (['absolute', 'fixed'].indexOf(position) === -1) {
				top = top - (offset.top as number)
				left = left - (offset.left as number)
			}

			_$(el).style({
				top: top,
				left: left
			})
		})
	}
	/**
	 * Obtiene la Posición del elemento
	 * @param  {boolean} [margin = false] Verdadero si se incluye el margen
	 * @return {OffSetObj | Undefined}
	 */
	position(margin: boolean = false): OffSetObj | undefined {
		if (this.length === 0) return undefined

		if (typeof margin != 'boolean') {
			try {
				margin = JSON.parse(margin)
			} catch (e) {
				margin = false
			}
		}

		let ml = 0, mt = 0

		if (margin) {
			let s = Utils.getStyleComputed(this.first)
			ml = parseInt(s['margin-left'])
			mt = parseInt(s['margin-top'])
		}

		return {
			top: (this.first as HTMLElement).offsetTop - mt,
            left: (this.first as HTMLElement).offsetLeft - ml
		}
	}
	/**
	 * Obtiene o Establece la posición horizontal del elemento
	 * @param  {string | number}  [v] Nueva posición
	 * @param  {boolean} [m = false] Si se debe incluir el margen
	 * @return {string | number}
	 */
	left(v?: string | number, m: boolean = false): string | number {
		if (this.length === 0) return NaN
		if (typeof v === 'boolean') {
			m = v
			v = undefined
		}
		if (Utils.isNil(v)) {
			return (this.position(m) as OffSetObj).left as number
		}

		return this.style('left', !isNaN(v as number) ? v + 'px' : v) as string
	}
	/**
	 * Obtiene o Establece la posición vertical del elemento
	 * @param  {string| number}  [v] Nueva posición
	 * @param  {boolean} [m = false] Si se debe incluir el margen
	 * @return {string | number}
	 */
	top(v?: string | number, m: boolean = false): string | number {
		if (this.length === 0) return NaN
		if (typeof v === 'boolean') {
			m = v
			v = undefined
		}
		if (Utils.isNil(v)) {
			return (this.position(m) as OffSetObj).top as number
		}

		return this.style('top', !isNaN(v as number) ? v + 'px' : v) as string
	}
	/**
	 * Obtiene el Ancho interno del elemento
	 * @return {number}
	 */
	innerWidth(): number {
		return this.first === window ? 
		window.innerWidth : (this.first as Element).clientWidth
	}
	/**
	 * Obtiene el Alto interno del elemento
	 * @return {number}
	 */
	innerHeight(): number {
		return (this.first as Element).clientHeight
	}
	/**
	 * Obtiene o establece la altura del elemento
	 * @param  {number | string} [val]
	 * @return {number | string| Fascino}
	 */
	height(val?: number | string): number | string | Fascino {
		return this._size('height', val)
	}
	/**
	 * Obtiene o establece la anchura del elemento
	 * @param  {number | string} [val]
	 * @return {number | string | Fascino}
	 */
	width(val?: number | string): number | string | Fascino {
		return this._size('width', val)
	}
	/**
	 * Oculta un ELemento y ejecuta la función dada
	 * @param  {ShowHideFn} [callback]
	 * @return {Fascino}
	 */
	hide(callback?: ShowHideFn): Fascino {
		return this.each((el) => {
			let display: string = _$(el).style('display') as string,
				opacity: string = _$(el).style('opacity') as string

			if (display != 'none' && parseInt(opacity) != 0) {
				_$(el).data('display', display)
				_$(el).data('opacity', opacity)

				_$(el).style({
					display: 'none',
					opacity: 0
				})
			}
			if (Utils.isFunction(callback)) {
				(callback as ShowHideFn).call(this, el)
			}
		})
	}
	/**
	 * Muestra un elemento y ejecuta la función dada
	 * @param  {ShowHideFn} [callback]
	 * @return {Fascino}
	 */
	show(callback?: ShowHideFn): Fascino {
		return this.each((el) => {
			let display = _$(el).data('display') || "block",
				opacity = _$(el).data('opacity') || 1,
				setDisplay = 'block', setOpacity = 1

			if (display && display !== 'none') {
				setDisplay = display
			}
			if (opacity && opacity !== 0) {
				setOpacity = opacity
			}

			_$(el).style({
				display: setDisplay,
				opacity: setOpacity
			})

			if (Utils.isFunction(callback)) {
				(callback as ShowHideFn).call(this, el)
			}
		})
	}
	/**
	 * Muestra un elemento con desvanecimiento suave
	 * @memberOf Fascino
	 * @public
	 * @param  {ShowHideFn} [fn]   Funcion a ejecutar despues del efecto
	 * @param  {number}   [time = 600] Tiempo del desvanecimiento
	 * @return {Fascino} 
	 */
	fadeIn(fn?: ShowHideFn | number, time: number = 600): Fascino {
		this.style({
			opacity: 0,
			display: ''
		})

		if (Utils.isNumber(fn)) {
			time = fn as number
			fn = new Function() as ShowHideFn
		}

		let last = +new Date(),
            element: HTMLElement = this.first as HTMLElement,
			view = () => {
				this.style('opacity', 
					+element.style.opacity + (+new Date() - last) / time)
				last = +new Date()

				if (+element.style.opacity < 1) {
					(Utils.has(window, "requestAnimationFrame") && requestAnimationFrame(view)) || setTimeout(view, 16)
				}
			}

		view()
		if (Utils.isFunction(fn)) {
			(fn as ShowHideFn).call(this, element)
		}
		return this;
	}
	/**
	 * Funcion que Oculta con un desvanecimiento suave
	 * @memberOf Fascino
	 * @public
	 * @param  {number | ShowHideFn} [fn]   Función a ejecutar luego de ocultar
	 * @param  {number}   [time = 600] Tiempo del desvanecimiento
	 * @return {Fascino}
	 */
	fadeOut(fn?: number | ShowHideFn, time: number = 600): Fascino {
		this.style({
			opacity: 1,
			display: ''
		})
		var last = +new Date(),
            element: HTMLElement = this.first as HTMLElement,
			view = () => {
				element.style.opacity = Number(+element.style.opacity - (+new Date() - last) / time).toFixed(4);
				last = +new Date()

				if (-element.style.opacity <= 0) {
					(Utils.has(window, "requestAnimationFrame") && requestAnimationFrame(view)) || setTimeout(view, 16)
				}
			}
		view()
		if (Utils.isFunction(fn)) {
			(fn as ShowHideFn).apply(this, [element])
		}
		return this;
	}
	/**
	 * Obtiene o Establece los Atributos de un elemento
	 * 
	 * @example
	 * ```Javascript
	 * let miElement = _$("input")
	 * miElement.attr('name', 'paswd') // Establece el Atributo Name a passwd
	 * miElement.attr({
	 *   id:'miElementID', // Establece el Id a miElementID y cambia el placeholder
	 *   placeholder:'Escribe Aquí'
	 * })
	 * miElement.attr() // Re-establece los Atributos y retorna un NodeMap con ellos en caso de no poseer atributos retornara un Objecto Fascino
	 * miElement.attr('name') // Retorna 'passwd' o false
	 * miElement.attr(['name', 'id']) // Retorna un objecto {miElementID: {name: 'passwd', id:'miElementID'}}
	 * // Ademas podemos pasar una función que se invocara dentro de un bucle que recorre los atributos
	 * miElement.attr( function(attrName, attrValue, Attr) {
	 *   console.log(
	 *       this, // El Elemento iterado
	 *       attrName, // El nombre del atributo
	 *       attrValue, // El Valor del Attributo
	 *       Attr // Lista de todos los atributos
	 * )
	 * })
	 * ```
	 * 
	 * @param  {...any[]} args
	 * @return {*}
	 */
	attr(...args: any[]): any {
		if (this.length === 0) return this
		if (args.length === 0) {
			if ((this.first as Element).hasAttributes()) {
				const Attr: NamedNodeMap = (this.first as Element).attributes
				Array.from(Attr).forEach((a) => {
					(this.first as Element).setAttribute(a.nodeName, a.nodeValue as string)
				})
				return Attr
			} else {
				return this
			}
		}
		if (args.length === 1) {
			if (Utils.isArray(args[0])) {
				const Attrs = {}
				let i = 0
				this.each((el) => {
					let id: string = el.getAttribute('id') as string,
						prefix: string = !Utils.isNil(id) ? id : el.tagName + i
					Attrs[prefix] = {}
					args[0].forEach((a) => {
						if (el.hasAttribute(a)) {
							Attrs[prefix][a] = el.getAttribute(a)
						} else {
							Attrs[prefix][a] = false
						}
					})
					i++
				})
				return Attrs
			} else if (Utils.isObject(args[0])) {
				return this.each((el) => {
					for (let key in args[0]) {
						if (Utils.has(args[0], key)) {
							let value = Utils.normalizeData(args[0][key])
							if (key in el) {
								el[key] = value
							} else {
								el.setAttribute(key, value)
							}
						}
					}
				})
			} else if (Utils.isString(args[0])) {
				return (this.first as Element).hasAttribute(args[0]) ? (this.first as Element).getAttribute(args[0]) : false
			} else if (Utils.isFunction(args[0])) {
				return this.each((el) => {
					if (el.hasAttributes()) {
						let a: NamedNodeMap = el.attributes
						Array.from(a).forEach((attr) => {
							args[0].call(el, [attr.nodeName, attr.nodeValue, attr])
						})
					}
				})
			}
		}

		return this.each((el) => {
			let key = args[0],
				value = Utils.normalizeData(args[1])
			if (key in el) {
				el[key] = value
			} else {
				el.setAttribute(key, value)
			}
		})
	}
	/**
	 * Remueve los atributos dados
	 * @example
	 * ```Javascript
	 * _$("#miElement").removeAttr('style', 'name')
	 * ```
	 * 
	 * @param  {...String} args Lista de Atributos
	 * @return {Fascino}
	 */
	removeAttr(...args: string[]): Fascino {
		return this.each((el) => {
			let attrs: string[] = []
			if (args.length == 1 && !Utils.isArray(args[0])) {
				attrs.push(args[0])
			} else {
				attrs = [...args]
			}

			attrs.forEach((a) => {
				el.removeAttribute(a)
			})
		})
	}
	/**
	 * Verifica si el elemento tiene el atributo dado
	 * @param  {string}  attr
	 * @return {boolean}
	 */
	hasAttr(attr: string): boolean {
		if (Utils.isNil(attr)) return false

		return (this.first as Element).hasAttribute(attr)
	}
	/**
	 * Alterna los Atributos y su valor
	 * @param  {string} name  Nombre del Atributo
	 * @param  {string} [value] Valor d el Atributo
	 * @return {Fascino}
	 */
	toggleAttr(name: string, value?: string): Fascino {
		let _this = this
		return this.each((el) => {
			if (name in el && el[name] !== value) {
				el[name] = value
			}
			if (!Utils.isEmpty(name) && Utils.isNil(value)) {
				if (el.hasAttribute(name)) {
					el.removeAttribute(name)
				}
			} else {
				_this.node = [el]
				_this.attr(name, value)
			}
		})
	}
	/**
	 * Elimina todos los atributos de un elemento
	 * @return {Fascino}
	 */
	cleanAttr(): Fascino {
		return this.each((el) => {
			if (el.hasAttributes()) {
				let attr: NamedNodeMap = el.attributes
				Array.from(attr).forEach((a) => {
					el.removeAttribute(a.nodeName)
				})
			}
		})
	}

	/**
	 * Establece u Obtiene los datos del Elemento Dataset
	 * @example
	 * ```Javascript
	 * let miElement = _$("#div")
	 * miElement.data('role', 'dialog')  // Establece el Rol a dialog
	 * // Esteble al data-json al objecto dado
	 * miElement.data({
	 *   json:{
	 *      a: 1,
	 *      b: 2
	 * }
	 * })
	 * miElement.data() // Retorna un Objecto con todos los datos del Atributo data
	 * miElement.data('role') // Retorna Dialog
	 * miElement.data(['role','json']) // Retornara un Objecto {miElementID: {role: 'dialog', json: {a:1,b:2}}}
	 * ```
	 * 
	 * @param  {...any[]} args
	 * @return {any}
	 */
	data(...args: any[]): any {
		return this.length === 0 ? 
			this : 
		this._ds.data(this.node as HTMLElement[], ...args)
	}
	/**
	 * Remueve los Atributos data
	 * @example
	 * ```Javascript
	 * // <input id="miElement" data-role='pick' data-color="#fff">
	 * _$('#miElement').removeData('role', 'color');
	 * // Obtendremos
	 * // <input id="miElement">
	 * ```
	 * 
	 * @param  {...string} keys Lista de nombres de data sin el data
	 * @return {Fascino}
	 */
	removeData(...keys: string[]): Fascino {
		return this.each((el) => {
			Utils.each(keys, (key) => this._ds.remove(el, key))
		})
	}
	/**
	 * Verifica si el Elemento tiene un atributo data dado
	 * @param  {string}  key Nombre sin el data
	 * @return {boolean}
	 */
	hasData(key: string): boolean {
		if (!Utils.isNil(key)) return false

		if (this._ds.has((this.first as HTMLElement), key)) {
			return true
		}

		if (Utils.isNil((this.first as HTMLElement).dataset, key)) {
			return true
		}

		return this.hasAttr(`data-${key}`)
	}
	/**
	 * Alterna entre los atributos data
	 * @param  {string} name  Nombre del Atributo sin el data
	 * @param  {string | ObjAny | string[]} value Valor del atributo data
	 * @return {any}
	 */
	toggleData(name: string, value: string | ObjAny | string[]): any {
		if (arguments.length === 0) return false

		if (this.hasData(name)) {
			return this._ds.access((this.first as HTMLElement), name, value)
		}

		return this.toggleAttr(`data-${name}`, value as string)
	}
	/**
	 * Establece el Evento para un elemento<br>
	 * Si va usar eventos estándar es mejor que use los de la lista `_$().click(), $().blur() ...`
	 * @param  {(string|string[])} eventsList El nombre del Evento
	 * @param  {string | Function} sel Namespace o selector
	 * @param  {Function} [handler] Función a ejecutar
	 * @param  {ObjAny | boolean} [options = false] Opciones de AddEventListiner
	 * @return {Fascino}
	 */
	on(eventsList: string | string[], sel: string | Function, handler?: Function, options: ObjAny | boolean = false): Fascino {
		return this.each((el) => {
			this._ev.on(el, eventsList, sel, handler, options)
		})
	}
	/**
	 * Desvincula el Evento para un elemento
	 * @param  {string | string[]} eventsList El nombre del Evento
	 * @param  {string} [sel] Namespace o selector
	 * @param  {number | ObjAny} [options] Opciones de AddEventListiner
	 * @param  {number} [ix = 0] Index del evento
	 * @return {Fascino}
	 */
	off(eventsList: string | string[], sel?: string, options?: number | ObjAny, ix: number = 0): Fascino {
		return this.each((el) => {
			this._ev.off(el, eventsList, sel, options, ix)
		})
	}
	/**
	 * Ejecuta el evento solo para el primer evento dado
	 * @param  {string | string[]} events  El evento
	 * @param  {string | Function} sel Namespace o selector
	 * @param  {Function} handler Función a ejecutar
	 * @param  {ObjAny} [options] Opciones de AddEventListiner
	 * @return {Fascino}
	 */
	one(events: string | string[], sel: string | Function, handler: Function, options?: ObjAny): Fascino {
		return this.each((el) => {
			this._ev.once(el, events, sel, handler, options)
		})
	}
	/**
	 * Dispara o Crea un Evento Personalizado
	 * @param  {string} name Nombre del Evento
	 * @param  {ObjAny} [data] Información del Evento
	 * @return {Fascino}
	 */
	fire(name: string, data?: ObjAny): Fascino {
		let _name: string = Utils.normName(name) as string, newEv

		if(['submit', 'reset'].indexOf(_name) > -1){
			if((this.first as Element).nodeName === 'FORM'){
                (this.first as Element)[_name].call(this.first)
			} else {
                let form = this.parents('form').first as HTMLFormElement
				(this.first as Element)[_name].call(form.first)
			}
			return this
		}

		if (this._ev.List.indexOf(_name) > -1 && Utils.has(this.first, _name) && Utils.isFunction(this.first, _name)) {
            (this.first as Element)[_name].call(this.first)
		}

		newEv = this._ev.create(name, data)

		return this.each((el) => {
			let customEvent = _$(el).data('customEvent'),
				et = {}

			et[_name] = newEv
			if(Utils.isNil(customEvent)) {
				_$(el).data('customEvent', et)
			} else {
				_$(el).data('customEvent', Utils.assignIn({}, customEvent, et))
			}
			this._ev.fire(el, newEv)
		})
	}
	/**
	 * Dispara un evento
	 * @param  {string} name Nombre del Evento
	 * @param  {ObjAny} [data] Información del evento
	 * @return {Fascino}
	 */
	trigger(name: string, data?: ObjAny): Fascino {
		var _name: string = Utils.normName(name)
		return this.each((el) => {
			if (this._ev.List.indexOf(_name) > -1) {
				el[_name].call(el)
			} else if(_$(el).hasData('customEvent') ){
				let customEvent = _$(el).data('customEvent')
				if(!Utils.isNil(customEvent) && Utils.has(customEvent, _name)){
					this._ev.fire(el, customEvent[_name])
				} else {
					_$(el).fire(name, data)
				}
			}
		})
	}
	/**
	 * Crea el evento hover
	 * @param  {function} fnOver Función de entrada
	 * @param  {function} fnOut  Función de Salida
	 * @return {Fascino}
	 */
	hover(fnOver: (ev: Event) => any, fnOut: (ev: Event) => any): Fascino {
		return this.each((_el) => {
			this.on('mouseenter', fnOver)
				.on('mouseleave', fnOut)
		})
	}
	/**
	 * Obtiene las lista de eventos asignados aun elemento, si no se pasa ningun argumento se obtendran todos los eventos
	 * @param  {string} name  Nombre del Evento
	 * @param  {number} [index = -1] Posición del evento a buscar
	 * @return {any}
	 */
	getEvent(name: string, index: number = -1): any {
		return this._ev.get_event((this.first as Element), name, index)
	}
}

const ev = new FsEvent()
const a = ['padding', 'margin', 'border']

a.forEach((name) => {
	Fascino.prototype[name] = function(this: Fascino, val, pseudo) {
		if (this.length === 0)  return
		if (Utils.isString(val)) {
			if (val.indexOf(':') === 0) {
				pseudo = val
				val = undefined
			}
		}

		if (Utils.isNil(val)) {
			let s = Utils.getStyleComputed(this.first, null, !Utils.isNil(pseudo) ? pseudo : ''),
				res = {}
			if (name !== 'border') {
				res = {
					top: parseInt(s[`${name}-top`]),
					right: parseInt(s[`${name}-right`]),
					bottom: parseInt(s[`${name}-bottom`]),
					left: parseInt(s[`${name}-left`]),
				}
			} else {
				res = {
					top: parseInt(s['border-top-width']),
					right: parseInt(s['border-right-width']),
					bottom: parseInt(s['border-bottom-width']),
					left: parseInt(s['border-left-width'])
				}
			}
			return res
		}

		return this.each((el) => {
			if (Utils.isArray(val)) {
				_$(el).style(name, val.join(' '))
			} else if (Utils.isObject(val)) {
				let res = {},
					ext = name === 'border' ? '-width' : ''
				for (let i in val) {
					if (Utils.has(val, i)) {
						res[`${name}-${i}${ext}`] = val[i]
					}
				}
				_$(el).style(res)
			} else {
				_$(el).style(name, val)
			}
		})
	}
})

/**
 * Eventos Nativos de Javascript <br>
 * 'blur', 'focus', 'resize', 'scroll', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove',
 * 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change', 'select', 'submit', 'keydown',
 * 'keypress', 'keyup', 'contextmenu', 'touchstart', 'touchend', 'touchmove', 'touchcancel'
 * @example <caption>Uso</caption>
 * // Formato
 * // _$(miselector).[nameEvento](selector, function, options)
 * _$('body').clicK(function(e){
 *     console.log("Presionastes sobre el body")
 * })
 * // Al hacer doble click sobre una section del elemento main, se ejecuta la funcion del click del body
 * _$('main').dblclick("section", function(e){
 *         _$('body').click()
 * })
 * @param  {String} s selector
 * @param  {Function} f Función a ejecutar
 * @param  {Object} o Opciones de AddEventListiner
 * @return {Fascino}
 */
ev.List.forEach((n) => {
	Fascino.prototype[n] = function(this: Fascino, s, f, o) {
		return arguments.length > 0 ? this.on(n, s, f, o) : this.fire(n, { detail: 'Fire ' + n })
	}
})

export { Data, FsEvent, Selector }