/** @module Http/HeaderFetch */
import Utils from "../Utils";
/**
 * @class
 * @classdesc Manejador de Cabeceras
 * @requires Utils
 */
export default class HeaderFetch {
    /**
     * @private
     * @typeof {Headers}
     */
    private _header: Headers = new Headers();
    /**
     * Inicializador de las Cabeceras
     * @param {HeadersInit | Headers} [_options]
     */
    constructor(
        private _options?: HeadersInit | Headers
    ) {
        this.header = this._options as HeadersInit | Headers
    }
    /**
     * Obtiene las Opciones de la cabecera
     * @return {HeadersInit} [description]
     */
    get options(): HeadersInit {
        return this._options as HeadersInit
    }
    /**
     * Establece las opciones
     * @param {HeadersInit} op
     */
    set options(op: HeadersInit) {
        let o: HeadersInit = {}
        for (const key in this._header.keys()) {
            o[key] = this._header.get(key) as string;
        }
        this._options = Utils.asignIn(this._options, o, op)
    }
    /**
     * Obtiene las Cabeceras
     * @return {Headers}
     */
    get header(): Headers {
        return this._header;
    }
    /**
     * Establece las Cabeceras
     * @param {HeadersInit | Headers} h
     */
    set header(h: HeadersInit | Headers) {
        if (h instanceof Headers) {
            this._header = h;
        } else {
            this._header = new Headers(h)
        }
    }
    /**
     * Añade una cabecera al elemento
     * @param {HeadersInit} op
     */
    add(op: HeadersInit) {
        Utils.each(op, (v, n) => this._header.append(n, v));
    }
    /**
     * Borra una cabecera por su nombre
     * @param {string} name
     */
    delete(name: string) {
        this._header.delete(name);
    }

}