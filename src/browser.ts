/**
 * Modulo que exporta Todo Fascino a una variable `_$` para su uso en el navegador
 * @module Browser
 *
 * @example
 * ```javascript
 * _$(() => { _$("body > .alert").html("Window Cargado") })
 * ```
 * @requires Utils
 * @requires DOM._$
 * @requires DOM.Fascino
 * @requires HTTP
 * @requires Utils/Storage
 * @requires Utils/Hooks
 */
import Utils from "./Utils";
import { _$, Fascino } from "./DOM";
import * as Hp from "./Http";
import { session, local } from "./Utils/Storage";
import Hooks from "./Utils/Hooks";

/**
 * Alias DOMContentLoader, inicializa una función
 * @param {ListenerFunction}        callback Función a ejecutar al cargar el navegador
 * @param {AddEventListenerOptions} [options]  Opciones para la función `addEventListener`
 * @returns {void}
 */
function DOMLoad(callback: ListenerFunction, options?: AddEventListenerOptions): void {
    if(document.readyState != 'loading') {
        if (Utils.isFunction(callback)) {
            callback.call(document, [])
        }
    } else {
        document.addEventListener('DOMContentLoaded', callback, (options || false))
    }
}
/**
 * Ejecuta una funcion al cargar Window
 * @param {ListenerFunction} callback Función
 * @param {boolean | AddEventListenerOptions} [options] Opciones para la función `addEventListener`
 */
function WinLoad(callback: ListenerFunction, options?: boolean | AddEventListenerOptions) {
    window.addEventListener("load", callback, options)
}
/**
 * Ejecuta una función antes de cargar el window
 * @param {Function | string} callback la función o nombre de función
 * @return {Fascino}
 */
function beforeunload(callback: Function | string): Fascino {
    if (Utils.isString(callback)) {
        return _$(window).on("beforeunload", (e) => {
            e.returnValue = callback
            return callback
        })
    } else {
        return _$(window).on("beforeunload", callback as Function)
    }
}

/**
 * @function _$.prototype.load
 * @description Carga archivos via Fetch
 * @example
 * ```typescript
 * // Añadimos el contenido de file.html al main
 * _$("main").load("path/to/file.html")
 * ```
 * @param {HTMLFormElement | RequestResponse | string} url La Url del Archivo
 * @param {string | ObjAny | null} [data = null] El contenido del body a cambiar o añadir
 * @param {RequestIn} [options] Opciones para Fetch
 * @return {Promise<string | Blob | ObjAny | Error | unknown | null>}
 */
function load(url: HTMLFormElement | RequestResponse | string, data: string | ObjAny | null = null, options?: RequestInit): Promise<string | Blob | ObjAny | Error | unknown | null> {
    if (this.length === 0) return this;
    let callback: string = 'get';
    if (options && Utils.has(options, "method") && options?.method?.toUpperCase() !== "GET") {
        callback = options?.method?.toLowerCase() as string
    }
    let isMd: boolean = false
    if (Utils.isString(url)) {
        const extension = Utils.last((url as string).split('.'));
        isMd = Utils.endsWith(extension, 'html') || Utils.endsWith(extension, 'md')
    }
    
    return Utils.has(_$, callback) ?
        _$[callback](url, data, options).then((res) => {
            this.each((el: Element) => {
                _$(el).html(
                    isMd ? Utils.md_render(res) : res
                )
            })
        }).catch((e) => {
            console.error("An error occurred while processing your request\n", e)
        }) : null
}
Object.assign(Fascino.prototype, { load })

Object.assign(_$, {
    ...Utils, 
    ...Hp,
    addMethod: (name: string, callback: FnAny) => Fascino.addMethod(name, callback),
    beforeunload,
    DOMLoad,
    session,
    local,
    hooks: () => new Hooks(),
    WinLoad
})


Object.assign(window, { _$ })
