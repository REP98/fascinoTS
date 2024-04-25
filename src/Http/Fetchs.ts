/** @module Http/Fetchs */
import fetch from "isomorphic-fetch";
import HeaderFetch from "./HeaderFetch";
import Utils from "../Utils";
/** 
 * Opciones por defecto en Fetch
 * @type {RequestInit}
 */
export const defaultOptions: RequestInit = {
	method: undefined,
	headers: undefined,
	body: null,
	mode: undefined,
	credentials: undefined,
	cache: undefined,
	redirect: undefined,
	signal: undefined
}
/**
 * @class
 * @classdesc Permite la manipulacion de solicitudes HTTP con el uso de Fetch 
 */ 
export default class Http {
	/** @type {boolean} */
	private _isLoading: boolean = false
	/** @type {any[]} */
	private _chucks: any[] = []
	/** @type {AbortController} */
	private _controller: AbortController = new AbortController()
	/** @type {string | URL} */
	private _url: string | URL = ""
	/** @type {RequestInit} */
	private _setting: RequestInit = defaultOptions
	/** @type {HeaderFetch} */
	private _headerf: HeaderFetch = new HeaderFetch()
	/**
	 * @param {HTMLFormElement | RequestResponse | string} resource EL Recurso a usar
	 * @param {RequestInit} [fetchOptions = defaultOptions] Opciones para Fetch
	 * @param {string} [_type_response = "json"]
	 * @param {string} [_mime]
	 */
	constructor(
		public resource: HTMLFormElement | RequestResponse | string,
		public fetchOptions: RequestInit = defaultOptions,
		private _type_response: string = "json",
		private _mime?: string
	) {
		if (this.resource instanceof HTMLFormElement) {
			this._get_resource_form()
		} else {
			this._url = this._get_resoure(this.resource) as string
			this.setting = this.fetchOptions
		}
	}
	// Private Method 
	/**
	 * Obtiene los Recursos de un elemento Form
	 * @private
	 * @return {void}
	 */
	private _get_resource_form(): void {
		let d: RequestInit = {}
		let form: HTMLFormElement = this.resource as HTMLFormElement
		this._url = this._get_resoure(form.getAttribute("action") as string) as string
		let otherData: string[] = ['mode', 'credentials', 'cache', 'redirect', 'type-response', 'mime']

		d.method = form.getAttribute("method") as string;
		if (form.hasAttribute('enctype')) {
			let h = new Headers()
			h.append('Content-Type', form.getAttribute('enctype') as string)
			d.headers = h
		}
		d.body = new FormData(form);
		Utils.each(otherData, (n) => {
			if (form.hasAttribute(`data-${n}`)) {
				d[Utils.cameCase(n)] = form.getAttribute(`data-${n}`)
			}
		})
		this.fetchOptions = Utils.assignIn(d, this.fetchOptions);
	}
	/**
	 * Obtiene los recursos suministrados
	 * @private
	 * @param {RequestResponse | string} res
	 * @return {RequestResponse | string}
	 */
	private _get_resoure(res: RequestResponse | string): RequestResponse | string {
		if (res instanceof Request) {
			return res;
		} else if (Utils.isArray(res)) {
			let u = (res as RequestArr).shift();
			return (res as RequestArr).length > 0 ? Utils.url(u, res[0]) : Utils.url(u)
		} else if (Utils.isObject(res)) {
			return Utils.url((res as UrlObj).url, (res as UrlObj).params)
		} else if(Utils.isString(res)) {
			return Utils.url(res);
		}

		return res;
	}
	/**
	 * Resetea las opciones de la clase
	 */
	private _reset_local() {
		this._isLoading = false;
		this._controller = new AbortController()
	}
	/**
	 * Lee el body
	 * @async
	 * @param  {Response}  response 
	 * @param  {string}    [type_response = "json"] 
	 * @param  {string}    [mimetype] 
	 * @return Promise<string | Blob | ObjAny>
	 */
	private async _read_body(response: Response, type_response: string = "json", mimetype?: string): Promise<string | Blob | ObjAny> {
		const reader = response.body?.getReader() as ReadableStreamDefaultReader<Uint8Array>
		const length: number = parseInt(response.headers.get('content-length') || "0", 10)
		let received: number = 0
		while(this._isLoading) {
			const { done, value } = await reader.read();
			const payload = { detail: { received, length, loading: this._isLoading } };
			const onProgress = new CustomEvent('fetch-progress', payload)
			const onFinished = new CustomEvent('fetch-finished', payload)
			if (done) {
				this._isLoading = false;
				window.dispatchEvent(onFinished)
			} else {
				this._chucks.push(value)
				received += value.length;
				window.dispatchEvent(onProgress)
			}
		}
		let body = new Uint8Array(received);
		let position: number = 0;
		for (const chuck of this._chucks) {
			body.set(chuck, position)
			position += chuck.length
		}
		if (type_response.toLowerCase() === "json") {
			let n = new TextDecoder('utf-8').decode(body);
			try{
				return JSON.parse(n)
			} catch (e) {
				return n;
			}
		} else if (type_response.toLowerCase() === "blob") {
			if (Utils.isNil(mimetype)) {
				return new Blob([body])
			} else {
				return new Blob([body],{type: mimetype})
			}
		} else {
			return new TextDecoder('utf-8').decode(body)
		}
	}
	/**
	 * Configuración de Fetch
	 * @return {RequestInit}
	 */
	get setting(): RequestInit {
		return this._setting
	}
	/**
	 * Asigna la configuración
	 * @param {RequestInit} fetchOptions
	 */
	set setting(fetchOptions: RequestInit) {
		var o: RequestInit = Utils.assignIn(defaultOptions, fetchOptions)
		if (o.method?.toLowerCase() !== 'post' && Utils.isNil(this._setting.headers)) {
			this._headerf = new HeaderFetch({
				'Content-Type': 'application/x-www-form-urlencoded'
			})
			o.headers = this._headerf.header
		}
		Utils.each(o, (v, n) => {
			if (Utils.isNil(v)) {
				if (n == "headers") {
					this._setting.headers = v instanceof Headers ? v :
						this.set_header(v as HeadersInit)
				} else if (n == "body") {
					this._setting.body = v as BodyInit;
				} else if (n == "credentials") {
					if (["omit", "same-origin", "include"].indexOf(v) > -1) this._setting.credentials = v as RequestCredentials;
				} else if (n == "cache") {
					if (["default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached"].indexOf(v) > -1) this._setting.cache = v as RequestCache;
				} else { this._setting[n] = v; }
			}
		})
	}
	/**
	 * Establece Las Cabeceras
	 * @param {HeadersInit} [options]
	 * @return {Headers}
	 */
	set_header(options?: HeadersInit): Headers {
		this._headerf = new HeaderFetch(options)
		return this._headerf.header
	}
	/**
	 * Obtiene las Cabeceras
	 * @return {HeadersInit}
	 */
	get_headers(): HeadersInit {
		return this._headerf.options
	}
	/**
	 * Añada cabeceras a la lista
	 * @param {HeadersInit} options
	 * @return {HeaderFetch}
	 */
	add_header(options: HeadersInit): HeaderFetch {
		this._headerf.add(options);
		return this._headerf
	}
	/**
	 * Elimina un cabecera
	 * @param {string} key
	 */
	remove_header(key: string) {
		this._headerf.delete(key);
	}
	/**
	 * Inicializa la solicitud
	 * @async
	 * @return Promise<string | Blob | ObjAny | Error | unknown>
	 */
	async start(): Promise<string | Blob | ObjAny | Error | unknown>  {
		this._reset_local()
		this._isLoading = true
		try {
			this.setting.signal = this._controller.signal
			const response = await fetch(this._url, this.setting);
			if (response.status >= 200 && response.status < 300) {
				return this._read_body(response as Response, this._type_response, this._mime)
			} else {
				return new Error(response.statusText)
			}
		} catch(err) {
			return err;
		} finally {
			this._isLoading = false;
		}
	}
	/**
	 * Cancela la ejecución actual
	 */
	cancel() {
		let onAbort = new CustomEvent('fetch-abort', {
			detail: {
				status: "abourt"
			}
		})

		this._controller.abort()
		this._reset_local()
		window.dispatchEvent(onAbort)
	}
}
