/** @module DOM/Event */
import Data from "./Data";
import Utils from "../Utils";
/**
 * Lista de Eventos
 * @private
 * @type {string[]}
 */
const ListEvents: string[] = [
	'blur', 'focus', 'resize', 'scroll', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove',
	'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change', 'select', 'submit', 'keydown',
	'keypress', 'keyup', 'contextmenu', 'touchstart', 'touchend', 'touchmove', 'touchcancel'
]
/**
 * @class
 * @classdesc Manejador de Eventos
 * @requires DOM/Data.Data
 * @requires Utils
 */
export default class FsEvent {
    /** @type {Data} */
	private _dt: Data
    /**
     * Nombre del Evento dentro del Elemento
     * @type {string}
     */
	readonly KEY: string = "FsEvent"
    /**
     * Lista de Eventos Javascript
     * @type {string[]}
     */
    readonly List: string[] = ListEvents
    /**
     * Inicializa los Eventos
     */
	constructor() {
		this._dt = new Data(this.KEY);
	}
    /**
     * Activa un Escucha
     * @private
     * @param {Element}  el  El Elemento
     * @param {keyof ElementEventMap} type  Tipo o nombre del Evento
     * @param {Function}   fn Función del Escucha
     * @param {boolean | AddEventListenerOptions | undefined } [useCapture = false] Opciones de `addEventListener`
     */
	private _add(el: Element, 
		type: keyof ElementEventMap, 
		fn: (this: Element, ev: Event) => any, 
		useCapture: boolean | AddEventListenerOptions | undefined = false): void {
		el.addEventListener(type, fn, useCapture)
	}
    /**
     * Remueve un Escucha
     * @private
     * @param {Element}    el  El Elemento
     * @param {keyof   ElementEventMap} type   tipo
     * @param {Function}                fn Función a desvincular
     * @param {boolean | EventListenerOptions | undefined } [useCapture = false] Opciones de `removeEventListener`
     */
	private _remove(el: Element, 
		type: keyof ElementEventMap, 
		fn: (this: Element, ev: Event) => any, 
		useCapture: boolean | EventListenerOptions | undefined = false): void {
		el.removeEventListener(type, fn, useCapture)
	}
    /**
     * Almacena los eventos en los elementos para su uso
     * @private
     * @param  {Element}             el    Elemento
     * @param  {string}              event Evento
     * @param  {EventOptionListener} data  Lista de Funciónes y opciones
     * @return {string}
     */
    private _set_data(el: Element, event: string, data: EventOptionListener): string | ObjAny | false {
		if (this._dt.acceptData(el) && (el as any).self !== window) {
			let name: string = Utils.camelCase(event)
			let dataEv: ObjAny = this._dt.has(el, name) ? this._dt.get(el, name) : this._dt.access(el, name, [])

			dataEv.push(data)

			return this._dt.set(el, dataEv)
		}
		return false
	}
    /**
     * Obtiene el evento almacenado
     * @private
     * @param  {Element}   el        Element
     * @param  {string}    nameEvent Evento
     * @param  {number}    [index = -1]  Posición
     * @return {ObjAny | ObjEvent | ObjAny[]  | boolean}
     */
	private _get_data(el: Element, nameEvent?: string, index: number = -1): ObjAny | ObjEvent | ObjAny[]  | boolean {
		nameEvent = Utils.camelCase(nameEvent)
		let evList: ObjEvent | null = this._dt.get(el, nameEvent) as ObjEvent | null
		if (Utils.isNil(evList)) return {};
		if (Utils.isNil(nameEvent)) return evList as ObjEvent;
		
		if (!Utils.has(evList, nameEvent)) return false;
		let oEvent: ObjAny[] = (evList as ObjEvent)[nameEvent as string]
		return index === -1 ? oEvent : oEvent[index]; 
	}
    /**
     * Remueve un evento almacenado
     * @private
     * @param  {Element}   el        Element
     * @param  {string}    [nameEvent] Evento, si es null remueve todo
     * @param  {number}    [index = -1]  Posición
     * @return {boolean} 
     */
	private _remove_data(el: Element, nameEvent?: string, index: number = -1): boolean {
		if (Utils.isNil(nameEvent)) {
			return this._dt.clean(el);
		}
		nameEvent = Utils.camelCase(nameEvent)
		if (this._dt.has(el, nameEvent as string)) {
			let ds = this._get_data(el, nameEvent, -1)
			if (index > -1 && Utils.has(ds, index)) {
				delete ds[index]
				this._dt.set(el, nameEvent as string, ds)
			} else {
				this._dt.remove(el, nameEvent)
			}
			return true;
		}
		return false;
	}
    /**
     * Obtiene el Namespace del evento
     * @private
     * @param  {string | string[]}    nameNS El Evento
     * @param  {boolean}  [onlyNS = false] Establece si solo se retorna su espacio de Nombre
     * @return {EventNameSpace | string} 
     */
    private _get_namespace(nameNS: string | string[], onlyNS: boolean = false): EventNameSpace | string {
		let { name, NS } = Utils.isArray(nameNS) ? nameNS : Utils.split(nameNS, ".")
		return onlyNS ? NS : {
			name, NS
		}
	}
	// PUBLIC
    /**
     * Obtiene un evento almacenado en el elemento
     * @param  {[Element, string?, number?]} args tupla con Elemento, evento y posición
     * @return {any}
     */
	get_event(...args: [Element, string?, number?]): any {
		return this._get_data(...args);
	}
    /**
     * Asigna, ejecuta o establece un evento al elemento dado
     *
     * @example
     * ```ts
     * _$("button").on("click", (e) => console.log("me presionaste"))
     * // ó
     * _$("li").on("click", "a", function(e){
     * console.log("HREF=", this.href)
     * })
     * ```
     * @event
     * @param  {Element}     el Elemento
     * @param  {string   |  string[]}    eventList Evento o lista de Evento
     * @param  {string   |  Function}    [selector]  Selector CSS
     * @param  {Function |  ObjAny}      [callback]  Función
     * @param  {ObjAny   |  boolean}     [options = false] Opciones
     * @return {any}
     */
	on(el: Element, eventList: string | string[], 
		selector?: string | Function,
		callback?: Function | ObjAny,
		options: ObjAny | boolean = false): any {
		if (Utils.isNil(el)) return this;
		if (Utils.isFunction(selector)) {
			options = callback as ObjAny
			callback = selector as Function
			selector = undefined
		}
		if (!Utils.isObject(options)) options = {}
		let EVL = Utils.isArray(eventList) ? eventList : Utils.split(eventList, " ");
		EVL.forEach((e) => {
			let handler = (ev) => {
				if (Utils.isNil(selector)) {
					return (callback as Function).call(el, ev)
				} else {
					let target: Element = ev.target, res: any
					while(target && target !== el) {
						if (Element.prototype.matches.call(target, selector as string)) {
							res = (callback as Function).call(target, ev)
							if (ev.isPropagationStopped) {
								ev.stopImmediatePropagation()
								break;
							}
						}
						target = target.parentNode as Element
					}
					if (Utils.has(options, "once") && !Utils.isNil((options as ObjAny).once)) this.off(el, eventList, selector, options as ObjAny);
					return res
				}
			}
			let nsm = this._get_namespace(e) as ObjAny
			let name = Utils.isObject(nsm) ? nsm.name : e
			let ns = Utils.isObject(nsm) ? nsm.ns : null
			Object.defineProperty(handler, 'name',{
				value: (callback as Function).name && (callback as Function).name !== '' ? (callback as Function).name :
					`func_event_${name}_${Utils.isNil(ns) ? new Date().getTime() : ns}`
			})
			let NameEventRial = ListEvents.indexOf(name) > -1 ? name : e;
			this._add(el, NameEventRial, handler, !Utils.has(options, "capture") ? false : (options as ObjAny).capture)
			let s: string = selector as string
            this._set_data(el, e, {
				event: e,
				handler,
                selector: s,
				ns,
				options: !Utils.isNil(options) ? options as ObjAny | boolean : false
			})
		})
		return el;
	}
    /**
     * Ejecuta un evento solo una vez.
     * 
     * @example
     * ```ts
     * _$("button").once("click", (e) => console.log("me presionaste 1"))
     * // ó
     * _$("li").once("click", "a", function(e){
     * console.log("HREF=", this.href)
     * })
     * // Se se vuelve ha hacer click sobre alguno de los dos no pasara nada
     * ```
     * @event
     * @param  {Element}     el Elemento
     * @param  {string   |  string[]}    eventList Evento o lista de Evento
     * @param  {string   |  Function}    [selector]  Selector CSS
     * @param  {Function |  ObjAny}      [callback]  Función
     * @param  {ObjAny   |  boolean}     [options = false] Opciones
     * @return {any}                 [description]
     */
    once(el: Element, eventList: string | string[],
        selector?: string | Function,
        callback?: Function | ObjAny,
        options?: ObjAny): any {
    	if (Utils.isNil(options)) options = {} as ObjAny
    	(options as ObjAny).once = true
    	return this.on(el, eventList, selector, callback, options)
    }
    /**
     * Desvincula un evento a un elemento
     * @event
     * @param  {Element}   el Elemento
     * @param  {string |  string[]}    eventList Evento o lista de Evento
     * @param  {string |  ObjAny}      [selector]  Selector CSS
     * @param  {ObjAny |  number}      [options]   Opciones
     * @param  {number}                [index = 0]     Posción de la función
     * @return {Element}
     */
    off(el: Element, eventList: string | string[],
        selector?: string | ObjAny,
        options?: ObjAny | number, 
        index: number = 0): Element {
    	if (Utils.isObject(selector)) {
    		options = selector as ObjAny
    		selector = undefined
    	}
    	if (Utils.isNumber(options)) {
    		index = options as number
    		options = {}
    	}
    	if (!Utils.isObject(options)) options = {}
        let Dev: ObjEvent = this._get_data(el) as ObjEvent;
        if ((!Utils.isArray(eventList) && Utils.isEmpty(eventList)) || 
    		Utils.isNil(eventList) || 
    		(eventList as string).toLowerCase() === "all" || eventList === "*") {
            if (Dev) {
            	Utils.each(Dev, (prop) => {
            		prop.forEach((i) => {
                        this._remove(el, i.event, i.handler, i.options)
            		})
            	})
            }
            this._remove_data(el)
            return el;
    	}
    	
    	let Evl: string[] = Utils.isArray(eventList) ? eventList : Utils.split(eventList, ".")
    	Evl.forEach((e) => {
    		let nameNs = this._get_namespace(e) as ObjAny
    		let name = Utils.isObject(nameNs) ? nameNs.name : e;
    		if (Utils.has(Dev, name)) {
                let ev: EventOptionListener = Dev[name][index] as EventOptionListener
                this._remove(el, ev.event as keyof ElementEventMap, ev.handler, ev.options)
                this._remove_data(el, e, index)
    		}
    	})
        return el;
    }
    /**
     * Dispara un evento
     * @event
     * @param  {Element} el    Elemento
     * @param  {Event}   event Evento a disparar
     * @return {boolean}
     */
    fire(el: Element, event: Event): boolean {
    	return el.dispatchEvent(event)
    }
    /**
     * Crea un nuevo Evento
     * @event
     * @param  {string}           name        Nombre del evento
     * @param  {any}              [customEvent] Objecto o función del evento a crear
     * @return {CustomEvent<any>}
     */
    create(name: string, customEvent?: any): CustomEvent<any> {
        let o: CustomEventInit<any> = {}
        if (Utils.has(customEvent, "detail")) {
        	o = Utils.assignIn({}, {
                bubbles: true,
                cancelable: true,
                detail: null
            }, customEvent)
        } else {
            o = {
                bubbles: true,
                cancelable: true,
                detail: customEvent
            }
        }
        return new CustomEvent(name, o)
    }
}