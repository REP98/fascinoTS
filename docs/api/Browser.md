# Modulo: Browser

Modulo que exporta Todo Fascino a una variable `_$` para su uso en el navegador

**`Ejemplo`**

```javascript
_$(() => { _$("body > .alert").html("Window Cargado") })
```

**`Requiere`**

[Utils](../wiki/Utils)

**`Requiere`**

[\_$](../wiki/DOM#_$)

**`Requiere`**

[DOM.Fascino](../wiki/DOM.Fascino)

**`Requiere`**

[Http](../wiki/Http)

**`Requiere`**

[Utils/Storage](../wiki/Utils.Storage)

**`Requiere`**

[Utils/Hooks](../wiki/Utils.Hooks)

## Función

### DOMLoad

▸ **DOMLoad**(`callback`, `options?`): `void`

Alias DOMContentLoader, inicializa una función

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `callback` | [`ListenerFunction`](../wiki/Types#listenerfunction) | `undefined` | Función a ejecutar al cargar el navegador |
| `options?` | [`AddEventListenerOptions`](../wiki/Types#addeventlisteneroptions) | `undefined` | Opciones para la función `addEventListener` |

#### Retorna

`void`

#### Definido en

browser.ts: 28

___

### WinLoad

Ejecuta una funcion al cargar Window

▸ **WinLoad**(`callback`, `options?`): `void`

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `callback` | [`ListenerFunction`](../wiki/Types#listenerfunction) | `undefined` | Función a ejecutar al cargar el navegador |
| `options?` | `boolean` \| [`AddEventListenerOptions`](../wiki/Types#addeventlisteneroptions) | `undefined` | Opciones para la función `addEventListener` |

#### Retorna

`void`

#### Definido en

browser.ts: 42

___

### beforeunload

Ejecuta una función antes de cargar el window

▸ **beforeunload**(`callback`): `Fascino`

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `callback` | `Function` \| `string` | `undefined` | La función o nombre de función |

#### Retorna

[`Fascino`](../wiki/DOM.Fascino)

#### Definido en

browser.ts: 50

___

### load

Carga archivos via Fetch

▸ **load**(`url`, `data`, `options?`): `Promise`\<`string` \| `Blob` \| [`ObjAny`](../wiki/Types#objany) | `Error` | `unknown` | `null`\>

**`Ejemplo`**

```javascript
// Añadimos el contenido de file.html al main
_$("main").load("path/to/file.html")
```

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `url` | `HTMLFormElement` \| [`RequestResponse`](../wiki/Types#requestresponse) \| `string` | `undefined` | |
| `data` | `string` \| [`ObjAny`](../wiki/Types#objany) \| `null` | `null` | El contenido del body a cambiar o añadir |
| `options?` | `RequestInit` | `undefined` | Opciones para Fetch |

#### Retorna

`Promise`\<`string` \| `Blob` \| [`ObjAny`](../wiki/Types#objany) | `Error` | `unknown` | `null`\>

#### Definido en

browser.ts: 74
