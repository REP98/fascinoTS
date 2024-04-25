# Interface: EventOptionListener

[Types](../wiki/Types).EventOptionListener

Interfaz para representar un objeto de opciones de escucha de eventos.

## Tabla de Contenido

### Propiedades

- [event](../wiki/Types.EventOptionListener#event)
- [handler](../wiki/Types.EventOptionListener#handler)
- [ns](../wiki/Types.EventOptionListener#ns)
- [options](../wiki/Types.EventOptionListener#options)
- [selector](../wiki/Types.EventOptionListener#selector)

## Propiedades

### event

• **event**: `string`

El nombre del evento o una clave válida de ElementEventMap.

#### Definido en

types.d.ts:116

___

### handler

• **handler**: (`ev`: `Event`) => `any`

El manejador de eventos

#### Declaración de Tipo

▸ (`ev`): `any`

##### Parametros

| Nombre | Tipo |
| :------ | :------ |
| `ev` | `Event` |

##### Retornos

`any`

#### Definido en

types.d.ts:121

___

### ns

• **ns**: `string`

El espacio de nombres del evento.

#### Definido en

types.d.ts:131

___

### options

• **options**: `boolean` \| [`ObjAny`](../wiki/Types#objany)

Opciones adicionales para la escucha del evento.

#### Definido en

types.d.ts:136

___

### selector

• **selector**: `string`

El selector que contiene el eventos.

#### Definido en

types.d.ts:126
