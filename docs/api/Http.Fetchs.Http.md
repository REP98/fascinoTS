# Clase: Http

[Http/Fetchs](../wiki/Http.Fetchs).Http

**`Descripción de Clase`**

Permite la manipulacion de solicitudes HTTP con el uso de Fetch

## Tabla de Contenido

### Constructor

- [constructor](../wiki/Http.Fetchs.Http#constructor)

### Propiedades

- [fetchOptions](../wiki/Http.Fetchs.Http#fetchoptions)
- [resource](../wiki/Http.Fetchs.Http#resource)

### Accessors

- [setting](../wiki/Http.Fetchs.Http#setting)

### Métodos

- [add\_header](../wiki/Http.Fetchs.Http#add_header)
- [cancel](../wiki/Http.Fetchs.Http#cancel)
- [get\_headers](../wiki/Http.Fetchs.Http#get_headers)
- [remove\_header](../wiki/Http.Fetchs.Http#remove_header)
- [set\_header](../wiki/Http.Fetchs.Http#set_header)
- [start](../wiki/Http.Fetchs.Http#start)

## Constructor

### constructor

• **new Http**(`resource`, `fetchOptions?`, `_type_response?`, `_mime?`): [`Http`](../wiki/Http.Fetchs.Http)

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `resource` | `string` \| `HTMLFormElement` \| [`RequestResponse`](../wiki/Types#requestresponse) | `undefined` | EL Recurso a usar |
| `fetchOptions?` | `RequestInit` | `defaultOptions` | Opciones para Fetch |
| `_type_response?` | `string` | `"json"` |  |
| `_mime?` | `string` | `undefined` |  |

#### Retornos

[`Http`](../wiki/Http.Fetchs.Http)

#### Definido en

Http/Fetchs.ts:42

## Propiedades

### fetchOptions

• **fetchOptions**: `RequestInit` = `defaultOptions`

Opciones para Fetch

#### Definido en

Http/Fetchs.ts:44

___

### resource

• **resource**: `string` \| `HTMLFormElement` \| [`RequestResponse`](../wiki/Types#requestresponse)

EL Recurso a usar

#### Definido en

Http/Fetchs.ts:43

## Accessors

### setting

• `get` **setting**(): `RequestInit`

Configuración de Fetch

#### Retornos

`RequestInit`

#### Definido en

Http/Fetchs.ts:161

• `set` **setting**(`fetchOptions`): `void`

Asigna la configuración

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `fetchOptions` | `RequestInit` |

#### Retornos

`void`

#### Definido en

Http/Fetchs.ts:168

## Métodos

### add\_header

▸ **add_header**(`options`): [`HeaderFetch`](../wiki/Http.HeaderFetch.HeaderFetch)

Añada cabeceras a la lista

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `options` | `HeadersInit` |

#### Retornos

[`HeaderFetch`](../wiki/Http.HeaderFetch.HeaderFetch)

#### Definido en

Http/Fetchs.ts:212

___

### cancel

▸ **cancel**(): `void`

Cancela la ejecución actual

#### Retornos

`void`

#### Definido en

Http/Fetchs.ts:248

___

### get\_headers

▸ **get_headers**(): `HeadersInit`

Obtiene las Cabeceras

#### Retornos

`HeadersInit`

#### Definido en

Http/Fetchs.ts:204

___

### remove\_header

▸ **remove_header**(`key`): `void`

Elimina un cabecera

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `key` | `string` |

#### Retornos

`void`

#### Definido en

Http/Fetchs.ts:220

___

### set\_header

▸ **set_header**(`options?`): `Headers`

Establece Las Cabeceras

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `options?` | `HeadersInit` |

#### Retornos

`Headers`

#### Definido en

Http/Fetchs.ts:196

___

### start

▸ **start**(): `Promise`\<`unknown`\>

Inicializa la solicitud

#### Retornos

`Promise`\<`unknown`\>

Promise<string | Blob | ObjAny | Error | unknown>

**`Async`**

#### Definido en

Http/Fetchs.ts:228
