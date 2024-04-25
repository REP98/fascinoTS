/**
 * Tipos definidos para FascinoJS
 * @module Types
 */
/// <reference path="@types/lodash"/>
/// <reference path="@types/isomorphic-fetch"/>
/**
 * Representa un objeto con claves de tipo cadena o número y valores de cualquier tipo.
 */
declare type ObjAny = { [key: string | number]: any }
/**
 * Representa un objeto con claves de tipo cadena y valores de cualquier tipo.
 */
declare type ObjKSt = { [key: string] : any }
/**
 * Representa una función sin argumentos ni retornos
 */
declare type Fn$n = () => void
/**
 * Representa una Función con cualquier cantidad de Argumentos de cualquier tipo y cualquier retorno
 */
declare type FnAny = (...args?: any[]) => any
/**
 * Representa una función de escucha que se puede adjuntar a un elemento DOM.
 * @callback ListenerFunction
 * @param {Document} this - El contexto (this) dentro del cual se llama a la función de escucha.
 * @param {any} ev - Un Objecto Evento.
 * @returns {any} - El valor de retorno de la función de escucha.
 */
declare type ListenerFunction = (this: Document, ev: any) => any;
/**
 * Representa el tipo posible a seleccionar.
 * @typedef {Selector | Fascino | HTMLElementTagNameMap | HTMLElement | Element | Element[] | ParentNode | string | ListenerFunction | NodeList | Window & typeof globalThis} ArgSel
 */
declare type ArgSel = Selector
    | Fascino
    | HTMLElementTagNameMap
    | HTMLElement
    | Element
    | Element[]
    | ParentNode
    | string
    | ListenerFunction
    | NodeList
    | Window & typeof globalThis;
/**
 * Representa una interfaz para selectores de elementos que se transformara por su nombre en cadena.
 * @interface ElementSelector
 */
declare interface ElementSelector {
    window: Window & typeof globalThis;
    document: Document,
    body: HTMLElement,
    html: HTMLElement,
    ':root': HTMLElement,
    doctype: DocumentType | null
}
/**
 * Representa un objeto con propiedades opcionales top y left para valores de desplazamiento.
 * @typedef {Object} OffSetObj
 * @property {number} [top] - El valor de desplazamiento superior.
 * @property {number} [left] - El valor de desplazamiento izquierdo.
 */
declare type OffSetObj = { top?: number, left?: number }
/**
 * Representa una función que se usa cuando se oculta o se muestra un elemento.
 * @param {Element} el - El elemento a ocultar o mostrar.
 * @returns {never} - Esta función nunca retorna.
 */
declare type ShowHideFn = (el: Element) => never
/**
 * Representa una función que puede utilizarse con el método map().
 * @param {Element} value - El elemento actual que se está procesando.
 * @param {number} index - El índice del elemento actual.
 * @param {Element[]} array - El array que se está procesando.
 * @returns {unknown} - El resultado de la operación de mapeo.
 */
declare type MapFns = (value: Element, index: number, array: Element[]) => unknown
/**
 * Representa la función para el each de {@link DOM.Fascino}.
 * @param {Element} value - El elemento actual que se está procesando.
 * @param {number} index - El índice del elemento actual.
 * @param {Element[]} array - El array que se está procesando.
 * @returns {void}
 */
declare type FNElements = (value: Element, index: number, array: Element[]) => void
/**
 * @typedef {Object.<string, Object[]>}
 */
declare type ObjEvent = { [key: string]: Object[] }
/**
 * Interfaz para representar un eventos co espacio de nombre.
 * @interface
 */
declare interface EventNameSpace { 
    /**
     * Nombre del Evento
     * @type {string}
     */
    name: string, 
    /**
     * Namespace para el evento
     * @type {string}
     */
    NS: string 
}
/**
 * Interfaz para representar un objeto de opciones de escucha de eventos.
 * @interface
 */
declare interface EventOptionListener {
    /**
     * El nombre del evento o una clave válida de ElementEventMap.
     * @type {string | keyof ElementEventMap}
     */
    event: string | keyof ElementEventMap,
    /**
     * El manejador de eventos
     * @type {((ev: Event) => any)}
     */
    handler: (ev: Event) => any,
    /**
     * El selector que contiene el eventos.
     * @type {string}
     */
    selector: string,
    /**
     * El espacio de nombres del evento.
     * @type {string}
     */
    ns: string,
    /**
     * Opciones adicionales para la escucha del evento.
     * @type {ObjAny | boolean}
     */
    options: ObjAny | boolean
}
/**
 * Representa un registro de ganchos, donde las claves son el nombre del gancho y el valor una matriz de funciones.
 */
declare type HookRecord = { [key: string]: ((...args?: any[]) => any)[] }
/**
 * Representa un objeto con una URL y parámetros asociados.
 */
declare interface UrlObj {
    /** 
     * La URL
     * @type {string}
     */
    url: string,
    /** 
     * Lista de parametros para la URL dada
     * @type {ObjAny}
     */
    params: ObjAny
}
/**
 * Representa un tipo de solicitud como una matriz con una URL o un objeto URL y datos adicionales.
 */
declare type RequestArr = [string | URL, ObjAny];
/**
 * Representa una respuesta de solicitud, que puede ser un objeto RequestInit, RequestArr, un objeto URL o HTMLFormElement(Formulario).
 */
declare type RequestResponse = RequestInit | RequestArr | UrlObj;
/**
 * Representa métodos HTTP para definir las Funciones de alias
 */
declare type MethodFunction = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'json' | 'head' | 'api';
/**
 * Representa una URL para realizar solicitudes, que puede ser una cadena, un objeto RequestInit, un RequestArr, un objeto URL o un HTMLFormElement(Formulario).
 * @typedef {string | RequestInit | RequestArr | UrlObj | HTMLFormElement}
 */
declare type RequestURL = string | RequestInit | RequestArr | UrlObj | HTMLFormElement;
/**
 * Función explicita para {@link DOM.Fascino.addMethod}
 * @type {Function}
 */
declare type FascinoFN = (this: Fascino, ...args: any[]) => any;
