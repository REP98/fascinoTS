/** @module Http/Serialize */
import Utils from "../Utils";
/**
 * @class
 * @classdesc Esta clase permite serializar o deserializar elemento para su uso via HTTP
 * @requires Utils
 */
export default class Serialize {
    /**
     * @static
     * Serializa un objeto para su envio fetchs
     * @param  {ObjAny | ObjAny[]}    param Objecto de parametros
     * @param  {string}         [space = "&"] Separador del objecto
     * @return {string}
     */
    static stringify(param: ObjAny | ObjAny[], space: string = "&"): string {
        return Object.keys(param)
            .map((key) => {
                return Utils.isObject(param[key]) || Utils.isArray(param[key]) ?
                    `${encodeURIComponent(key)}[]=${Serialize.stringify(param[key], space)}` :
                    `${encodeURIComponent(key)}=${encodeURIComponent(param[key])}`;
            }).join(space)
    }
    /**
     * @static
     * Convierte un texto serializado en un objecto javacript
     * @param  {string}    param El texto serializado
     * @param  {string }         [space = "&"] Separador del objecto
     * @return {ObjAny} 
     */
    static parse(param: string, space: string = "&"): ObjAny {
        let neObj: ObjAny = {}
        param.split(space)
            .forEach((query) => {
                let p = query.split("=")
                let key = decodeURIComponent(p[0])
                let value = decodeURIComponent(p[1])
                if (key.indexOf('[]') > -1) {
                    neObj[key.replace('[]', '')] = Serialize.parse(value)
                } else {
                    neObj[key] = value
                }
            })
        return neObj
    }
    // FORM
    /**
     * Función especial<br>
     * Serializa todos los elementos de un formulario
     * @param {HTMLFormElement} form El formulario
     * @throws {Error} si form = null | undefined
     * @return {string}
     */
    static form(form: HTMLFormElement): string {
        if (Utils.isEmpty(form) || form.nameNode !== "FORM") {
            throw new Error('Param (form) is not element HTMLFormElement')
        }

        let e: HTMLFormControlsCollection = form.elements,
            p: ObjAny = {}
        Utils.each(e, (field) => {
            let name = field.name || field.id;
            if(!Utils.isNil(name) && !field.disabled) {
                let type = field.type.toLowerCase()
                let node = field.nameNode
                if (node === "TEXTAREA") p[name] = field.value;
                else if (node === "INPUT") {
                    if (type == "checkbox" || type == "radio") {
                        if (field.checked) p[name] = field.value;
                    }else if (node === "file") {
                        let data = new FormData()
                        for (let k = 0; k < field.files.length; k++) {
                            data.append(name, field.files[k])
                        }
                        p[name] = data
                    }else {p[name] = field.value;}
                }
                else if (node === "SELECT") {
                    if (type == "select-one") p[name] = field.value
                    else if (type == "select-multiple") {
                        let o: HTMLOptionsCollection = field.options
                        Array.from(o).forEach((op) => {
                            if (op.selected) {
                                if (!Utils.isArray(p[name])) p[name] = []
                                p[name].push(op.value)
                            }
                        })
                    }
                }
            }
        })
        return Serialize.stringify(p);
    }
}