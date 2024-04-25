/**
 * @module Http
 */
import Utils from "../Utils";
import Serialize from "./Serialize";
import Http from "./Fetchs";
import HeaderFetch from "./HeaderFetch";
import FsEvent from "../DOM/Event";
import { _$, Fascino } from "../DOM";
/**
 * Verifica si el metodo es GET
 * @param  {string}  method Metodo
 * @return {boolean}
 */
export function isGetMethod(method: string): boolean {
    return ['GET', 'JSON', 'SCRIPT'].indexOf(method) !== -1
}
/**
 * Esta función sirve de constructor para los metodos `get`,`post` y otros
 * @param  {MethodFunction} method  Metodo HTTP
 * @param  {string | HTMLFormElement | RequestResponse} url 
 * @param  {BodyInit | UrlObj['params'] | null}        [data = null] [description]
 * @param  {RequestInit}    [options] Opciones
 * @return {Http}
 */
export function assign(method: MethodFunction, url: string | HTMLFormElement | RequestResponse, data: BodyInit | UrlObj['params'] | null = null, options?: RequestInit): Http {
    let m: string = method.toUpperCase();
    let u: RequestURL;
    if (isGetMethod(m) && !Utils.isNil(data)) {
        u = { url: url as string, 
            params: data 
        } as RequestURL;
    } else {
        u = url as RequestURL;
    }

    let o: RequestInit = {
        method: isGetMethod(m) ? 'get' : m.toLowerCase(),
        body: isGetMethod(m) ? null : data as BodyInit
    }
    let tp: string = m === 'JSON' ? 'json' : 'text'
    return new Http(u, Utils.assignIn(o, options), tp);
}
/**
 * Cancela la Ejecución de HTTP
 * @type {Function}
 */
export var cancel: () => void; 
/**
 * Methodo Get
 * @param  {HTMLFormElement | RequestResponse | string} url
 * @param  {ObjAny | string | null}        [data = null]
 * @param  {RequestInit}        [options]
 * @return {Promise<string | Blob | ObjAny | Error | unknown>}
 */
export async function get(url: HTMLFormElement | RequestResponse | string, data: ObjAny | string | null = null, options?: RequestInit): Promise<string | Blob | ObjAny | Error | unknown> {
    let hp = assign('get', url, data, options);
    cancel = hp.cancel
    return await hp.start()
}
/**
 * Metodo POST
 * @param  {HTMLFormElement | RequestResponse | string} url 
 * @param  {BodyInit}           data  
 * @param  {RequestInit}        [options] 
 * @return {Promise<string | Blob | ObjAny | Error | unknown>} 
 */
export async function post(url: HTMLFormElement | RequestResponse | string, data: BodyInit, options?: RequestInit): Promise<string | Blob | ObjAny | Error | unknown> {
    let hp = assign('post', url, data, options);
    cancel = hp.cancel
    return await hp.start()
}
/**
 * Metodo PUT
 * @param  {HTMLFormElement | RequestResponse | string} url
 * @param  {BodyInit}           data 
 * @param  {RequestInit}        [options]
 * @return {Promise<string | Blob | ObjAny | Error | unknown>}                    [description]
 */
export async function put(url: HTMLFormElement | RequestResponse | string, data: BodyInit, options?: RequestInit): Promise<string | Blob | ObjAny | Error | unknown> {
    let hp = assign('put', url, data, options);
    cancel = hp.cancel
    return await hp.start()
}
/**
 * Metodo Path
 * @param  {HTMLFormElement | RequestResponse | string} url
 * @param  {BodyInit}           data 
 * @param  {RequestInit}        [options]
 * @return {Promise<string | Blob | ObjAny | Error | unknown>}
 */
export async function patch(url: HTMLFormElement | RequestResponse | string, data: BodyInit, options?: RequestInit): Promise<string | Blob | ObjAny | Error | unknown> {
    let hp = assign('patch', url, data, options);
    cancel = hp.cancel
    return await hp.start()
}
/**
 * Metodo Delete
 * @param  {HTMLFormElement | RequestResponse | string} url 
 * @param  {BodyInit}           data 
 * @param  {RequestInit}        [options] 
 * @return {Promise<string | Blob | ObjAny | Error | unknown>}
 */
export async function deletes(url: HTMLFormElement | RequestResponse | string, data: BodyInit, options ?: RequestInit): Promise < string | Blob | ObjAny | Error | unknown > {
    let hp = assign('delete', url, data, options);
    cancel = hp.cancel
    return await hp.start()
}
/**
 * Metodo Json
 * @param  {HTMLFormElement | RequestResponse | string} url
 * @param  {BodyInit}           data 
 * @param  {RequestInit}        [options]
 * @return {Promise<string | Blob | ObjAny | Error | unknown>}
 */
export async function json(url: HTMLFormElement | RequestResponse | string, data: BodyInit, options ?: RequestInit): Promise < string | Blob | ObjAny | Error | unknown > {
    let hp = assign('json', url, data, options);
    cancel = hp.cancel
    return await hp.start()
}
/**
 * Metodo HEAD
 * @param  {HTMLFormElement |RequestResponse | string} url 
 * @param  {BodyInit}           data
 * @param  {RequestInit}        [options] 
 * @return {Promise<string | Blob | ObjAny | Error | unknown>}
 */
export async function head(url: HTMLFormElement | RequestResponse | string, data: BodyInit, options ?: RequestInit): Promise < string | Blob | ObjAny | Error | unknown > {
    let hp = assign('head', url, data, options);
    cancel = hp.cancel
    return await hp.start()
}
/**
 * Obtiene un Script de una Url, string o un Formulario
 * @param  {HTMLFormElement | RequestResponse | string} url 
 * @param  {Function        | string          | ObjAny} callback La función a ejecutar
 * @param  {string          | ObjAny          | null}        [data = null]
 * @param  {RequestInit}        [options]
 * @return {Promise<string | Blob | ObjAny | Error | unknown>}
 */
export function getscript(url: HTMLFormElement | RequestResponse | string, callback: Function | string | ObjAny, data: string | ObjAny | null = null, options?: RequestInit): Promise<string | Blob | ObjAny | Error | unknown> {
    if (!Utils.isNil(callback) && !Utils.isFunction(callback)) {
        data = callback as BodyInit;
    }
    return get(url, data as string, options)
        .then((res) => {
        let s = res
        Utils.script(s)
        if (Utils.isFunction(callback)) {
            (callback as Function).call(s)
        }
    })
}

const f = new Fascino(document)
f.on('submit.ns.fetch', '[data-fetch]', function(e) {
    if (this.nodeName === "FORM") {
        e.preventDefault()
        let h = new Http(this as HTMLFormElement)
        h.start()
            .then((res) => {
                let ev = new FsEvent()
                let onSubmit = ev.create('fetch-submit', {
                    detail: {
                        form: this,
                        events: e,
                        res
                    }
                })

                ev.fire(this, onSubmit)
            })

    }
})

export {
    Http,
    HeaderFetch,
    Serialize
}