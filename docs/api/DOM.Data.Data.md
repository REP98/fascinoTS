# Clase: Data

[DOM/Data](../wiki/DOM.Data).Data

**`Descripción de Clase`**

Manejador de almacenamiento de datos en el Elemento

**`Requieres`**

Utils

## Tabla de Contenido

### Constructor

- [constructor](../wiki/DOM.Data.Data#constructor)

### Propiedades

- [ID](../wiki/DOM.Data.Data#id)

### Accessors

- [UID](../wiki/DOM.Data.Data#uid)

### Métodos

- [acceptData](../wiki/DOM.Data.Data#acceptdata)
- [acceptDataSet](../wiki/DOM.Data.Data#acceptdataset)
- [access](../wiki/DOM.Data.Data#access)
- [attrToStorage](../wiki/DOM.Data.Data#attrtostorage)
- [clean](../wiki/DOM.Data.Data#clean)
- [data](../wiki/DOM.Data.Data#data)
- [get](../wiki/DOM.Data.Data#get)
- [has](../wiki/DOM.Data.Data#has)
- [remove](../wiki/DOM.Data.Data#remove)
- [set](../wiki/DOM.Data.Data#set)
- [storage](../wiki/DOM.Data.Data#storage)

## Constructor

### constructor

• **new Data**(`_UID?`): [`Data`](../wiki/DOM.Data.Data)

Inicializador de Data

#### Parametros

| Nombre | Tipo | Valor por defecto |
| :------ | :------ | :------ |
| `_UID` | `string` | `"FSData"` |

#### Retornos

[`Data`](../wiki/DOM.Data.Data)

#### Definido en

DOM/Data.ts:21

## Propiedades

### ID

• **ID**: `number` = `-1`

#### Definido en

DOM/Data.ts:17

## Accessors

### UID

• `get` **UID**(): `string`

Obtiene El Identificador.

#### Retornos

`string`

#### Definido en

DOM/Data.ts:31

• `set` **UID**(`udName`): `void`

Establece el Identicador Único de Data

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `udName` | `string` |

#### Retornos

`void`

#### Definido en

DOM/Data.ts:38

## Métodos

### acceptData

▸ **acceptData**(`el`): `boolean`

Verifica si el objeto dado es un Elemento

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `el` | `Element` | El elemento |

#### Retornos

`boolean`

#### Definido en

DOM/Data.ts:46

___

### acceptDataSet

▸ **acceptDataSet**(`el`): `boolean`

Valida si se puede establece o usar el Atributo DataSet del HTMLElement

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `el` | `Element` \| `HTMLElement` | El Elemento |

#### Retornos

`boolean`

#### Definido en

DOM/Data.ts:54

___

### access

▸ **access**(`el`, `key`, `data`): `any`

Obtiene o Establece el atributo

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `el` | `Element` \| `HTMLElement` | El elemento |
| `key` | `string` | La clave |
| `data` | `string` \| [`ObjAny`](../wiki/Types#objany) | El valor |

#### Retornos

`any`

El valor obtenido o establecido

#### Definido en

DOM/Data.ts:121

___

### attrToStorage

▸ **attrToStorage**(`elem`, `key`, `data?`): `any`

Establece los atributos `data` de un elemento

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `elem` | `Element` \| `HTMLElement` | Elemento a manipular |
| `key` | `string` \| [`ObjAny`](../wiki/Types#objany) \| `string`[] | La clave del atributo data ejemplo data-valor; key = valor |
| `data?` | `any` | El resultado del atributo data |

#### Retornos

`any`

El resultado del atributo data obtenido

#### Definido en

DOM/Data.ts:214

___

### clean

▸ **clean**(`el`): `boolean`

Limpia el Objecto Data del Elemento

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `el` | `Element` | El Elemento |

#### Retornos

`boolean`

#### Definido en

DOM/Data.ts:201

___

### data

▸ **data**(`els`, `...args`): `any`

Establece u Obtiene los atributos de Data

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `els` | `Element` \| `HTMLElement` \| `NodeList` \| `HTMLElement`[] | El o los Elementos |
| `...args` | `any`[] | Cualquier argumento según su accion hasta 2 maximo |

#### Retornos

`any`

#### Definido en

DOM/Data.ts:237

___

### get

▸ **get**(`el`, `key?`): `string` \| `boolean` \| [`ObjAny`](../wiki/Types#objany)

Obtiene el valor del Atributo o todos

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `el` | `Element` | El elemento |
| `key?` | `string` | La clave a buscar si se omite se buscaran todos los atributos |

#### Retornos

`string` \| `boolean` \| [`ObjAny`](../wiki/Types#objany)

#### Definido en

DOM/Data.ts:108

___

### has

▸ **has**(`el`, `key`): `boolean`

Verifica si el elemento tiene la clave dada

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `el` | `Element` \| `HTMLElement` | El elemento |
| `key` | `string` | La clave |

#### Retornos

`boolean`

#### Definido en

DOM/Data.ts:135

___

### remove

▸ **remove**(`el`, `key`): `boolean` \| `void`

Remueve una clave dada

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `el` | `Element` \| `HTMLElement` | El elemento |
| `key` | `any` | La clave |

#### Retornos

`boolean` \| `void`

#### Definido en

DOM/Data.ts:150

___

### set

▸ **set**(`el`, `key`, `data?`): `string` \| [`ObjAny`](../wiki/Types#objany)

Establece el nuevo valor de la propiedad

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `el` | `Element` \| `HTMLElement` | El elemento |
| `key` | `string` \| [`ObjAny`](../wiki/Types#objany) | La clave |
| `data?` | `any` | El valor a establecer |

#### Retornos

`string` \| [`ObjAny`](../wiki/Types#objany)

El nuevo valor establecido

#### Definido en

DOM/Data.ts:89

___

### storage

▸ **storage**(`el`, `config?`): [`ObjAny`](../wiki/Types#objany)

Obtiene los datos Almacenados en el Elemento

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `el` | `Element` \| `HTMLElement` | `undefined` | El elemento |
| `config?` | `boolean` | `true` | Indica si el objeto sera configurable |

#### Retornos

[`ObjAny`](../wiki/Types#objany)

#### Definido en

DOM/Data.ts:63
