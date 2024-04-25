/** @module Utils/Hooks */
import Utils from "./index";
import { session, local } from "./Storage";
import pkm from "../../package.json";
import { NAME_FRAMEWORK } from "../DOM";

/**
 * @class
 * @classdesc Ganchos de Fascino inspirados en Wordpress
 * 
 * @example
 * Imaginemos que tenemos un video que queremos que se redimencione al cambiar el tamaño de pantalla
 * pero tenemos las configuraciónes del video en un archivo y la carga en otro
 * ```javascript
 * // Archivo VideoConfig.ts
 * // Declaramos el Hook
 * _$.hooks.add("mihook.resize", (w,h) => {
 * _$("video").styel({
 *     width: (w - 10) + "px", 
 *     height: (h - 16) + "px"
 * })
 * })
 * // Archivo main.ts
 * _$(window).on("resize", (e) => {
 *     _$.hooks.run("mihook.resize", screen.width, screen.height)
 * })
 * ```
 */
export default class Hooks {
	/** @type {HookRecord} Lista de Ganchos */
	private _hook: HookRecord  = {}
	/**
	 * @see {@link Utils/Storage.session}
	 */
	private _s: session = new session()
	/**
	 * @see {@link Utils/Storage.local}
	 */
	private _l: local = new local()
	/**
	 * Inicilaizador de los Ganchos
	 */
	constructor(){
		this._s.set("hook-sessions", { name: NAME_FRAMEWORK, version: pkm.version });
		this._l.set("hook-local", { name: NAME_FRAMEWORK, version: pkm.version });
	}
	/**
	 * Lista de Canchos
	 * @return {HookRecord}
	 */
	get hook(): HookRecord { 
		return Utils.assignIn(this._hook, 
            Utils.assignIn(this._l.get("hook-local"), this._s.get("hook-sessions"))
		) 
	}
	/**
	 * Añade un Gancho
	 * @param {string}    name nombre del cancho
	 * @param {FnAny}  callback Funcion a Ejecutar
	 */
	add(name: string, callback: FnAny) {
		if (!Utils.has(this._hook, name)) {
			this._hook[name] = []
		}
		this._hook[name].push(callback)
	}
	/**
	 * Añade un Gancho Persistente, el cual se almacenara en el Storage del navegador
	 * @param {string | HookRecord}     name
	 * @param {FnAny}    [callback]
	 */
	persistent(name: string | HookRecord, callback?: FnAny) {
		if (Utils.isString(name)) {
			this.add(name as string, callback as FnAny)
			this._l.append("hook-local", name as string, callback)
		} else {
			Utils.each(name as HookRecord, (fn, c) => {
				this.add(fn, c)
                this._l.append("hook-local", c, fn)
			})
		}
	}
	/**
	 * Añade ganchos de forma temporal al almacenamiento Storega del Navegador
	 * @param {string | HookRecord}   name
	 * @param {FnAny}  [callback]
	 */
    temporal(name: string | HookRecord, callback?: FnAny) {
        if (Utils.isString(name)) {
            this.add(name as string, callback as FnAny)
            this._l.append("hook-sessions", name as string, callback)
        } else {
            Utils.each(name as HookRecord, (fn, c) => {
                this.add(fn, c)
                this._l.append("hook-sessions", c, fn)
            })
        }
    }
    /**
     * Ejecuta un gancho y le pasa los argumentos
     * @param {string} name nombre del gancho
     * @param {any[]}  args argumentos de la función
     */
    run(name: string, ...args: any[]) {
        if (arguments.length <= 1) return;
        let callbacks = this.hook[name];
        if (Utils.isNil(callbacks)) return;
        for (let i = 0; i < callbacks.length; i++) {
            callbacks[i].apply(this, args)
        }
    }
}
