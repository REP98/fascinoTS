# Clase: Fascino

[DOM](../wiki/DOM).Fascino

**`Descripción de Clase`**

Clase Inical del Framework

## Herencia

- [`Selector`](../wiki/DOM.Selector.Selector)

  ↳ **`Fascino`**

## Tabla de Contenido

### Constructor

- [constructor](../wiki/DOM.Fascino#constructor)

### Propiedades

- [ctx](../wiki/DOM.Fascino#ctx)
- [length](../wiki/DOM.Fascino#length)
- [name](../wiki/DOM.Fascino#name)
- [version](../wiki/DOM.Fascino#version)

### Accessors

- [first](../wiki/DOM.Fascino#first)
- [last](../wiki/DOM.Fascino#last)
- [node](../wiki/DOM.Fascino#node)

### Métodos

- [\_is](../wiki/DOM.Fascino#_is)
- [\_prop](../wiki/DOM.Fascino#_prop)
- [\_query](../wiki/DOM.Fascino#_query)
- [\_query\_selector](../wiki/DOM.Fascino#_query_selector)
- [\_setOptions](../wiki/DOM.Fascino#_setoptions)
- [\_size](../wiki/DOM.Fascino#_size)
- [\_sizeOut](../wiki/DOM.Fascino#_sizeout)
- [\_toElement](../wiki/DOM.Fascino#_toelement)
- [addClass](../wiki/DOM.Fascino#addclass)
- [adopt](../wiki/DOM.Fascino#adopt)
- [after](../wiki/DOM.Fascino#after)
- [append](../wiki/DOM.Fascino#append)
- [appendTo](../wiki/DOM.Fascino#appendto)
- [attr](../wiki/DOM.Fascino#attr)
- [before](../wiki/DOM.Fascino#before)
- [children](../wiki/DOM.Fascino#children)
- [cleanAttr](../wiki/DOM.Fascino#cleanattr)
- [clone](../wiki/DOM.Fascino#clone)
- [closest](../wiki/DOM.Fascino#closest)
- [contains](../wiki/DOM.Fascino#contains)
- [contents](../wiki/DOM.Fascino#contents)
- [data](../wiki/DOM.Fascino#data)
- [each](../wiki/DOM.Fascino#each)
- [eq](../wiki/DOM.Fascino#eq)
- [fadeIn](../wiki/DOM.Fascino#fadein)
- [fadeOut](../wiki/DOM.Fascino#fadeout)
- [filter](../wiki/DOM.Fascino#filter)
- [find](../wiki/DOM.Fascino#find)
- [fire](../wiki/DOM.Fascino#fire)
- [get](../wiki/DOM.Fascino#get)
- [getEvent](../wiki/DOM.Fascino#getevent)
- [getfirst](../wiki/DOM.Fascino#getfirst)
- [getlast](../wiki/DOM.Fascino#getlast)
- [hasAttr](../wiki/DOM.Fascino#hasattr)
- [hasClass](../wiki/DOM.Fascino#hasclass)
- [hasData](../wiki/DOM.Fascino#hasdata)
- [height](../wiki/DOM.Fascino#height)
- [hide](../wiki/DOM.Fascino#hide)
- [hover](../wiki/DOM.Fascino#hover)
- [html](../wiki/DOM.Fascino#html)
- [import](../wiki/DOM.Fascino#import)
- [index](../wiki/DOM.Fascino#index)
- [innerHeight](../wiki/DOM.Fascino#innerheight)
- [innerWidth](../wiki/DOM.Fascino#innerwidth)
- [insertAfter](../wiki/DOM.Fascino#insertafter)
- [insertBefore](../wiki/DOM.Fascino#insertbefore)
- [is](../wiki/DOM.Fascino#is)
- [left](../wiki/DOM.Fascino#left)
- [map](../wiki/DOM.Fascino#map)
- [matches](../wiki/DOM.Fascino#matches)
- [merge](../wiki/DOM.Fascino#merge)
- [next](../wiki/DOM.Fascino#next)
- [off](../wiki/DOM.Fascino#off)
- [offset](../wiki/DOM.Fascino#offset)
- [on](../wiki/DOM.Fascino#on)
- [one](../wiki/DOM.Fascino#one)
- [outerHTML](../wiki/DOM.Fascino#outerhtml)
- [outerHeight](../wiki/DOM.Fascino#outerheight)
- [outerWidth](../wiki/DOM.Fascino#outerwidth)
- [parent](../wiki/DOM.Fascino#parent)
- [parents](../wiki/DOM.Fascino#parents)
- [position](../wiki/DOM.Fascino#position)
- [prepend](../wiki/DOM.Fascino#prepend)
- [prependTo](../wiki/DOM.Fascino#prependto)
- [prev](../wiki/DOM.Fascino#prev)
- [prop](../wiki/DOM.Fascino#prop)
- [remove](../wiki/DOM.Fascino#remove)
- [removeAttr](../wiki/DOM.Fascino#removeattr)
- [removeClass](../wiki/DOM.Fascino#removeclass)
- [removeData](../wiki/DOM.Fascino#removedata)
- [removeStyle](../wiki/DOM.Fascino#removestyle)
- [replaceClass](../wiki/DOM.Fascino#replaceclass)
- [scrollLeft](../wiki/DOM.Fascino#scrollleft)
- [scrollTop](../wiki/DOM.Fascino#scrolltop)
- [show](../wiki/DOM.Fascino#show)
- [style](../wiki/DOM.Fascino#style)
- [text](../wiki/DOM.Fascino#text)
- [toggleAttr](../wiki/DOM.Fascino#toggleattr)
- [toggleClass](../wiki/DOM.Fascino#toggleclass)
- [toggleData](../wiki/DOM.Fascino#toggledata)
- [top](../wiki/DOM.Fascino#top)
- [trigger](../wiki/DOM.Fascino#trigger)
- [unwrap](../wiki/DOM.Fascino#unwrap)
- [val](../wiki/DOM.Fascino#val)
- [width](../wiki/DOM.Fascino#width)
- [wrap](../wiki/DOM.Fascino#wrap)
- [wrapAll](../wiki/DOM.Fascino#wrapall)
- [addMethod](../wiki/DOM.Fascino#addmethod)

## Constructor

### constructor

• **new Fascino**(`sel?`, `ctx?`): [`Fascino`](../wiki/DOM.Fascino)

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `sel?` | `any` | `undefined` | Selector de elementos o null |
| `ctx?` | `ParentNode` | `document` | Padre del elemento a seleccionar |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Overrides

[Selector](../wiki/DOM.Selector.Selector).[constructor](../wiki/DOM.Selector.Selector#constructor)

#### Definido en

DOM/index.ts:62

## Propiedades

### ctx

• **ctx**: `ParentNode` = `document`

Contexto opcional para la búsqueda de elementos.

#### Inherited from

[Selector](../wiki/DOM.Selector.Selector).[ctx](../wiki/DOM.Selector.Selector#ctx)

#### Definido en

DOM/Selector.ts:66

___

### length

• **length**: `number` = `0`

Longitud de la colección de elementos seleccionados.

#### Inherited from

[Selector](../wiki/DOM.Selector.Selector).[length](../wiki/DOM.Selector.Selector#length)

#### Definido en

DOM/Selector.ts:58

___

### name

• **name**: `string`

Nomre del Paquete

#### Definido en

DOM/index.ts:47

___

### version

• **version**: `string`

Version de Fascino

#### Definido en

DOM/index.ts:42

## Accessors

### first

• `get` **first**(): ``null`` \| `Element` \| `Window` & typeof `globalThis` \| `Document`

Primer elemento seleccionado

#### Retornos

``null`` \| `Element` \| `Window` & typeof `globalThis` \| `Document`

**`Types`**

#### Definido en

DOM/index.ts:170

___

### last

• `get` **last**(): `any`

Ultimo elemento

#### Retornos

`any`

**`Types`**

#### Definido en

DOM/index.ts:183

___

### node

• `get` **node**(): `Element`[]

Obtiene los elementos seleccionados por el selector.

#### Retornos

`Element`[]

#### Inherited from

Selector.node

#### Definido en

DOM/Selector.ts:91

• `set` **node**(`element`): `void`

Establece los elementos a seleccionar por el selector

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `element` | `string` \| `Element` \| `Element`[] \| `Document`[] |

#### Retornos

`void`

#### Inherited from

Selector.node

#### Definido en

DOM/Selector.ts:96

## Métodos

### \_is

▸ **_is**(`prop`): `boolean`

Busca verifica si un elemnto es checkd

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `prop` | `string` |

#### Retornos

`boolean`

#### Definido en

DOM/index.ts:74

___

### \_prop

▸ **_prop**(`name`, `value?`): `any`

Obtiene o establece una propiedad de un elemento

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `name` | `string` | El nombre de la propiedad |
| `value?` | `any` | El valor a establecer o undefined si solo se quiere obtener |

#### Retornos

`any`

#### Definido en

DOM/index.ts:86

___

### \_query

▸ **_query**(`sel`): `Element`[]

Realiza una búsqueda de elementos utilizando el selector especificado.

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `sel` | `any` | Selector para buscar elementos en el DOM. |

#### Retornos

`Element`[]

- Array de elementos encontrados por la funcion `querySelectorAll`.

#### Inherited from

[Selector](../wiki/DOM.Selector.Selector).[_query](../wiki/DOM.Selector.Selector#_query)

#### Definido en

DOM/Selector.ts:196

___

### \_query\_selector

▸ **_query_selector**(`selector`): [`Fascino`](../wiki/DOM.Fascino)

Realiza una búsqueda de elementos utilizando el selector especificado y actualiza la colección de elementos.

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `selector` | `any` | Selector para buscar elementos en el DOM. |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

- Instancia actualizada de Selector.

#### Inherited from

[Selector](../wiki/DOM.Selector.Selector).[_query_selector](../wiki/DOM.Selector.Selector#_query_selector)

#### Definido en

DOM/Selector.ts:136

___

### \_setOptions

▸ **_setOptions**(`node`, `options`): `void`

Método privado que ayuda a establecer opciones a un elemento dado.

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `node` | `Element` \| `NodeList` | Nodo |
| `options` | [`ObjKSt`](../wiki/Types#objkst) | Opciones |

#### Retornos

`void`

#### Definido en

DOM/index.ts:103

___

### \_size

▸ **_size**(`prop`, `val?`): `string` \| `number` \| [`Fascino`](../wiki/DOM.Fascino)

Tamano real del elemento

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `prop` | `string` | La propiedad |
| `val?` | `string` \| `number` \| `boolean` | el valor a asinar o undefined si solo se quiere obtener |

#### Retornos

`string` \| `number` \| [`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:147

___

### \_sizeOut

▸ **_sizeOut**(`prop`, `val?`): `number` \| [`Fascino`](../wiki/DOM.Fascino)

Tamaño Externo del elemento

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `prop` | `string` | La propiedad |
| `val?` | `string` \| `number` \| `boolean` | el valor o undefined si solo se quiere obtener |

#### Retornos

`number` \| [`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:120

___

### \_toElement

▸ **_toElement**(`element`): `Element`[] \| `Document`[] \| `HTMLElement`[]

Convierte una colección de elementos en un array de elementos o HTMLElements.

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `element` | `any`[] | Colección de elementos a convertir. |

#### Retornos

`Element`[] \| `Document`[] \| `HTMLElement`[]

- Array de elementos o HTMLElements.

#### Inherited from

[Selector](../wiki/DOM.Selector.Selector).[_toElement](../wiki/DOM.Selector.Selector#_toelement)

#### Definido en

DOM/Selector.ts:112

___

### addClass

▸ **addClass**(`...arg`): [`Fascino`](../wiki/DOM.Fascino)

Agrega clases al elemento dado

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `...arg` | `string`[] | Lista de clases separadas por coma(,) |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

**`Ejemplo`**

```Javascript
_$(mi-elem).addClass('miclass')
_$(mi-elem).addClass('miclass1', 'miclass2' /*...*\)
```

#### Definido en

DOM/index.ts:853

___

### adopt

▸ **adopt**(): [`Fascino`](../wiki/DOM.Fascino)

Transfiere un node desde otro document al documento del método

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:540

___

### after

▸ **after**(`html`, `position?`): [`Fascino`](../wiki/DOM.Fascino)

Agrega un elemento o etiquetas HTML después del elemento dado

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `html` | `string` \| `Element` \| `HTMLElement` | `undefined` | El Elemento o Etiqueta HTML |
| `position?` | `InsertPosition` | `'afterbegin'` | Posición a insertar |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:756

___

### append

▸ **append**(`childNode`, `options?`): `boolean` \| [`Fascino`](../wiki/DOM.Fascino)

Agrega un elemento al padre seleccionado

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `childNode` | `HTMLElement` | Nodo Hijo |
| `options?` | [`ObjAny`](../wiki/Types#objany) | Opciones |

#### Retornos

`boolean` \| [`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:443

___

### appendTo

▸ **appendTo**(`parentNode`, `options?`): `boolean` \| [`Fascino`](../wiki/DOM.Fascino)

Agrega el elemento seleccionado al nuevo padre

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `parentNode` | `Element` \| `HTMLElement` \| [`Fascino`](../wiki/DOM.Fascino) | Nodo Padre |
| `options?` | [`ObjAny`](../wiki/Types#objany) | Opciones |

#### Retornos

`boolean` \| [`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:467

___

### attr

▸ **attr**(`...args`): `any`

Obtiene o Establece los Atributos de un elemento

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `...args` | `any`[] |

#### Retornos

`any`

**`Ejemplo`**

```Javascript
let miElement = _$("input")
miElement.attr('name', 'paswd') // Establece el Atributo Name a passwd
miElement.attr({
  id:'miElementID', // Establece el Id a miElementID y cambia el placeholder
  placeholder:'Escribe Aquí'
})
miElement.attr() // Re-establece los Atributos y retorna un NodeMap con ellos en caso de no poseer atributos retornara un Objecto Fascino
miElement.attr('name') // Retorna 'passwd' o false
miElement.attr(['name', 'id']) // Retorna un objecto {miElementID: {name: 'passwd', id:'miElementID'}}
// Ademas podemos pasar una función que se invocara dentro de un bucle que recorre los atributos
miElement.attr( function(attrName, attrValue, Attr) {
  console.log(
      this, // El Elemento iterado
      attrName, // El nombre del atributo
      attrValue, // El Valor del Attributo
      Attr // Lista de todos los atributos
)
})
```

#### Definido en

DOM/index.ts:1320

___

### before

▸ **before**(`html`, `position?`): [`Fascino`](../wiki/DOM.Fascino)

Agrega un elemento o HTML antes del elemento dado

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `html` | `string` \| `Element` \| `HTMLElement` | `undefined` | La etiqueta HTML o element |
| `position?` | `InsertPosition` | `'beforebegin'` | Posición de elemento |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:771

___

### children

▸ **children**(`sel?`): `Element`[]

Obtiene los hijos de un elemento

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `sel?` | ``null`` \| `string` | `null` | Selector o elemento hijo a buscar |

#### Retornos

`Element`[]

Lista de hijos

#### Definido en

DOM/index.ts:371

___

### cleanAttr

▸ **cleanAttr**(): [`Fascino`](../wiki/DOM.Fascino)

Elimina todos los atributos de un elemento

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:1448

___

### clone

▸ **clone**(`deep?`): [`Fascino`](../wiki/DOM.Fascino)

Clona el elemento seleccionado

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `deep?` | `boolean` | `false` | Indica si se clona todas sus hijos |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:521

___

### closest

▸ **closest**(`selector?`): `Element`[] \| [`Fascino`](../wiki/DOM.Fascino)

Busca el ascendiente más cercano al elemento seleccionado

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `selector?` | `string` | El Selector |

#### Retornos

`Element`[] \| [`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:621

___

### contains

▸ **contains**(`s`): `boolean`

Verifica si el elemento es hijo del Elemento seleccionado

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `s` | `string` | Selector CSS |

#### Retornos

`boolean`

#### Definido en

DOM/index.ts:362

___

### contents

▸ **contents**(): [`Fascino`](../wiki/DOM.Fascino)

Obtiene el contenido de un Iframe o Template

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:549

___

### data

▸ **data**(`...args`): `any`

Establece u Obtiene los datos del Elemento Dataset

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `...args` | `any`[] |

#### Retornos

`any`

**`Ejemplo`**

```Javascript
let miElement = _$("#div")
miElement.data('role', 'dialog')  // Establece el Rol a dialog
// Esteble al data-json al objecto dado
miElement.data({
  json:{
     a: 1,
     b: 2
}
})
miElement.data() // Retorna un Objecto con todos los datos del Atributo data
miElement.data('role') // Retorna Dialog
miElement.data(['role','json']) // Retornara un Objecto {miElementID: {role: 'dialog', json: {a:1,b:2}}}
```

#### Definido en

DOM/index.ts:1480

___

### each

▸ **each**(`callback`): [`Fascino`](../wiki/DOM.Fascino)

Recorre los elementos

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `callback` | [`FNElements`](../wiki/Types#fnelements) | Argumentos |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:267

___

### eq

▸ **eq**(`i`): [`Fascino`](../wiki/DOM.Fascino)

Busca, valida y obtiene el elemento dado por su posición dentro de la matriz de elementos

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `i` | `number` | posición del elemento |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:226

___

### fadeIn

▸ **fadeIn**(`fn?`, `time?`): [`Fascino`](../wiki/DOM.Fascino)

Muestra un elemento con desvanecimiento suave

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `fn?` | `number` \| [`ShowHideFn`](../wiki/Types#showhidefn) | `undefined` | Funcion a ejecutar despues del efecto |
| `time?` | `number` | `600` | Tiempo del desvanecimiento |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

**`Member Of`**

Fascino

#### Definido en

DOM/index.ts:1234

___

### fadeOut

▸ **fadeOut**(`fn?`, `time?`): [`Fascino`](../wiki/DOM.Fascino)

Funcion que Oculta con un desvanecimiento suave

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `fn?` | `number` \| [`ShowHideFn`](../wiki/Types#showhidefn) | `undefined` | Función a ejecutar luego de ocultar |
| `time?` | `number` | `600` | Tiempo del desvanecimiento |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

**`Member Of`**

Fascino

#### Definido en

DOM/index.ts:1271

___

### filter

▸ **filter**(`fn`): [`Fascino`](../wiki/DOM.Fascino)[]

Crea una nueva selección de elemento que cumplan con la condición dada en la función

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `fn` | `string` \| `Function` | Funcion o selector |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)[]

#### Definido en

DOM/index.ts:334

___

### find

▸ **find**(`sel`): `boolean` \| [`Fascino`](../wiki/DOM.Fascino)

Busca un elemento hijo por su selector CSS

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `sel` | `any` | Selector CSS valido |

#### Retornos

`boolean` \| [`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:350

___

### fire

▸ **fire**(`name`, `data?`): [`Fascino`](../wiki/DOM.Fascino)

Dispara o Crea un Evento Personalizado

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `name` | `string` | Nombre del Evento |
| `data?` | [`ObjAny`](../wiki/Types#objany) | Información del Evento |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:1582

___

### get

▸ **get**(`ix?`): `Element` \| `Element`[]

Obtiene el elemento dado por su index o todos los elemetos

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `ix?` | ``null`` \| `number` | `null` | Index a buscar |

#### Retornos

`Element` \| `Element`[]

Lista de elementos encotrados

#### Definido en

DOM/index.ts:208

___

### getEvent

▸ **getEvent**(`name`, `index?`): `any`

Obtiene las lista de eventos asignados aun elemento, si no se pasa ningun argumento se obtendran todos los eventos

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | Nombre del Evento |
| `index?` | `number` | `-1` | Posición del evento a buscar |

#### Retornos

`any`

#### Definido en

DOM/index.ts:1653

___

### getfirst

▸ **getfirst**(): [`Fascino`](../wiki/DOM.Fascino)

Primer elemento, envuelto en new Fascino

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:193

___

### getlast

▸ **getlast**(): [`Fascino`](../wiki/DOM.Fascino)

Ultimo elemento, envuelto en new Fascino

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:200

___

### hasAttr

▸ **hasAttr**(`attr`): `boolean`

Verifica si el elemento tiene el atributo dado

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `attr` | `string` |

#### Retornos

`boolean`

#### Definido en

DOM/index.ts:1417

___

### hasClass

▸ **hasClass**(`className`): `boolean`

Verifica si el elemento posee una clase

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `className` | `string` | Nombre de la clase |

#### Retornos

`boolean`

Verdadero si existe

#### Definido en

DOM/index.ts:900

___

### hasData

▸ **hasData**(`key`): `boolean`

Verifica si el Elemento tiene un atributo data dado

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `key` | `string` | Nombre sin el data |

#### Retornos

`boolean`

#### Definido en

DOM/index.ts:1508

___

### height

▸ **height**(`val?`): `string` \| `number` \| [`Fascino`](../wiki/DOM.Fascino)

Obtiene o establece la altura del elemento

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `val?` | `string` \| `number` |

#### Retornos

`string` \| `number` \| [`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:1163

___

### hide

▸ **hide**(`callback?`): [`Fascino`](../wiki/DOM.Fascino)

Oculta un ELemento y ejecuta la función dada

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `callback?` | [`ShowHideFn`](../wiki/Types#showhidefn) |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:1179

___

### hover

▸ **hover**(`fnOver`, `fnOut`): [`Fascino`](../wiki/DOM.Fascino)

Crea el evento hover

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `fnOver` | (`ev`: `Event`) => `any` | Función de entrada |
| `fnOut` | (`ev`: `Event`) => `any` | Función de Salida |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:1641

___

### html

▸ **html**(`txt?`): `string` \| [`Fascino`](../wiki/DOM.Fascino)

Obtiene o Establece el contenido HTML del elemento seleccionado

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `txt?` | `string` \| `any`[] \| `Element` \| [`Fascino`](../wiki/DOM.Fascino) | El texto |

#### Retornos

`string` \| [`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:794

___

### import

▸ **import**(`deep?`): [`Fascino`](../wiki/DOM.Fascino)

Crea una copia de un nodo desde un documento externo

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `deep?` | `boolean` | `true` | Indica si se copian sus hijos |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:531

___

### index

▸ **index**(`selector?`, `parent?`): `number`

Obtiene la posición del elemento dentro de su padre

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `selector?` | `string` | selector |
| `parent?` | `ParentNode` | padre |

#### Retornos

`number`

#### Definido en

DOM/index.ts:310

___

### innerHeight

▸ **innerHeight**(): `number`

Obtiene el Alto interno del elemento

#### Retornos

`number`

#### Definido en

DOM/index.ts:1155

___

### innerWidth

▸ **innerWidth**(): `number`

Obtiene el Ancho interno del elemento

#### Retornos

`number`

#### Definido en

DOM/index.ts:1147

___

### insertAfter

▸ **insertAfter**(`elements`): [`Fascino`](../wiki/DOM.Fascino)

Inserta un elemento después del elemento seleccionado

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `elements` | `string` \| `Element` | Elementos a insertar |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:665

___

### insertBefore

▸ **insertBefore**(`elements`): [`Fascino`](../wiki/DOM.Fascino)

Inserta un elemento antes del elemento seleccionado

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `elements` | `string` \| `Element` | Los Elementos |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:645

___

### is

▸ **is**(`s`): `boolean`

Verifica de que tipo es el selector

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `s` | `any` |

#### Retornos

`boolean`

#### Definido en

DOM/index.ts:383

___

### left

▸ **left**(`v?`, `m?`): `string` \| `number`

Obtiene o Establece la posición horizontal del elemento

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `v?` | `string` \| `number` | `undefined` | Nueva posición |
| `m?` | `boolean` | `false` | Si se debe incluir el margen |

#### Retornos

`string` \| `number`

#### Definido en

DOM/index.ts:1113

___

### map

▸ **map**(`callbackFn`): [`Fascino`](../wiki/DOM.Fascino)

Crea una nueva matriz de elementos a través de la función dada

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `callbackFn` | [`MapFns`](../wiki/Types#mapfns) | Función |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:290

___

### matches

▸ **matches**(`selector`): `Element`[]

Verifica si el elemento es seleccionable por el Selector

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `selector` | `string` | Selector CSS |

#### Retornos

`Element`[]

#### Definido en

DOM/index.ts:276

___

### merge

▸ **merge**(`elements`): [`Fascino`](../wiki/DOM.Fascino)

Combina Elementos

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `elements` | `any` | Matriz de elementos nueva |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:299

___

### next

▸ **next**(`selector?`): `any`[] \| [`Fascino`](../wiki/DOM.Fascino)

Obtiene o busca el hermano siguiente

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `selector?` | `string` | El Selector |

#### Retornos

`any`[] \| [`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:607

___

### off

▸ **off**(`eventsList`, `sel?`, `options?`, `ix?`): [`Fascino`](../wiki/DOM.Fascino)

Desvincula el Evento para un elemento

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `eventsList` | `string` \| `string`[] | `undefined` | El nombre del Evento |
| `sel?` | `string` | `undefined` | Namespace o selector |
| `options?` | `number` \| [`ObjAny`](../wiki/Types#objany) | `undefined` | Opciones de AddEventListiner |
| `ix?` | `number` | `0` | Index del evento |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:1558

___

### offset

▸ **offset**(`val?`): [`Fascino`](../wiki/DOM.Fascino) \| [`OffSetObj`](../wiki/Types#offsetobj)

Obtiene o Establece la posición del Elemento

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `val?` | [`OffSetObj`](../wiki/Types#offsetobj) | Objeto {top,left} |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino) \| [`OffSetObj`](../wiki/Types#offsetobj)

#### Definido en

DOM/index.ts:1044

___

### on

▸ **on**(`eventsList`, `sel`, `handler?`, `options?`): [`Fascino`](../wiki/DOM.Fascino)

Establece el Evento para un elemento<br>
Si va usar eventos estándar es mejor que use los de la lista `_$().click(), $().blur() ...`

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `eventsList` | `string` \| `string`[] | `undefined` | El nombre del Evento |
| `sel` | `string` \| `Function` | `undefined` | Namespace o selector |
| `handler?` | `Function` | `undefined` | Función a ejecutar |
| `options?` | `boolean` \| [`ObjAny`](../wiki/Types#objany) | `false` | Opciones de AddEventListiner |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:1545

___

### one

▸ **one**(`events`, `sel`, `handler`, `options?`): [`Fascino`](../wiki/DOM.Fascino)

Ejecuta el evento solo para el primer evento dado

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `events` | `string` \| `string`[] | El evento |
| `sel` | `string` \| `Function` | Namespace o selector |
| `handler` | `Function` | Función a ejecutar |
| `options?` | [`ObjAny`](../wiki/Types#objany) | Opciones de AddEventListiner |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:1571

___

### outerHTML

▸ **outerHTML**(`withElement?`): `string` \| [`Fascino`](../wiki/DOM.Fascino)

Obtiene el HTML o envoltura del elemento dado

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `withElement?` | `boolean` | `false` | Indica si se retorna como elemento |

#### Retornos

`string` \| [`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:837

___

### outerHeight

▸ **outerHeight**(`val?`): `string` \| `number` \| [`Fascino`](../wiki/DOM.Fascino)

Obtiene o Establece la Altura total del elemento

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `val?` | `string` \| `number` |

#### Retornos

`string` \| `number` \| [`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:1036

___

### outerWidth

▸ **outerWidth**(`val?`): `string` \| `number` \| [`Fascino`](../wiki/DOM.Fascino)

Obtiene o Establece el Ancho total del elemento

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `val?` | `string` \| `number` | Ancho del Elemento |

#### Retornos

`string` \| `number` \| [`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:1028

___

### parent

▸ **parent**(): [`Fascino`](../wiki/DOM.Fascino)

Padre del Elemento

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:583

___

### parents

▸ **parents**(`selectorParent?`): [`Fascino`](../wiki/DOM.Fascino)

Obtiene el o los padres de un elemento

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `selectorParent?` | `string` | Selector padre |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:568

___

### position

▸ **position**(`margin?`): `undefined` \| [`OffSetObj`](../wiki/Types#offsetobj)

Obtiene la Posición del elemento

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `margin?` | `boolean` | `false` | Verdadero si se incluye el margen |

#### Retornos

`undefined` \| [`OffSetObj`](../wiki/Types#offsetobj)

#### Definido en

DOM/index.ts:1083

___

### prepend

▸ **prepend**(`childNode`, `options?`): `boolean` \| [`Fascino`](../wiki/DOM.Fascino)

Agrega un nuevo elemento al principio del padre seleccionado

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `childNode` | `Element` \| `HTMLElement` \| [`Fascino`](../wiki/DOM.Fascino) | Nodo Hijo |
| `options?` | [`ObjAny`](../wiki/Types#objany) | Opciones |

#### Retornos

`boolean` \| [`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:486

___

### prependTo

▸ **prependTo**(`parent`, `options?`): `boolean` \| [`Fascino`](../wiki/DOM.Fascino)

Agrega el elemento seleccionado al nuevo padre

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `parent` | `Element` \| `HTMLElement` \| [`Fascino`](../wiki/DOM.Fascino) | Nodo Parent |
| `options?` | [`ObjAny`](../wiki/Types#objany) | Opciones |

#### Retornos

`boolean` \| [`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:505

___

### prev

▸ **prev**(`selector?`): `any`[] \| [`Fascino`](../wiki/DOM.Fascino)

Obtiene o busca el hermano anterior

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `selector?` | `string` | El Selector |

#### Retornos

`any`[] \| [`Fascino`](../wiki/DOM.Fascino)

[description]

#### Definido en

DOM/index.ts:593

___

### prop

▸ **prop**(`name`, `value?`): `any`

Método público de Fascino._prop

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `name` | `string` | Nombre de la propiedad |
| `value?` | `any` | Valor de la propiedad o undefined |

#### Retornos

`any`

#### Definido en

DOM/index.ts:434

___

### remove

▸ **remove**(`selector?`): [`Fascino`](../wiki/DOM.Fascino)

Elimina uno o todos los elementos del DOM

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `selector?` | `string` | el selector a buscar para eliminar |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:738

___

### removeAttr

▸ **removeAttr**(`...args`): [`Fascino`](../wiki/DOM.Fascino)

Remueve los atributos dados

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `...args` | `string`[] | Lista de Atributos |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

**`Ejemplo`**

```Javascript
_$("#miElement").removeAttr('style', 'name')
```

#### Definido en

DOM/index.ts:1398

___

### removeClass

▸ **removeClass**(`...args`): [`Fascino`](../wiki/DOM.Fascino)

Elimina Clases del elemento seleccionado

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `...args` | `string`[] |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:863

___

### removeData

▸ **removeData**(`...keys`): [`Fascino`](../wiki/DOM.Fascino)

Remueve los Atributos data

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `...keys` | `string`[] | Lista de nombres de data sin el data |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

**`Ejemplo`**

```Javascript
// <input id="miElement" data-role='pick' data-color="#fff">
_$('#miElement').removeData('role', 'color');
// Obtendremos
// <input id="miElement">
```

#### Definido en

DOM/index.ts:1498

___

### removeStyle

▸ **removeStyle**(`...name`): [`Fascino`](../wiki/DOM.Fascino)

Remueve todos o los estilos establecidos

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `...name` | `string`[] | Lista de Estilo |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

**`Ejemplo`**

```Javascript
_$("#miElement").removeStyle('border', 'color') // Removerá los estilos del border y el color
```

#### Definido en

DOM/index.ts:978

___

### replaceClass

▸ **replaceClass**(`oldClass`, `newClass`): [`Fascino`](../wiki/DOM.Fascino)

Reemplaza una clase por otra

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `oldClass` | `string` | Clase vieja |
| `newClass` | `string` | Clase nueva |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

**`Ejemplo`**

```Javascript
_$("#miElement").replaceClass('oldClass', 'NewClass')
```

#### Definido en

DOM/index.ts:890

___

### scrollLeft

▸ **scrollLeft**(`val?`): `string` \| `number` \| [`Fascino`](../wiki/DOM.Fascino)

Obtiene o estable el valor de la barra de desplazamiento Horizontal

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `val?` | `string` \| `number` | El Valor del scroll |

#### Retornos

`string` \| `number` \| [`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:1010

___

### scrollTop

▸ **scrollTop**(`val?`): `string` \| `number` \| [`Fascino`](../wiki/DOM.Fascino)

Obtiene o estable el valor de la barra de desplazamiento vertical

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `val?` | `string` \| `number` | El valor del Scroll |

#### Retornos

`string` \| `number` \| [`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:992

___

### show

▸ **show**(`callback?`): [`Fascino`](../wiki/DOM.Fascino)

Muestra un elemento y ejecuta la función dada

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `callback?` | [`ShowHideFn`](../wiki/Types#showhidefn) |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:1203

___

### style

▸ **style**(`...arg?`): `string` \| `Object` \| `any`[] \| [`Fascino`](../wiki/DOM.Fascino)

Agrega u Obtiene estilos CSS a los Elementos

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `...arg?` | `any` |

#### Retornos

`string` \| `Object` \| `any`[] \| [`Fascino`](../wiki/DOM.Fascino)

**`Ejemplo`**

```Javascript
let miElement = _$("#myEl")
miElement.style('display', 'none') // establece la propiedad CSS a display none
miElement.style({
  border: '1px solid #ff0' // Establece un border Amarillo
  color: '#000' // y un color de texto Negro
})
miElement.style('display') // retorna none
miElement.style() // Retorna todos los Estilos establecidos(CSSStyleDeclaration)
miElement.style([
  'border', 'color' // Retorna un Objecto {IDfromMiElem: {border: '1px solid #ff0', color: '#000'}}
]) // Importante: si el elemento no tiene ID se le creara uno aleatorio
```

#### Definido en

DOM/index.ts:924

___

### text

▸ **text**(`txt?`): `string` \| [`Fascino`](../wiki/DOM.Fascino)

Obtiene o Establece el texto al elemento seleccionado

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `txt?` | `string` | El texto a establecer o undefined para obtener |

#### Retornos

`string` \| [`Fascino`](../wiki/DOM.Fascino)

el texto del elemento

#### Definido en

DOM/index.ts:785

___

### toggleAttr

▸ **toggleAttr**(`name`, `value?`): [`Fascino`](../wiki/DOM.Fascino)

Alterna los Atributos y su valor

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `name` | `string` | Nombre del Atributo |
| `value?` | `string` | Valor d el Atributo |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:1428

___

### toggleClass

▸ **toggleClass**(`...args`): [`Fascino`](../wiki/DOM.Fascino)

Intercambia clases del elemento dado

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `...args` | `string`[] | Lista de Clases a cambiar |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:873

___

### toggleData

▸ **toggleData**(`name`, `value`): `any`

Alterna entre los atributos data

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `name` | `string` | Nombre del Atributo sin el data |
| `value` | `string` \| [`ObjAny`](../wiki/Types#objany) \| `string`[] | Valor del atributo data |

#### Retornos

`any`

#### Definido en

DOM/index.ts:1527

___

### top

▸ **top**(`v?`, `m?`): `string` \| `number`

Obtiene o Establece la posición vertical del elemento

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `v?` | `string` \| `number` | `undefined` | Nueva posición |
| `m?` | `boolean` | `false` | Si se debe incluir el margen |

#### Retornos

`string` \| `number`

#### Definido en

DOM/index.ts:1131

___

### trigger

▸ **trigger**(`name`, `data?`): [`Fascino`](../wiki/DOM.Fascino)

Dispara un evento

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `name` | `string` | Nombre del Evento |
| `data?` | [`ObjAny`](../wiki/Types#objany) | Información del evento |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:1620

___

### unwrap

▸ **unwrap**(): [`Fascino`](../wiki/DOM.Fascino)

Desencierra los elemento

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:724

___

### val

▸ **val**(`value?`): `string` \| [`Fascino`](../wiki/DOM.Fascino)

Obtiene o Establece el valor de un elemento dado

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `value?` | `string` | El valor a asignar |

#### Retornos

`string` \| [`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:821

___

### width

▸ **width**(`val?`): `string` \| `number` \| [`Fascino`](../wiki/DOM.Fascino)

Obtiene o establece la anchura del elemento

#### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `val?` | `string` \| `number` |

#### Retornos

`string` \| `number` \| [`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:1171

___

### wrap

▸ **wrap**(`parent`): [`Fascino`](../wiki/DOM.Fascino)

Encierra un elemento

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `parent` | `string` \| `Element` \| `ParentNode` | El padre |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:685

___

### wrapAll

▸ **wrapAll**(`el`): [`Fascino`](../wiki/DOM.Fascino)

Busca y encierra todos los elemento del tipo dado

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `el` | `string` \| `Element` \| `HTMLElement` | El Elemento |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

DOM/index.ts:707

___

### addMethod

▸ **addMethod**(`name`, `callback`): [`Fascino`](../wiki/DOM.Fascino)

Añade funciones a Fascino

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `name` | `string` | Nombre de la función |
| `callback` | [`FascinoFN`](../wiki/Types#fascinofn) | Función a asignar |

#### Retornos

[`Fascino`](../wiki/DOM.Fascino)

**`Static`**

**`Ejemplo`**

```typescript
Fascino.addMethod("saludar", (n: string) => {
	// Nos aseguramos de afectar solo el primer elemento
	let first = this.first
	let txt = first.text() // Obtenemos el Texto
	// Establecemos el texto
	first.text(txt + " " + n)
})
```
uso
```Javascript
_$("p").saludar("añado esto a texto")
```

#### Definido en

DOM/index.ts:254
