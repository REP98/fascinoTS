# Clase: FsEvent

[DOM/Event](../wiki/DOM.Event).FsEvent

**`Descripción de Clase`**

Manejador de Eventos

**`Requieres`**

DOM/Data.Data

**`Requieres`**

Utils

## Tabla de Contenido

### Constructor

- [constructor](../wiki/DOM.Event.FsEvent#constructor)

### Propiedades

- [KEY](../wiki/DOM.Event.FsEvent#key)
- [List](../wiki/DOM.Event.FsEvent#list)

### Métodos

- [get\_event](../wiki/DOM.Event.FsEvent#get_event)

### Eventos

- [create](../wiki/DOM.Event.FsEvent#create)
- [fire](../wiki/DOM.Event.FsEvent#fire)
- [off](../wiki/DOM.Event.FsEvent#off)
- [on](../wiki/DOM.Event.FsEvent#on)
- [once](../wiki/DOM.Event.FsEvent#once)

## Constructor

### constructor

• **new FsEvent**(): [`FsEvent`](../wiki/DOM.Event.FsEvent)

Inicializa los Eventos

#### Retornos

[`FsEvent`](../wiki/DOM.Event.FsEvent)

#### Definido en

DOM/Event.ts:36

## Propiedades

### KEY

• `Readonly` **KEY**: `string` = `"FsEvent"`

Nombre del Evento dentro del Elemento

#### Definido en

DOM/Event.ts:27

___

### List

• `Readonly` **List**: `string`[] = `ListEvents`

Lista de Eventos Javascript

#### Definido en

DOM/Event.ts:32

## Métodos

### get\_event

▸ **get_event**(`...args`): `any`

Obtiene un evento almacenado en el elemento

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `...args` | [`Element`, string?, number?] | tupla con Elemento, evento y posición |

#### Retornos

`any`

#### Definido en

DOM/Event.ts:148

## Eventos

### create

▸ **create**(`name`, `customEvent?`): `CustomEvent`\<`any`\>

Crea un nuevo Evento

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `name` | `string` | Nombre del evento |
| `customEvent?` | `any` | Objecto o función del evento a crear |

#### Retornos

`CustomEvent`\<`any`\>

#### Definido en

DOM/Event.ts:317

___

### fire

▸ **fire**(`el`, `event`): `boolean`

Dispara un evento

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `el` | `Element` | Elemento |
| `event` | `Event` | Evento a disparar |

#### Retornos

`boolean`

#### Definido en

DOM/Event.ts:307

___

### off

▸ **off**(`el`, `eventList`, `selector?`, `options?`, `index?`): `Element`

Desvincula un evento a un elemento

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `el` | `Element` | `undefined` | Elemento |
| `eventList` | `string` \| `string`[] | `undefined` | Evento o lista de Evento |
| `selector?` | `string` \| [`ObjAny`](../wiki/Types#objany) | `undefined` | Selector CSS |
| `options?` | `number` \| [`ObjAny`](../wiki/Types#objany) | `undefined` | Opciones |
| `index?` | `number` | `0` | Posción de la función |

#### Retornos

`Element`

#### Definido en

DOM/Event.ts:260

___

### on

▸ **on**(`el`, `eventList`, `selector?`, `callback?`, `options?`): `any`

Asigna, ejecuta o establece un evento al elemento dado

#### Parametros

| Nombre | Tipo | Valor por defecto | Description |
| :------ | :------ | :------ | :------ |
| `el` | `Element` | `undefined` | Elemento |
| `eventList` | `string` \| `string`[] | `undefined` | Evento o lista de Evento |
| `selector?` | `string` \| `Function` | `undefined` | Selector CSS |
| `callback?` | `Function` \| [`ObjAny`](../wiki/Types#objany) | `undefined` | Función |
| `options?` | `boolean` \| [`ObjAny`](../wiki/Types#objany) | `false` | Opciones |

#### Retornos

`any`

**`Ejemplo`**

```ts
_$("button").on("click", (e) => console.log("me presionaste"))
// ó
_$("li").on("click", "a", function(e){
console.log("HREF=", this.href)
})
```

#### Definido en

DOM/Event.ts:170

___

### once

▸ **once**(`el`, `eventList`, `selector?`, `callback?`, `options?`): `any`

Ejecuta un evento solo una vez.

#### Parametros

| Nombre | Tipo | Descripción |
| :------ | :------ | :------ |
| `el` | `Element` | Elemento |
| `eventList` | `string` \| `string`[] | Evento o lista de Evento |
| `selector?` | `string` \| `Function` | Selector CSS |
| `callback?` | `Function` \| [`ObjAny`](../wiki/Types#objany) | Función |
| `options?` | [`ObjAny`](../wiki/Types#objany) | Opciones |

#### Retornos

`any`

[description]

**`Ejemplo`**

```ts
_$("button").once("click", (e) => console.log("me presionaste 1"))
// ó
_$("li").once("click", "a", function(e){
console.log("HREF=", this.href)
})
// Se se vuelve ha hacer click sobre alguno de los dos no pasara nada
```

#### Definido en

DOM/Event.ts:242
