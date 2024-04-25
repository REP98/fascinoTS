# Clase: session

[Utils/Storage](../wiki/Utils.Storage).session

Esta clase es un alias de [Storages](../wiki/Utils.Storage.Storages) pero configurada para usar `sessionStorage`

## Herencia

- [`Storages`](../wiki/Utils.Storage.Storages)

  ↳ **`session`**

## Tabla de Contenido

### Constructor

- [constructor](../wiki/Utils.Storage.session#constructor)

### Métodos

- [append](../wiki/Utils.Storage.session#append)
- [clear](../wiki/Utils.Storage.session#clear)
- [get](../wiki/Utils.Storage.session#get)
- [getIn](../wiki/Utils.Storage.session#getin)
- [has](../wiki/Utils.Storage.session#has)
- [hasIn](../wiki/Utils.Storage.session#hasin)
- [remove](../wiki/Utils.Storage.session#remove)
- [removeIn](../wiki/Utils.Storage.session#removein)
- [set](../wiki/Utils.Storage.session#set)

## Constructor

### constructor

• **new session**(): [`session`](../wiki/Utils.Storage.session)

#### Retornos

[`session`](../wiki/Utils.Storage.session)

#### Overrides

[Storages](../wiki/Utils.Storage.Storages).[constructor](../wiki/Utils.Storage.Storages#constructor)

#### Definido en

Utils/Storage.ts:178

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

#### Inherited from

[Storages](../wiki/Utils.Storage.Storages).[append](../wiki/Utils.Storage.Storages#append)

#### Definido en

Utils/Storage.ts:121

___

### clear

▸ **clear**(): `void`

Elimina todos los elementos almacenado

#### Retornos

`void`

#### Inherited from

[Storages](../wiki/Utils.Storage.Storages).[clear](../wiki/Utils.Storage.Storages#clear)

#### Definido en

Utils/Storage.ts:86

___

### get

▸ **get**(`name`, `defaults?`): `any`

Obtiene el contenido de una elemento u objecto

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | El nombre del elemento |
| `defaults?` | `any` | `false` | Valor a devolver si el nombre no existe |

#### Retornos

`any`

El contenido o el valor por defecto

#### Inherited from

[Storages](../wiki/Utils.Storage.Storages).[get](../wiki/Utils.Storage.Storages#get)

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

#### Inherited from

[Storages](../wiki/Utils.Storage.Storages).[getIn](../wiki/Utils.Storage.Storages#getin)

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

#### Inherited from

[Storages](../wiki/Utils.Storage.Storages).[has](../wiki/Utils.Storage.Storages#has)

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

#### Inherited from

[Storages](../wiki/Utils.Storage.Storages).[hasIn](../wiki/Utils.Storage.Storages#hasin)

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

#### Inherited from

[Storages](../wiki/Utils.Storage.Storages).[remove](../wiki/Utils.Storage.Storages#remove)

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

#### Inherited from

[Storages](../wiki/Utils.Storage.Storages).[removeIn](../wiki/Utils.Storage.Storages#removein)

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

#### Inherited from

[Storages](../wiki/Utils.Storage.Storages).[set](../wiki/Utils.Storage.Storages#set)

#### Definido en

Utils/Storage.ts:52
