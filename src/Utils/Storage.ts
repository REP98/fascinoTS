/** @module Utils/Storage */
import Utils from ".";
/**
 * @class
 * @classdesc Clase principal para manejar elementos de Storage
 * 
 * @example
 * ```js
 * let local = new local()
 * local.set("userdata", {user: "rep98", id: 666})
 * _$("#addInfo").click((e) => {
 *     local.append("userdata", "session-start", +new Date())
 * })
 * _$("#getDate").click((e) => console.log(local.get("userdata")))
 * /*
 *  * imprime
 *  * {user: "rep98", id: 666, "session-start": 1713505639391}
 *  *\/
 * ```
 */
export class Storages {
    /**
     * Inicializador de elementos
     * @param {globalThis.Storage} [_typestor = localStorage] 
     */
    constructor(
        /**
         * Tipo de Almacenamiento a manejar
         * @type {globalThis.Storage}
         * @default locaStorage
         */
        private _typestor: globalThis.Storage = localStorage
    ) {}
    /**
     * Añade un elemento al almacenamiento
     * @param {string} name  Nombre del Elemento
     * @param {any}    value Valor
     */
    private _set(name: string, value: any) {
        let s = this._typestor
        try {
            s.setItem(name, JSON.stringify(value))
        } catch(_e) {
            s.setItem(name, value)
        }
    }
    /**
     * Agrega un contenido al almacenamiento
     * @param {string | ObjAny} name Nombre del alamacenamiento o objecto compuesto por el nombre como clave y el valor
     * @param {any} [value] El valor si name e string, omitir si name es objecto
     */
    set(name: string | ObjAny, value?: any) {
        if (Utils.isString(name)) {
            this._set(name as string, value);
        } else {
            Utils.each(name as ObjAny, (v,n) => {
                this._set(n, v);
            })
        }
    }
    /**
     * Verfica si un nombre existe
     * @param  {string}  name Nombre
     * @return {boolean} 
     */
    has(name: string): boolean {
        return this._typestor.length > 0 && !Utils.isNil(this._typestor.getItem(name))
    }
    /**
     * Obtiene el contenido de una elemento u objecto
     * @param  {string} name El nombre del elemento
     * @param  {*}       [defaults = false] Valor a devolver si el nombre no existe
     * @return {*}  El contenido o el valor por defecto
     */
    get(name: string, defaults: any = false): any {
        let s = this._typestor
        let valore: string | null = s.getItem(name)
        if (Utils.isNil(valore)) return defaults;
        try {
            return JSON.parse(valore as unknown as string)
        } catch (_e) {
            return valore
        }
    }
    /** Elimina todos los elementos almacenado */
    clear() { this._typestor.clear() }
    /**
     * Remueve un elemento dado
     * @param {string | string[]} name el nombre a remover o matriz de nombres
     */
    remove(name: string | string[]) {
        if (Utils.isArray(name)) {
            (name as string[]).forEach((n) => this._typestor.removeItem(n))
        } else {
            this._typestor.removeItem(name as string)
        }
    }
    // FN only JSON value
    /**
     * Añanda un elemento a un objecto previamente alamacenado
     * 
     * @example
     * ```ts
     * let myElem = {title: "Fascino"}
     * let s = new Storages()
     * // añadimos el elemento
     * s.set("element1", myElement)
     * // Si consultamos
     * s.get("element1") // Retorna {title: "Fascino"}
     * // uso de append
     * s.append("element1", "description", "el mejor Framework")
     * // Si volvemos a consultar obtenemesos
     * s.get("element1") // Return {title: "Fascino", description: "el mejor Framework"}
     * ```
     * 
     * @param {string} name  Nombre del elemento almacenado
     * @param {string} key   Clave del objecto
     * @param {any}    [value] Valor de la clave del objecto
     * @returns {boolean} Verdadero si se añadio el elemento
     */
    append(name: string, key: string, value?: any): boolean {
        if(this.has(name)) {
            let v = this.get(name);
            if (!Utils.isObject(v)) return false;
            if (Utils.has(v, key)) {
                v[key] = value;
                this.set(name, v);
            }
        }
        return this.hasIn(name, key)
    }
    /**
     * Verifica si una clave existe en un objecto del nombre del elemento
     * @param  {string}  name Nombre del elemento
     * @param  {string}  key  Clave a buscar
     * @return {boolean}  Verdadero si la clave existe
     */
    hasIn(name: string, key: string): boolean {
        if (this.has(name)) {
            let v = this.get(name)
            return Utils.isObject(v) && Utils.has(v, key);
        }
        return false;
    }
    /**
     * Obtiene una clave de un objecto almacenado en un elemento
     * @param  {string} name     El nombre del Elemento
     * @param  {string} key      La clave
     * @param  {any}    [defaults] valor por defecto si la clave no existe
     * @return {any}             el valor de la clave o de defaults
     */
    getIn(name: string, key: string, defaults?: any): any {
        if (this.hasIn(name, key)) {
            return (this.get(name) as ObjAny)[key];
        }
        return defaults;
    }
    /**
     * Elimina una clave y su valor de un objecto almacenado
     * @param {string} name nombre del elemento
     * @param {string} key  clave a borrar
     */
    removeIn(name: string, key: string) {
        if (this.hasIn(name, key)) {
            let v = this.get(name);
            if (Utils.has(v, key)) {
                delete v[key];
                this.set(name, v);
            }
        }
    }
}
/**
 * Esta clase es un alias de {@link Storages} pero configurada para usar `sessionStorage`
 * @extends Storages
 */
export class session extends Storages{
    constructor(){ super( sessionStorage ) }
}

/**
 * Esta clase es un alias de {@link Storages} pero configurada para usar `localStorage`
 * @extends Storages
 */
export class local extends Storages {
    constructor(){ super( localStorage ) }
}