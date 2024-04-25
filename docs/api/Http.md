# Modulo: Http

## Tabla de Contenido

### Funciones

- [assign](../wiki/Http#assign)
- [cancel](../wiki/Http#cancel)
- [deletes](../wiki/Http#deletes)
- [get](../wiki/Http#get)
- [getscript](../wiki/Http#getscript)
- [head](../wiki/Http#head)
- [isGetMethod](../wiki/Http#isgetmethod)
- [json](../wiki/Http#json)
- [patch](../wiki/Http#patch)
- [post](../wiki/Http#post)
- [put](../wiki/Http#put)

## Funciones

### assign

▸ **assign**(`method`, `url`, `data?`, `options?`): [`Http`](../wiki/Http.Fetchs.Http)

Esta función sirve de constructor para los metodos `get`,`post` y otros

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `method` | [`MethodFunction`](../wiki/Types#methodfunction) | `undefined` | Metodo HTTP |
| `url` | `string` \| `HTMLFormElement` \| [`RequestResponse`](../wiki/Types#requestresponse) | `undefined` |  |
| `data?` | ``null`` \| [`ObjAny`](../wiki/Types#objany) \| `BodyInit` | `null` | [description] |
| `options?` | `RequestInit` | `undefined` | Opciones |

#### Retornos

[`Http`](../wiki/Http.Fetchs.Http)

#### Definido en

Http/index.ts:26

___

### cancel

▸ **cancel**(): `void`

Cancela la Ejecución de HTTP

#### Retornos

`void`

#### Definido en

Http/index.ts:48

___

### deletes

▸ **deletes**(`url`, `data`, `options?`): `Promise`\<`string` \| `Blob` \| [`ObjAny`](../wiki/Types#objany) \| `Error` \| `unknown`\>

Metodo Delete

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `url` | `string` \| `HTMLFormElement` \| [`RequestResponse`](../wiki/Types#requestresponse) |
| `data` | `BodyInit` |
| `options?` | `RequestInit` |

#### Retornos

`Promise`\<`string` \| `Blob` \| [`ObjAny`](../wiki/Types#objany) \| `Error` \| `unknown`\>

#### Definido en

Http/index.ts:104

___

### get

▸ **get**(`url`, `data?`, `options?`): `Promise`\<`string` \| `Blob` \| [`ObjAny`](../wiki/Types#objany) \| `Error` \| `unknown`\>

Methodo Get

#### Parametros

| Nombre | Tipo | Valor por defecto |
| :------ | :------ | :------ |
| `url` | `string` \| `HTMLFormElement` \| [`RequestResponse`](../wiki/Types#requestresponse) | `undefined` |
| `data?` | ``null`` \| `string` \| [`ObjAny`](../wiki/Types#objany) | `null` |
| `options?` | `RequestInit` | `undefined` |

#### Retornos

`Promise`\<`string` \| `Blob` \| [`ObjAny`](../wiki/Types#objany) \| `Error` \| `unknown`\>

#### Definido en

Http/index.ts:56

___

### getscript

▸ **getscript**(`url`, `callback`, `data?`, `options?`): `Promise`\<`string` \| `Blob` \| [`ObjAny`](../wiki/Types#objany) \| `Error` \| `unknown`\>

Obtiene un Script de una Url, string o un Formulario

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` \| `HTMLFormElement` \| [`RequestResponse`](../wiki/Types#requestresponse) | `undefined` |  |
| `callback` | `string` \| `Function` \| [`ObjAny`](../wiki/Types#objany) | `undefined` | La función a ejecutar |
| `data?` | ``null`` \| `string` \| [`ObjAny`](../wiki/Types#objany) | `null` |  |
| `options?` | `RequestInit` | `undefined` |  |

#### Retornos

`Promise`\<`string` \| `Blob` \| [`ObjAny`](../wiki/Types#objany) \| `Error` \| `unknown`\>

#### Definido en

Http/index.ts:141

___

### head

▸ **head**(`url`, `data`, `options?`): `Promise`\<`string` \| `Blob` \| [`ObjAny`](../wiki/Types#objany) \| `Error` \| `unknown`\>

Metodo HEAD

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `url` | `string` \| `HTMLFormElement` \| [`RequestResponse`](../wiki/Types#requestresponse) |
| `data` | `BodyInit` |
| `options?` | `RequestInit` |

#### Retornos

`Promise`\<`string` \| `Blob` \| [`ObjAny`](../wiki/Types#objany) \| `Error` \| `unknown`\>

#### Definido en

Http/index.ts:128

___

### isGetMethod

▸ **isGetMethod**(`method`): `boolean`

Verifica si el metodo es GET

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `method` | `string` | Metodo |

#### Retornos

`boolean`

#### Definido en

Http/index.ts:15

___

### json

▸ **json**(`url`, `data`, `options?`): `Promise`\<`string` \| `Blob` \| [`ObjAny`](../wiki/Types#objany) \| `Error` \| `unknown`\>

Metodo Json

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `url` | `string` \| `HTMLFormElement` \| [`RequestResponse`](../wiki/Types#requestresponse) |
| `data` | `BodyInit` |
| `options?` | `RequestInit` |

#### Retornos

`Promise`\<`string` \| `Blob` \| [`ObjAny`](../wiki/Types#objany) \| `Error` \| `unknown`\>

#### Definido en

Http/index.ts:116

___

### patch

▸ **patch**(`url`, `data`, `options?`): `Promise`\<`string` \| `Blob` \| [`ObjAny`](../wiki/Types#objany) \| `Error` \| `unknown`\>

Metodo Path

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `url` | `string` \| `HTMLFormElement` \| [`RequestResponse`](../wiki/Types#requestresponse) |
| `data` | `BodyInit` |
| `options?` | `RequestInit` |

#### Retornos

`Promise`\<`string` \| `Blob` \| [`ObjAny`](../wiki/Types#objany) \| `Error` \| `unknown`\>

#### Definido en

Http/index.ts:92

___

### post

▸ **post**(`url`, `data`, `options?`): `Promise`\<`string` \| `Blob` \| [`ObjAny`](../wiki/Types#objany) \| `Error` \| `unknown`\>

Metodo POST

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `url` | `string` \| `HTMLFormElement` \| [`RequestResponse`](../wiki/Types#requestresponse) |
| `data` | `BodyInit` |
| `options?` | `RequestInit` |

#### Retornos

`Promise`\<`string` \| `Blob` \| [`ObjAny`](../wiki/Types#objany) \| `Error` \| `unknown`\>

#### Definido en

Http/index.ts:68

___

### put

▸ **put**(`url`, `data`, `options?`): `Promise`\<`string` \| `Blob` \| [`ObjAny`](../wiki/Types#objany) \| `Error` \| `unknown`\>

Metodo PUT

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `url` | `string` \| `HTMLFormElement` \| [`RequestResponse`](../wiki/Types#requestresponse) |
| `data` | `BodyInit` |
| `options?` | `RequestInit` |

#### Retornos

`Promise`\<`string` \| `Blob` \| [`ObjAny`](../wiki/Types#objany) \| `Error` \| `unknown`\>

[description]

#### Definido en

Http/index.ts:80
