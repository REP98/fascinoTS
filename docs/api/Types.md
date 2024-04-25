# Modulo: Types

Tipos definidos para FascinoJS

## Tabla de Contenido

### Interfaces

- [ElementSelector](../wiki/Types.ElementSelector)
- [EventNameSpace](../wiki/Types.EventNameSpace)
- [EventOptionListener](../wiki/Types.EventOptionListener)
- [UrlObj](../wiki/Types.UrlObj)

### Type Aliases

- [ArgSel](../wiki/Types#argsel)
- [FNElements](../wiki/Types#fnelements)
- [FascinoFN](../wiki/Types#fascinofn)
- [Fn$n](../wiki/Types#fn$n)
- [FnAny](../wiki/Types#fnany)
- [HookRecord](../wiki/Types#hookrecord)
- [ListenerFunction](../wiki/Types#listenerfunction)
- [MapFns](../wiki/Types#mapfns)
- [MethodFunction](../wiki/Types#methodfunction)
- [ObjAny](../wiki/Types#objany)
- [ObjEvent](../wiki/Types#objevent)
- [ObjKSt](../wiki/Types#objkst)
- [OffSetObj](../wiki/Types#offsetobj)
- [RequestArr](../wiki/Types#requestarr)
- [RequestResponse](../wiki/Types#requestresponse)
- [RequestURL](../wiki/Types#requesturl)
- [ShowHideFn](../wiki/Types#showhidefn)

## Type Aliases

### ArgSel

Ƭ **ArgSel**: `Selector` \| `Fascino` \| `HTMLElementTagNameMap` \| `HTMLElement` \| `Element` \| `Element`[] \| `ParentNode` \| `string` \| [`ListenerFunction`](../wiki/Types#listenerfunction) \| `NodeList` \| `Window` & typeof `globalThis`

Representa el tipo posible a seleccionar.

#### Definido en

types.d.ts:35

___

### FNElements

Ƭ **FNElements**: (`value`: `Element`, `index`: `number`, `array`: `Element`[]) => `void`

Representa la función para el each de [DOM.Fascino](../wiki/DOM.Fascino).

#### Declaración de Tipo

▸ (`value`, `index`, `array`): `void`

##### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `value` | `Element` | El elemento actual que se está procesando. |
| `index` | `number` | El índice del elemento actual. |
| `array` | `Element`[] | El array que se está procesando. |

##### Retornos

`void`

#### Definido en

types.d.ts:86

___

### FascinoFN

Ƭ **FascinoFN**: (`this`: `Fascino`, ...`args`: `any`[]) => `any`

Función explicita para [DOM.Fascino.addMethod](../wiki/DOM.Fascino#addmethod)

#### Declaración de Tipo

▸ (`this`, `...args`): `any`

##### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `this` | `Fascino` |
| `...args` | `any`[] |

##### Retornos

`any`

#### Definido en

types.d.ts:178

___

### Fn$n

Ƭ **Fn$n**: () => `void`

Representa una función sin argumentos ni retornos

#### Declaración de Tipo

▸ (): `void`

##### Retornos

`void`

#### Definido en

types.d.ts:18

___

### FnAny

Ƭ **FnAny**: (...`args?`: `any`[]) => `any`

Representa una Función con cualquier cantidad de Argumentos de cualquier tipo y cualquier retorno

#### Declaración de Tipo

▸ (`...args?`): `any`

##### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `...args?` | `any`[] |

##### Retornos

`any`

#### Definido en

types.d.ts:22

___

### HookRecord

Ƭ **HookRecord**: `Object`

Representa un registro de ganchos, donde las claves son el nombre del gancho y el valor una matriz de funciones.

#### Index signature

▪ [key: `string`]: (...`args?`: `any`[]) => `any`[]

#### Definido en

types.d.ts:141

___

### ListenerFunction

Ƭ **ListenerFunction**: (`this`: `Document`, `ev`: `any`) => `any`

Representa una función de escucha que se puede adjuntar a un elemento DOM.

#### Declaración de Tipo

▸ (`this`, `ev`): `any`

##### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `this` | `Document` | El contexto (this) dentro del cual se llama a la función de escucha. |
| `ev` | `any` | Un Objecto Evento. |

##### Retornos

`any`

#### Definido en

types.d.ts:30

___

### MapFns

Ƭ **MapFns**: (`value`: `Element`, `index`: `number`, `array`: `Element`[]) => `unknown`

Representa una función que puede utilizarse con el método map().

#### Declaración de Tipo

▸ (`value`, `index`, `array`): `unknown`

##### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `value` | `Element` | El elemento actual que se está procesando. |
| `index` | `number` | El índice del elemento actual. |
| `array` | `Element`[] | El array que se está procesando. |

##### Retornos

`unknown`

#### Definido en

types.d.ts:78

___

### MethodFunction

Ƭ **MethodFunction**: ``"get"`` \| ``"post"`` \| ``"put"`` \| ``"patch"`` \| ``"delete"`` \| ``"json"`` \| ``"head"`` \| ``"api"``

Representa métodos HTTP para definir las Funciones de alias

#### Definido en

types.d.ts:168

___

### ObjAny

Ƭ **ObjAny**: `Object`

Representa un objeto con claves de tipo cadena o número y valores de cualquier tipo.

#### Index signature

▪ [key: `string` \| `number`]: `any`

#### Definido en

types.d.ts:10

___

### ObjEvent

Ƭ **ObjEvent**: `Object`

#### Index signature

▪ [key: `string`]: `Object`[]

#### Definido en

types.d.ts:90

___

### ObjKSt

Ƭ **ObjKSt**: `Object`

Representa un objeto con claves de tipo cadena y valores de cualquier tipo.

#### Index signature

▪ [key: `string`]: `any`

#### Definido en

types.d.ts:14

___

### OffSetObj

Ƭ **OffSetObj**: `Object`

Representa un objeto con propiedades opcionales top y left para valores de desplazamiento.

#### Declaración de Tipo

| Nombre | Tipo |
| :------ | :------ |
| `left?` | `number` |
| `top?` | `number` |

#### Definido en

types.d.ts:64

___

### RequestArr

Ƭ **RequestArr**: [`string` \| `URL`, [`ObjAny`](../wiki/Types#objany)]

Representa un tipo de solicitud como una matriz con una URL o un objeto URL y datos adicionales.

#### Definido en

types.d.ts:160

___

### RequestResponse

Ƭ **RequestResponse**: `RequestInit` \| [`RequestArr`](../wiki/Types#requestarr) \| [`UrlObj`](../wiki/Types.UrlObj)

Representa una respuesta de solicitud, que puede ser un objeto RequestInit, RequestArr, un objeto URL o HTMLFormElement(Formulario).

#### Definido en

types.d.ts:164

___

### RequestURL

Ƭ **RequestURL**: `string` \| `RequestInit` \| [`RequestArr`](../wiki/Types#requestarr) \| [`UrlObj`](../wiki/Types.UrlObj) \| `HTMLFormElement`

Representa una URL para realizar solicitudes, que puede ser una cadena, un objeto RequestInit, un RequestArr, un objeto URL o un HTMLFormElement(Formulario).

#### Definido en

types.d.ts:173

___

### ShowHideFn

Ƭ **ShowHideFn**: (`el`: `Element`) => `never`

Representa una función que se usa cuando se oculta o se muestra un elemento.

#### Declaración de Tipo

▸ (`el`): `never`

##### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `el` | `Element` | El elemento a ocultar o mostrar. |

##### Retornos

`never`

#### Definido en

types.d.ts:70
