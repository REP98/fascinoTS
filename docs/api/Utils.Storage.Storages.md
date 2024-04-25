# Clase: Storages

[Utils/Storage](../wiki/Utils.Storage).Storages

**`Descripciónde Clase`**

Clase principal para manejar elementos de Storage

**`Ejemplo`**

```js
let local = new local()
local.set("userdata", {user: "rep98", id: 666})
_$("#addInfo").click((e) => {
    local.append("userdata", "session-start", +new Date())
})
_$("#getDate").click((e) => console.log(local.get("userdata")))
/*
 * imprime
 * {user: "rep98", id: 666, "session-start": 1713505639391}
 */
```

## Herencia

- **`Storages`**

  ↳ [`session`](../wiki/Utils.Storage.session)

  ↳ [`local`](../wiki/Utils.Storage.local)

## Tabla de Contenido

### Constructor

- [constructor](../wiki/Utils.Storage.Storages#constructor)

### Métodos

- [append](../wiki/Utils.Storage.Storages#append)
- [clear](../wiki/Utils.Storage.Storages#clear)
- [get](../wiki/Utils.Storage.Storages#get)
- [getIn](../wiki/Utils.Storage.Storages#getin)
- [has](../wiki/Utils.Storage.Storages#has)
- [hasIn](../wiki/Utils.Storage.Storages#hasin)
- [remove](../wiki/Utils.Storage.Storages#remove)
- [removeIn](../wiki/Utils.Storage.Storages#removein)
- [set](../wiki/Utils.Storage.Storages#set)

## Constructor

### constructor

• **new Storages**(`_typestor?`): [`Storages`](../wiki/Utils.Storage.Storages)

Inicializador de elementos

#### Parametros

| Nombre | Tipo | Valor por defecto |
| :------ | :------ | :------ |
| `_typestor?` | `Storage` | `localStorage` |

#### Retornos

[`Storages`](../wiki/Utils.Storage.Storages)

#### Definido en

Utils/Storage.ts:26

## Métodos

### append

▸ **append**(`name`, `key`, `value?`): `boolean`

Añanda un elemento a un objecto previamente alamacenado

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `name` | `string` | Nombre del elemento almacenado |
| `key` | `string` | Clave del objecto |
| `value?` | `any` | Valor de la clave del objecto |

#### Retornos

`boolean`

Verdadero si se añadio el elemento

**`Ejemplo`**

```ts
let myElem = {title: "Fascino"}
let s = new Storages()
// añadimos el elemento
s.set("element1", myElement)
// Si consultamos
s.get("element1") // Retorna {title: "Fascino"}
// uso de append
s.append("element1", "description", "el mejor Framework")
// Si volvemos a consultar obtenemesos
s.get("element1") // Return {title: "Fascino", description: "el mejor Framework"}
```

#### Definido en

Utils/Storage.ts:121

___

### clear

▸ **clear**(): `void`

Elimina todos los elementos almacenado

#### Retornos

`void`

#### Definido en

Utils/Storage.ts:86

___

### get

▸ **get**(`name`, `defaults?`): `any`

Obtiene el contenido de una elemento u objecto

#### Parametros

| Nombre | Tipo | Valor por defecto | Descripción |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | El nombre del elemento |
| `defaults?` | `any` | `false` | Valor a devolver si el nombre no existe |

#### Retornos

`any`

El contenido o el valor por defecto

#### Definido en

Utils/Storage.ts:75

___

### getIn

▸ **getIn**(`name`, `key`, `defaults?`): `any`

Obtiene una clave de un objecto almacenado en un elemento

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `name` | `string` | El nombre del Elemento |
| `key` | `string` | La clave |
| `defaults?` | `any` | valor por defecto si la clave no existe |

#### Retornos

`any`

el valor de la clave o de defaults

#### Definido en

Utils/Storage.ts:152

___

### has

▸ **has**(`name`): `boolean`

Verfica si un nombre existe

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `name` | `string` | Nombre |

#### Retornos

`boolean`

#### Definido en

Utils/Storage.ts:66

___

### hasIn

▸ **hasIn**(`name`, `key`): `boolean`

Verifica si una clave existe en un objecto del nombre del elemento

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `name` | `string` | Nombre del elemento |
| `key` | `string` | Clave a buscar |

#### Retornos

`boolean`

Verdadero si la clave existe

#### Definido en

Utils/Storage.ts:138

___

### remove

▸ **remove**(`name`): `void`

Remueve un elemento dado

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `name` | `string` \| `string`[] | el nombre a remover o matriz de nombres |

#### Retornos

`void`

#### Definido en

Utils/Storage.ts:91

___

### removeIn

▸ **removeIn**(`name`, `key`): `void`

Elimina una clave y su valor de un objecto almacenado

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `name` | `string` | nombre del elemento |
| `key` | `string` | clave a borrar |

#### Retornos

`void`

#### Definido en

Utils/Storage.ts:163

___

### set

▸ **set**(`name`, `value?`): `void`

Agrega un contenido al almacenamiento

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `name` | `string` \| [`ObjAny`](../wiki/Types#objany) | Nombre del alamacenamiento o objecto compuesto por el nombre como clave y el valor |
| `value?` | `any` | El valor si name e string, omitir si name es objecto |

#### Retornos

`void`

#### Definido en

Utils/Storage.ts:52
